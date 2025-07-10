import Link from "next/link";
import { navItems } from "@/utils/data";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-blue-900 mt-12 sm:mt-16">
      <div className="container">
        <div className="flex flex-col gap-y-12 py-12 sm:py-16 px-5">
          <div className="flex flex-wrap gap-y-5 justify-between items-start">
            <div className="flex flex-col gap-y-5 sm:gap-y-8">
              <Logo size="w-24"/>
              <p className="text-white text-lg">
                Leading the Way in Medical Execellence, Trusted Care.
              </p>
            </div>
            <div className="flex flex-wrap gap-y-8 gap-x-15 justify-start lg:justify-center items-start">
              <div className="flex flex-col gap-y-5 sm:gap-y-8">
                <h2 className="text-lg font-semibold text-white">
                  Important Links
                </h2>
                <div className="flex flex-col gap-y-2">
                  {navItems.map((item, index) => {
                    return (
                      <p key={index} className="">
                        <Link href={item.url} className="text-white text-lg">
                          {item.name}
                        </Link>
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-y-5 sm:gap-y-8">
                <h2 className="text-lg font-semibold text-white">Contact</h2>
                <div className="flex flex-col gap-y-2">
                  <Link href={"tel:+998901000001"} className="text-white">
                    Phone: +998901000001
                  </Link>
                  <p className="text-white">Email: fildineesoe@gmail.com</p>
                  <p className="text-white">Address: 0123 Some place</p>
                  <p className="text-white">Some country</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-blue-400"></div>
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-[16px] text-white">
              © 2025 Hospital’s name All Rights Reserved by Zumar Soft & Zumar Education
            </p>
            <div className="flex gap-x-3 items-center">
              <FaTelegramPlane className="text-2xl text-blue-400" />
              <FaFacebookF className="text-2xl text-blue-400" />
              <RiInstagramFill className="text-2xl text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
