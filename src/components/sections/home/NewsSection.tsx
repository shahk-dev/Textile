"use client"

import Button from "@/components/shared/Button";
import Loading from "@/components/shared/Loading";
import NewsCard from "@/components/shared/NewsCard";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const [news, setNews] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('https://perinatal.zumaredu.uz/api/v1/news?limit=100&offset=0');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNews(data.items);
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="mt-12 sm:mt-20">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-sm sm:text-lg uppercase tracking-wide text-blue-500 font-semibold text-center">
              {t('news-description')}
            </h3>
            <h2 className="text-2xl sm:text-4xl text-blue-900 uppercase font-bold text-center">
              {t('news-title')}
            </h2>
          </div>
          {
            loading ? <Loading /> : 
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {news.slice(0, 3).map((data:any) => (
              <NewsCard key={data.id} data={data} />
            ))}
          </div>
          }
        </div>
        <div className="mt-8 flex items-center justify-center group">
          <Button styles="flex items-center gap-2">
            <Link href={`${locale}/news`}>{t('news-btn')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
