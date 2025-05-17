
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
