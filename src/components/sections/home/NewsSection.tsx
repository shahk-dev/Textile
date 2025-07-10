import Button from "@/components/shared/Button";
import NewsCard from "@/components/shared/NewsCard";
import { contactData } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function NewsSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section>
      <div className="container">
        <div className="mt-12 sm:mt-20">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-sm sm:text-lg uppercase tracking-wide text-blue-500 font-bold">
              {t('news-description')}
            </h3>
            <h2 className="text-2xl sm:text-4xl text-blue-900 capitalize">
              {t('news-title')}
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {contactData.slice(0, 3).map((data) => (
              <NewsCard key={data.id} data={data} />
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center group">
          <Button styles="flex items-center gap-2">
            <Link href={`${locale}/news`}>{t('news-btn')}</Link>
            <BsArrowRight size={18} className="group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
}
