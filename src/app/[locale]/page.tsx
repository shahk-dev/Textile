import HeroSection from '@/components/sections/home/HeroSection';
import NewsSection from '@/components/sections/home/NewsSection';

export default function HomePage() {
    return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* news section */}
      <div className="sm:pt-6">
        <NewsSection />
      </div>

      {/* services section */}
      {/* <ServiceSection /> */}

      {/* our doctors section */}
      {/* <EmployeeSection /> */}

      {/* contact section */}
      {/* <Contact /> */}
    </>
  );
}
