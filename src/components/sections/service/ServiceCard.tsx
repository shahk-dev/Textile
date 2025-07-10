import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { services } from "@/utils/data";

export default function serviceCard() {
  return (
    <div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {services.map((card) => (
              <div
                key={card.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={1920}
                    height={1280}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl text-blue-900 font-medium mb-2">
                    {card.name}
                  </h2>
                  <p className="text-[#212124] text-sm mb-4">{card.caption}</p>
                  <Link href={`/services/${card.id}`} className="text-blue-500">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

