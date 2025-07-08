import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg">{t('description')}</p>
            <Link href="/about">{t('about')}</Link>
        </div>
    );
}
