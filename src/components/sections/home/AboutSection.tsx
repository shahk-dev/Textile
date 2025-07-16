import { useTranslations } from "next-intl";
import { GoClock } from "react-icons/go";
import { LuStethoscope, LuHeartPulse } from "react-icons/lu";
import { PiHospital } from "react-icons/pi";

export default function AboutSection() {
  const t = useTranslations("AboutPage");
  return (
    <section id="about">
      <div className="container">
        <div className="mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-4xl text-blue-900 uppercase font-bold text-center">
            {t("heading")}
          </h2>

          <div className="text-lg sm:text-xl mt-12 sm:mt-16">
            <p>
              <span className="font-bold">{t("respublika")}</span>{" "}
              {t("davlat-muassasasi")}
            </p>

            <p className="mt-8">{t("markazda-ilmiy")}</p>

            <p className="mt-8">{t("respublika-viloyatlari")}</p>

            <h4 className="mt-8 font-bold text-2xl">
              {t("markaz-vazifalari")}:
            </h4>
            <ul className="px-5 mt-5 flex flex-col gap-2">
              <li className="list-disc">{t("v1")}</li>
              <li className="list-disc">{t("v2")}</li>
              <li className="list-disc">{t("v3")}</li>
              <li className="list-disc">{t("v4")}</li>
            </ul>

            <p className="mt-8">{t("sertifikat-yili")}</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 mt-12 sm:mt-16">
            <div className="bg-blue-400 rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer flex flex-col items-center">
              <div>
                <GoClock className="group-hover:text-white text-6xl text-blue-900" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-semibold">
                  {t("experience")}
                </h4>
                <p className="sm:text-lg text-blue-500 font-medium mt-4 group-hover:text-white">
                  {t("experience-desc")}
                </p>
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer flex flex-col items-center">
              <div>
                <LuStethoscope className="group-hover:text-white text-6xl text-blue-900" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-semibold">
                  {t("amount-expert")}
                </h4>
                <p className="sm:text-lg text-blue-500 font-medium mt-4 group-hover:text-white">
                  {t("expert-desc")}
                </p>
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer flex flex-col items-center">
              <div>
                <PiHospital className="group-hover:text-white text-6xl text-blue-900" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-semibold">
                  {t("numbers-branch")}
                </h4>
                <p className="sm:text-lg text-blue-500 font-medium mt-4 group-hover:text-white">
                  {t("branch-desc")}
                </p>
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer flex flex-col items-center">
              <div>
                <LuHeartPulse className="group-hover:text-white text-6xl text-blue-900" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-semibold">
                  {t("amount-services")}
                </h4>
                <p className="sm:text-lg text-blue-500 font-medium mt-4 group-hover:text-white capitalize">
                  {t("service-desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
