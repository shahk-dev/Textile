import Card from '@/components/shared/Card'
import Slider from '@/components/shared/Slider'
import { doctorsData } from '@/utils/data'
import { useTranslations } from 'next-intl'

export default function EmployeeSection() {
    const t = useTranslations('HomePage');
    // const [employee, setEmployee] = useState([]);
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
                    <div className="mt-12 sm:mt-16">
                        <Slider>
                            {doctorsData.map((slide) => (
                                <div
                                    key={slide.id}
                                    className={`flex-[0_0_80%] sm:flex-[0_0_33.33%] px-2`}
                                >
                                    <Card
                                        name={slide.name}
                                        image={slide.image}
                                        job={slide.job}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
