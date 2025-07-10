
import Image from "next/image";
import React from "react";
import { BsEye } from "react-icons/bs";

interface cardType {
  data: {
    id: number;
    image: string;
    name: string;
    date: string;
    views: string;
  };
}

export default function NewsCard({ data }: cardType) {
  const { image, name, date, views } = data;
  return (
    <div className="bg-white cursor-pointer grow shadow hover:scale-[1.01] duration-200 rounded-2xl overflow-hidden">
      <div className="h-[400px]">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-y-3 py-5 px-3">
        <h2 className="text-xl text-blue-900">{name}</h2>
        <div className="flex justify-between items-center">
          <p>{date}</p>
          <div className="flex items-center gap-x-1">
            <div>
              <BsEye />
            </div>
            <p>{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
