'use client'

import { useEffect, useState } from "react";
import { Department } from "@/utils/data";
import Loading from "@/components/shared/Loading";
import { useLocale } from "next-intl";

export default function page() {
    const locale = useLocale()

    const [departments, setDeparments] = useState<Department[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getDepartments = async () => {
            try {
                const res = await fetch('https://perinatal.zumaredu.uz/api/v1/departments?limit=100&offset=0');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setDeparments(data.items);
            } catch (err: any) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getDepartments();
    }, []);

    if (loading) return <Loading />
    if (!departments) return null

    return (
        <section className="py-12 sm:py-20">
            <div className="container">
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        departments?.map(item => {
                            return (
                                <button key={item.id} className="py-3 px-9 bg-blue-400 rounded-full font-medium text-blue-900 font-inter hover:bg-blue-300 cursor-pointer transition-all duration-200">{locale === 'ru' ? item.name_ru : item.name}</button>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-12 sm:mt-16'>
                    <div className='shadow hover:scale-[1.01] duration-200 rounded-2xl'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                    <div className='border'>1</div>
                </div>
            </div>
        </section>
    )
}
