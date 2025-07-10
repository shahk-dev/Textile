import { LuBriefcaseMedical, LuHeartPulse, LuStethoscope } from "react-icons/lu";


export default function ServiceSection() {
  return (
    <>
      <section className="pt-12 sm:pt-16">
        <div className="container">
          <h3 className="text-blue-500 uppercase text-sm sm:text-lg text-center font-bold tracking-wide">Care you can believe in</h3>
          <h2 className="text-blue-900 capitalize text-2xl sm:text-4xl text-center mt-2">Our Services</h2>
          <div className='rounded-md border border-gray-200 shadow grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] overflow-hidden mt-6 sm:mt-16'>
            <div className='hover:bg-blue-900 flex flex-col items-center justify-center gap-2 p-8 duration-200 group rounded-sm'>
              <div><LuStethoscope size={32} className="text-blue-500 group-hover:text-blue-400"/></div>
              <p className="group-hover:text-blue-400 uppercase">{`Bepul Ko'rik`}</p>
            </div>
            <div className='hover:bg-blue-900 flex flex-col items-center justify-center gap-2 p-8 duration-200 group rounded-sm'>
              <div><LuHeartPulse size={32} className="text-blue-500 group-hover:text-blue-400"/></div>
              <p className="group-hover:text-blue-400 uppercase">Kardiogramma</p>
            </div>
            <div className='hover:bg-blue-900 flex flex-col items-center justify-center gap-2 p-8 duration-200 group rounded-sm'>
              <div><LuBriefcaseMedical size={32} className="text-blue-500 group-hover:text-blue-400"/></div>
              <p className="group-hover:text-blue-400 uppercase">DNA test</p>
            </div>
            <div className='hover:bg-blue-900 flex flex-col items-center justify-center gap-2 p-8 duration-200 group rounded-sm'>
              <div><LuStethoscope size={32} className="text-blue-500 group-hover:text-blue-400"/></div>
              <p className="group-hover:text-blue-400 uppercase">{`Bepul Ko'rik`}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
