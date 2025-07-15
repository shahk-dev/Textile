import Button from "@/components/shared/Button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../../public/images/hero-bg.png";

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
          <p className="text-sm md:text-lg text-blue-500 capitalize">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="min-h-[80vh] relative">
      <Image
        src={hero}
        alt="stuff image"
        placeholder="blur"
        loading="lazy"
        fill
        className="object-cover object-top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(179deg,_rgba(0,_193,_157,_0.00)_-25.42%,_rgba(2,_0,_67,_0.97)_107.11%)] py-12">
        <div className="container flex flex-col items-center justify-end gap-4 h-full">
          <h1 className="text-3xl sm:text-6xl text-white leading-[120%] font-bold uppercase text-center break-words">
            {t("title")}
          </h1>
          <p className="sm:text-lg md:text-xl text-white/80 font-medium tracking-wide lg:max-w-1/2 text-center">
            {t("description")}
          </p>
          <div className="mt-6 sm:mt-8">
            <Link href={`/${locale}/contact`}>
              <Button styles={"flex items-center gap-2"}>{t("cta")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
