'use client'

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { LuPhoneCall } from "react-icons/lu";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Contact() {
  const t = useTranslations('HomePage');
  return (
    <>
      <section>
        <div className="container">
          <div className="mt-12 sm:mt-20">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl sm:text-[32px] text-blue-900 capitalize">
                {t("contact")}  
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 mt-12 sm:mt-16">
              <div className="basis-[200px] grow bg-blue-400 h-[233px] rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer">
                <div>
                  <LuPhoneCall />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="39"
                    viewBox="0 0 41 39"
                    fill="none"
                    className=""
                  >
                    <path
                      className="group-hover:stroke-white"
                      d="M24.1459 33.1261C24.7274 32.7903 25.1502 32.2345 25.3211 31.5809C25.492 30.9273 25.3972 30.2295 25.0574 29.6409L23.7761 27.4218C23.4363 26.8332 22.8794 26.4021 22.2279 26.2233C21.5764 26.0446 20.8837 26.1328 20.3021 26.4685C15.9167 29.0005 13.3542 24.5621 12.0729 22.3429C10.7917 20.1237 8.22919 15.6853 12.6146 13.1534C13.1962 12.8176 13.6189 12.2618 13.7899 11.6082C13.9608 10.9546 13.8659 10.2568 13.5261 9.66823L12.2449 7.44904C11.905 6.86048 11.3481 6.42939 10.6966 6.25063C10.0451 6.07187 9.35243 6.16006 8.77089 6.49582C3.28908 9.66074 1.28125 13.7789 7.6875 24.8748C14.0938 35.9708 18.6641 36.291 24.1459 33.1261Z"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="group-hover:stroke-white"
                      d="M35.8156 23.962C36.9804 19.4988 36.3314 14.7345 34.0113 10.7159C31.6911 6.6973 27.8896 3.75312 23.442 2.5302M29.1022 22.1199C29.4492 20.7944 29.5325 19.4103 29.3472 18.0468C29.162 16.6833 28.712 15.3671 28.0227 14.1734C27.3335 12.9796 26.4187 11.9318 25.3305 11.0896C24.2423 10.2475 23.002 9.62754 21.6806 9.26527M22.4248 20.2644C22.6577 19.3713 22.5278 18.418 22.0635 17.6139C21.5993 16.8099 20.8387 16.2207 19.9488 15.9758"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-[14px]">
                  <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-bold">
                    telefon
                  </h4>
                  <p className="sm:text-lg text-blue-500 font-medium mt-2 group-hover:text-white">
                    +998 91 611 11 96
                  </p>
                  <p className="sm:text-lg text-blue-500 font-medium mt-2 group-hover:text-white">
                    +998 91 611 11 96
                  </p>
                </div>
              </div>

              <div className="basis-[233px] grow bg-blue-400 h-[233px] rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="39"
                    viewBox="0 0 32 39"
                    fill="none"
                  >
                    <path
                      className="group-hover:stroke-white"
                      d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                    />
                    <path
                      className="group-hover:stroke-white"
                      d="M16.0001 20.32C18.8499 20.32 21.1601 18.0098 21.1601 15.16C21.1601 12.3102 18.8499 10 16.0001 10C13.1503 10 10.8401 12.3102 10.8401 15.16C10.8401 18.0098 13.1503 20.32 16.0001 20.32Z"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="mt-[14px]">
                  <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-bold">
                    joylashuv
                  </h4>
                  <p className="sm:text-lg text-blue-500 font-medium mt-2 group-hover:text-white">
                    Andijon
                  </p>
                  <p className="sm:text-lg text-blue-500 font-medium mt-[5px] group-hover:text-white">
                    anywhere
                  </p>
                </div>
              </div>

              <div className="basis-[233px] grow bg-blue-400 h-[233px] rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="32"
                    viewBox="0 0 39 32"
                    fill="none"
                  >
                    <path
                      className="group-hover:stroke-white"
                      d="M1.7998 1H37.1998V30.5H1.7998V1Z"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="group-hover:stroke-white"
                      d="M37.1998 6.89996L19.4998 18.7L1.7998 6.89996"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-[14px]">
                  <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-bold">
                    email
                  </h4>
                  <p className="sm:text-lg text-blue-500 font-medium mt-2 group-hover:text-white">
                    lorem ipsum
                  </p>
                </div>
              </div>

              <div className="basis-[233px] grow bg-blue-400 h-[233px] rounded-md p-8 group hover:bg-blue-900 duration-300 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      className="group-hover:stroke-white"
                      d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      className="group-hover:stroke-white"
                      d="M21.6777 23.5L16.6777 16V6"
                      stroke="#1F2B6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-[14px]">
                  <h4 className="text-lg md:text-2xl text-blue-900 group-hover:text-white uppercase font-bold">
                    ish vaqti
                  </h4>
                  <p className="sm:text-lg text-blue-500 font-medium mt-2 group-hover:text-white capitalize">
                    24 soat - har kuni
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-12">
            <Map/>
          </div>
        </div>
      </section>
    </>
  );
}
