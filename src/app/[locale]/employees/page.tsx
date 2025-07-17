'use client'

import { useEffect, useState } from "react";
import { Department, Employee } from "@/utils/data";
import Loading from "@/components/shared/Loading";
import { useLocale, useTranslations } from "next-intl";
import Card from "@/components/shared/Card";

export default function page() {
    const locale = useLocale();
    const t = useTranslations("HomePage")

    const [departments, setDeparments] = useState<Department[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
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
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
        getDepartments();
    }, []);

    interface DepartmentBtns {
        id: number | string,
        name: string,
        name_ru: string
    }

    const departmentBtns: DepartmentBtns[] = [
        {
            id: departments.length + 1,
            name: 'Barchasi',
            name_ru: 'Все'
        },
        ...departments.map(dept => ({
            id: dept.id,
            name: dept.name,
            name_ru: dept.name_ru
        }))
    ];

    const [selectedDept, setSelectedDept] = useState<string>(() => {
        if (!departmentBtns.length) return '';
        return locale === 'ru' ? departmentBtns[0].name_ru : departmentBtns[0].name;
    });

    const filteredEmployees = selectedDept === 'Barchasi' || selectedDept === 'Все'
        ? employees
        : employees.filter(emp => {
            const deptName = locale === 'ru' ? emp.departments[0]?.name_ru : emp.departments[0]?.name;
            return deptName.toLocaleLowerCase() === selectedDept.toLocaleLowerCase();
        });

    if (loading) return <Loading />
    if (!departments) return null

    return (
        <section className="py-12 sm:py-20">
            <div className="container">
                <h2 className="text-2xl sm:text-4xl text-blue-900 uppercase font-bold text-center">
                    {t('employee-heading')}
                </h2>
                <div className="flex items-center gap-4 flex-wrap mt-6 md:mt-12">
                    {
                        loading ? <Loading /> : departmentBtns?.map(item => {
                            const displayName = locale === 'ru' ? item.name_ru : item.name;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedDept(displayName)}
                                    className={`py-3 px-9 rounded-full font-medium text-blue-900 font-inter transition-all duration-200 ${selectedDept === displayName ? 'bg-blue-900 !text-white' : 'bg-blue-400 hover:bg-blue-300'
                                        }`}
                                >
                                    {displayName}
                                </button>
                            );
                        })
                    }
                </div>
                <div className="flex justify-center mt-6">{filteredEmployees.length === 0 && (locale === 'ru' ? 'В этом отделе нет сотрудников!' : 'Bu Bo\'limda xodimlar mavjud emas!')}</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-6 sm:mt-12'>
                    {
                        filteredEmployees?.map((item) => {
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
                        })
                    }
                </div>
            </div>
        </section>
    )
}
