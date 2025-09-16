import { BlogSection } from "@/components/public/blog-section";
import { ContactSection } from "@/components/public/contact-section";
import { ExperienceSection } from "@/components/public/experience-section";
import { Footer } from "@/components/public/footer";
import HeroSection from "@/components/public/hero-section";
import { HireMeSection } from "@/components/public/hireme-section";
import Navbar from "@/components/public/navbar";
import { PortfolioSection } from "@/components/public/portfolio-section";
import { ServiceSection } from "@/components/public/service-section";
import { TestimonialSection } from "@/components/public/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="z-50">
        <Navbar />
      </header>
      <main className="">
        <div className="relative min-h-screen">
          <HeroSection />
          <ServiceSection />
          <ExperienceSection />
          <PortfolioSection />
          {/* <TestimonialSection /> */}
          {/* <ContactSection /> */}
          {/* <HireMeSection /> */}
          {/* <BlogSection /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
