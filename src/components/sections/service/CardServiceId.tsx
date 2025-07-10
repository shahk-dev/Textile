import React from 'react'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { services } from '@/utils/data';

export default function CardServiceId() {
    const router = useParams();
    const { id } = router;
    const filteredService = services.find((item) => item.id === Number(id));
    if (!filteredService) return <p>Xizmat topilmadi</p>;
    return (
        <div>
            <div className='container flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center '>
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">{filteredService.name}</h2>
                    <div className='p-2'>
                        <Image
                            src={filteredService.image}
                            alt={filteredService.name}
                            width={500}
                            height={10}
                            className="w-full h-full object-cover sm:w-70 md:w-125 lg:w-150 xl:w-200 " />
                    </div>
                    <div className='p-2'>
                        <h3 className='text-[32px] text-blue-900'>A passion for putting patients first</h3>
                        <div className='flex flex-col sm:flex-row gap-x-10 gap-y-4 my-6 border'>
                            <div className='flex flex-col gap-4'>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        A Passion for Healing
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        All our best
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        5-Star Care
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        Believe in Us
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        A Legacy of Excellence
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                                    <p className="sm:text-lg md:text font-normal text-black">
                                        Always Caring
                                    </p>
                                </div>
                            </div>

                        </div>
                        <p className='border'>
                            {filteredService.caption}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
