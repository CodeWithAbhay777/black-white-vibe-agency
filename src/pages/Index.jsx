
import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal with fixed hover behavior
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
        
        // Make sure hover doesn't hide the element by adding this class
        element.addEventListener('mouseenter', () => {
          element.classList.add('hover-visible');
        });
        
        element.addEventListener('mouseleave', () => {
          element.classList.remove('hover-visible');
        });
      });
    };
    
    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);
    revealElements(); // Run once on mount
    
    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('load', revealElements);
    };
  }, []);

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
};

export default Index;
