'use client'

import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Loading from '@/components/shared/Loading'
import Slider from '@/components/shared/Slider'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export interface Department {
    id: number;
    name: string;
    name_ru: string;
}

export interface Employee {
    id: number;
    full_name: string;
    full_name_ru: string;
    about: string;
    about_ru: string;
    experience: number;
    departments: Department[];
    image: string;
}

export interface EmployeesResponse {
    items: Employee[];
    count: number;
}

export default function EmployeeSection() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await fetch('https://perinatal.zumaredu.uz/api/v1/employees?limit=100&offset=0');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setEmployees(data.items);
            } catch (err: any) {
                console.error(err);
                setError(err.message || 'Server error');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);


    if (error) return <div className="text-red-500">Xato: {error}</div>;


    return (
        <section id='employee'>
            <div className="container">
                <div className="mt-12 sm:mt-20">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-sm sm:text-lg uppercase tracking-[2.2px] text-blue-500 font-semibold">
                            {t('employee-desc')}
                        </h3>
                        <h2 className="text-2xl sm:text-[32px] text-blue-900 uppercase font-bold">
                            {t('employee-heading')}
                        </h2>
                    </div>

                    {
                        loading ? <Loading /> :
                            <div className="mt-12 sm:mt-16">
                                <Slider length={employees.length}>
                                    {employees?.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`flex-[0_0_80%] sm:flex-[0_0_33.33%] px-2`}
                                            >
                                                <Card
                                                    name={locale === 'ru' ? item.full_name_ru : item.full_name}
                                                    image={item.image}
                                                    job={locale === 'ru' ? item.about_ru : item.about}
                                                />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                    }

                    <div className='flex justify-center'>
                        <Link href={`${locale}/employees`}>
                            <Button styles='flex items-center gap-2'>
                                {t('employees-btn')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
