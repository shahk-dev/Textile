import AboutSection from "@/components/sections/home/AboutSection";
import EmployeeSection from "@/components/sections/home/EmployeeSection";
import HeroSection from "@/components/sections/home/HeroSection";
import NewsSection from "@/components/sections/home/NewsSection";
import ServiceSection from "@/components/sections/home/ServiceSection";

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* news section */}

      {/* About section */}
      <AboutSection />

      {/* services section */}
      <ServiceSection />
    </>
  );
}
