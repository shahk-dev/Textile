import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface cardType {
  data: {
    id: number;
    image: string;
    title: string;
    create_at: string;
  };
}

export default function NewsCard({ data }: any) {
  const locale = useLocale();
  const { image, created_at, id, title, title_ru } = data;
  console.log(data)
  return (
    <Link href={`${locale}/news/${id}`}>
      <div className="bg-white cursor-pointer grow shadow hover:scale-[1.01] duration-200 rounded-2xl overflow-hidden">
        <div className="h-[300px] md:h-[400px] relative">
          <Image
            src={image}
            alt={locale === 'uz' ? title : title_ru}
            fill
            loading="lazy"
            className="w-full h-full object-cover object-top border"
          />
        </div>
        <div className="flex flex-col gap-y-3 py-5 px-3">
          <h2 className="text-xl text-blue-900">{locale === 'uz' ? title : title_ru}</h2>
          <p>{created_at}</p>
        </div>
      </div>
    </Link>
  );
}
