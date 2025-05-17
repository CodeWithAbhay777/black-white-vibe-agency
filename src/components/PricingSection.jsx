
import React, { useState, useEffect, useRef } from 'react';

const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 1499,
    description: 'Perfect for small businesses getting started with digital presence',
    features: [
      'Custom website (up to 5 pages)',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month of support',
      'Basic analytics setup',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: 3999,
    description: 'Comprehensive solution for established businesses looking to grow',
    features: [
      'Custom website (up to 15 pages)',
      'Advanced responsive design',
      'Comprehensive SEO package',
      'E-commerce integration (up to 50 products)',
      'Email marketing setup',
      '3 months of support',
      'Content management system',
      'Performance optimization',
      'Social media integration',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 9999,
    description: 'Full-scale digital transformation for large businesses',
    features: [
      'Custom web application',
      'Advanced UI/UX design',
      'Full e-commerce functionality',
      'Custom CMS development',
      'Advanced analytics integration',
      'API development and integration',
      '12 months of support',
      'Dedicated project manager',
      'Monthly performance reports',
      'Security audits and optimization',
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, isActive, onSelect }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`reveal relative bg-white border ${plan.popular ? 'border-black' : 'border-gray-200'} 
                  rounded-2xl p-8 transition-all duration-300
                  ${isActive ? 'transform scale-105 shadow-xl z-10' : 'shadow-md'}`}
      onMouseEnter={() => onSelect(plan.id)}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-500"> / project</span>
      </div>
      
      <p className="text-gray-600 mb-6">{plan.description}</p>
      
      <div className="border-t border-gray-100 pt-6 mb-6">
        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-black mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        className={`w-full py-3 rounded-md transition-colors ${
          plan.popular 
            ? 'bg-black text-white hover:bg-gray-800' 
            : 'border border-black hover:bg-black hover:text-white'
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState(2);
  
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-16 reveal">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 text-gray-500">Pricing</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Investment <span className="text-outline">Plans</span></h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Transparent pricing with no hidden fees. Choose the package that best suits your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              isActive={plan.id === activePlan}
              onSelect={setActivePlan}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-gray-500 mb-6">Need a custom solution? Contact us for a personalized quote.</p>
          <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
