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
    <div className="rounded-2xl overflow-hidden cursor-pointer flex flex-col h-[500px] shadow hover:scale-[1.01] duration-200">
      <div className="grow relative h-[350px]">
        {
          image ? <Image
            src={`https://perinatal.zumaredu.uz${image}`}
            alt={name || 'card image'}
            fill
            className="w-full h-full z-10"
          /> : <div className="w-full h-full bg-blue-400 flex items-center justify-center">No image</div>
        }
      </div>
      <div className="p-4 text-center bg-white h-[150px]">
        <p className="text-lg">
          {name}
        </p>
        <h2 className="text-lg font-medium tracking-wide">
          {job}
        </h2>
      </div>
    </div>
  );
}
