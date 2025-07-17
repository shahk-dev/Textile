'use client'

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Contact() {
  const t = useTranslations('HomePage');
  return (
    <>
      <section>
        <div className="container">
          <div className="mt-12 sm:mt-20">
            <h2 className="text-2xl sm:text-4xl text-center text-blue-900 uppercase font-bold">
              {t("contact")}
            </h2>
          </div>

          <div className="mt-6 sm:mt-12">
            <Map />
          </div>
        </div>
      </section>
    </>
  );
}
