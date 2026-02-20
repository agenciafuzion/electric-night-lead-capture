import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <RecruitmentSection />
      <GallerySection />
      <PartnersSection />
      <CTASection />
      <FAQSection />
    </main>
  );
};

export default Index;
