import Image from "next/image";

export default function Card({
  image,
  name,
  job,
}: {
  image: string;
  name: string;
  job: string;
}) {
  return (
    <div className="rounded-md overflow-hidden group cursor-pointer">
      <div className="h-[350px] w-full">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="py-6 text-center bg-blue-900 group-hover:bg-blue-400 duration-300">
        <p className="text-lg group-hover:text-blue-900 text-blue-400">
          {name}
        </p>
        <h2 className="text-lg font-bold uppercase tracking-[2px] group-hover:text-blue-900 text-blue-400">
          {job}
        </h2>
      </div>
    </div>
  );
}
