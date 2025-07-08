import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    const locale = useLocale();

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl mb-8">{t('description')}</p>
            <Link
                href={`/${locale}/contact`}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
                {t('cta')}
            </Link>
        </div>
    );
}
