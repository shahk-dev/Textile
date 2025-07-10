import Image from "next/image";
export default function AboutMain() {
  return (
    <section className="mb-16">
      <div className="container flex flex-col gap-y-5 md:flex-row md:items-start justify-center gap-x-5">
        <Image
          src={"/images/about-img1.png"}
          alt="img1"
          width={2000}
          height={1300}
          className="hidden md:block lg:w-102 lg:h-127 md:w-77 md:h-102"
        />
        <div className="flex flex-col gap-y-7 max-w-141">
          <div className="">
            <p className="font-geist_mono font-bold text-sm sm:text-lg md:text-lg lg:text-lg uppercase text-blue-500 tracking-[2px]">
              Welcome to Hospital name
            </p>
            <h3 className="font-roboto text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold text-blue-900">
              Best Care for Your Good Health
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4">
            <div className="flex flex-col gap-y-4">
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
              <div className="flex items-center gap-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                <p className="sm:text-lg md:text font-normal text-black">
                  Always Caring
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
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
              <div className="flex items-center gap-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500"></div>
                <p className="sm:text-lg md:text font-normal text-black">
                  A Legacy of Excellence
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="font-normal sm:text-[16px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p className="font-normal sm:text-[16px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
