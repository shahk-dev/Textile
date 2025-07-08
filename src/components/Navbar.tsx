import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href={`/${locale}`} className="hover:text-blue-200">
            {t('home')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-blue-200">
            {t('about')}
          </Link>
          <Link href={`/${locale}/services`} className="hover:text-blue-200">
            {t('services')}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-blue-200">
            {t('contact')}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}