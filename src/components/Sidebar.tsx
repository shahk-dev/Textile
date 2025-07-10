"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { navItems } from "@/utils/data";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import { useLocale, useTranslations } from "next-intl";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <nav>
      <div className="container">
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 py-2">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={"/icons/call.svg"}
                alt="call icon"
                width={26}
                height={26}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm text-blue-900 uppercase font-medium">
                telefon
              </h4>
              <p className="text-sm text-blue-500 font-medium">
                +998 91 611 11 96
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <Image
                src={"/icons/time.svg"}
                alt="call icon"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm text-blue-900 uppercase font-medium">
                ish vaqti
              </h4>
              <p className="text-sm text-blue-500 font-medium capitalize">
                09:00 - 20:00 - har kuni
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={"/icons/location.svg"}
                alt="call icon"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm text-blue-900 uppercase font-medium">
                Manzil
              </h4>
              <p className="text-sm text-blue-500 font-medium">
                0123 Some Place
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-2 relative">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Logo size="w-20" />
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white cursor-pointer"
              >
                {isOpen ? (
                  <div>
                    <LiaTimesSolid size={28} />
                  </div>
                ) : (
                  <div>
                    <LiaBarsSolid size={28} />
                  </div>
                )}
              </button>
            </div>
            <ul
              className={`absolute top-full left-0 z-50 w-full px-10 py-12  bg-blue-400 flex flex-col gap-5 items-center ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } duration-500 ease-in-out origin-top`}
            >
              {navItems.map((item, index) => {
                const { name, url } = item;
                return (
                  <li
                    onClick={() => setIsOpen(!isOpen)}
                    key={index}
                    className={`${
                      isOpen ? "opacity-100" : "opacity-0"
                    } duration-300 text-2xl`}
                  >
                    <Link href={`/${locale}${url}`}>{t(name)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
