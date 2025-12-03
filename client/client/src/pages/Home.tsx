import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

export default function Home() {
  // Set the page title
  useEffect(() => {
    document.title = "Shree Enterprise - Fire Safety Solutions";
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <ServicesSection />
      <CTASection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
