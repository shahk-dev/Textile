import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";

import React from "react";
import { useTranslations } from "next-intl";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { VscCallIncoming } from "react-icons/vsc";

export default function Topbar() {
  const t = useTranslations("Navigation");
  return (
    <div className="container">
      <div className="flex items-center md:justify-end flex-wrap gap-x-5 sm:gap-x-10 md:gap-x-20 gap-y-2 py-2">
        <div className="flex items-center gap-4">
          <div>
            <VscCallIncoming className="text-blue-900 text-2xl" />
          </div>
          <div>
            <h4 className=" text-blue-900 uppercase font-medium">
              {t("phone")}
            </h4>
            <a href="tel:+998916111196" className="text-blue-500 font-medium">
              +998 91 611 11 96
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <GoClock className="text-blue-900 text-2xl" />
          </div>
          <div>
            <h4 className=" text-blue-900 uppercase font-medium">
              {t("duration")}
            </h4>
            <p className=" text-blue-500 font-medium capitalize">24/7</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <IoLocationOutline className="text-blue-900 text-2xl" />
          </div>
          <div>
            <h4 className="text-blue-900 uppercase font-medium">
              {t("location-title")}
            </h4>
            <p className="capitalize text-blue-500 font-medium">
              {t("location")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
