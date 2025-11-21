'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';


export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        const path = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(path);
    };

    return (
        <div className="flex space-x-2">
            {['uz', 'ru' , 'en'].map((lang) => (
                <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-3 py-1 rounded ${locale === lang
                            ? 'bg-blue-800 text-white'
                            : 'bg-blue-500 text-white hover:bg-blue-400'
                        }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}