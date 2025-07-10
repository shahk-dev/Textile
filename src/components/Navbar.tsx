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
    <nav className="bg-blue-900 text-white py-2">
      <div className="container flex justify-between items-center">
        <div>
          <Logo size="w-20"/>
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

        {/* <div className="flex items-center sm:gap-5 md:gap-10 font-roboto text-lg">
          <Link href={`/${locale}`} className="hover:text-blue-200">
            {t("home")}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-blue-200">
            {t("about")}
          </Link>
          <Link href={`/${locale}/services`} className="hover:text-blue-200">
            {t("news")}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-blue-200">
            {t("contact")}
          </Link>
        </div> */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
