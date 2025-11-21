import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { navItems } from "@/utils/data";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <nav className="bg-white text-black py-6">
      <div className="container flex justify-between items-center">
        <div>
             <Logo size="w-50"/>
        </div>

        <ul className="flex items-center sm:gap-5 md:gap-10 font-roboto text-lg">
          {navItems.map((item, index) => {
            const { name, url } = item;
            return (
              <li key={index}>
                <Link href={`/${locale}${url}`}>{t(name)}</Link>
              </li>
            );
          })}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
