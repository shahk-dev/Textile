import Button from "@/components/shared/Button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Card({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center justify-start gap-4 bg-white shadow-2xl py-2 px-4 rounded-md w-40 sm:w-52 h-16 md:h-26 md:w-80">
      <div className="w-6 md:w-8">
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="md:text-lg text-blue-900 capitalize font-medium">
          {title}
        </h4>
        {+subtitle.slice(1) ? (
          <a
            href={`tel:${subtitle}`}
            className="text-sm md:text-lg text-blue-500 capitalize"
          >
            {subtitle}
          </a>
        ) : (
          <p className="text-sm md:text-lg text-blue-500 capitalize">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="hero bg-top-right sm:bg-top-center md:bg-top-left min-h-[375px] sm:min-h-[550px] py-8 flex items-center shadow-[inset_0_0_100vw_black] relative">
      <div className="container">
        <h3 className="text-lg text-blue-500 uppercase font-bold tracking-wide font-geist sm:max-w-1/2 md:max-w-1/3">
          {t("description")}
        </h3>
        <h1 className="text-2xl sm:text-5xl text-blue-900 leading-[130%] font-medium max-w-[260px] sm:max-w-[520px] capitalize">
          {t("title")}
        </h1>
        <div className="mt-6 sm:mt-8">
          <Link href={`/${locale}/contact`}>
            <Button styles={"capitalize"}>{t("cta")}</Button>
          </Link>
        </div>
      </div>

      <div className="hidden sm:block w-full absolute bottom-0 left-0 translate-y-1/2">
        <div className="container">
          <div className="flex items-center justify-center gap-2 md:gap-10 lg:gap-20">
            <Card
              image="/icons/call.svg"
              title={`${t("phone")}`}
              subtitle="+998916111196"
            />
            <Card
              image="/icons/time.svg"
              title={t("time-title")}
              subtitle="24/7"
            />
            <Card
              image="/icons/location.svg"
              title={t("location-title")}
              subtitle={t("location")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
