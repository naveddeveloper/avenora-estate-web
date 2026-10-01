import React from 'react';
import ServicesIntro from '@/features/services/components/ServicesIntro';
import ServicesGrid from '@/features/services/components/ServicesGrid';
import ServicesWhyChoose from '@/features/services/components/ServicesWhyChoose';
import ServicesProcess from '@/features/services/components/ServicesProcess';
import ServicesCTA from '@/features/services/components/ServicesCTA';

interface ServicesPageProps {
}

const ServicesPage: React.FC<ServicesPageProps> = () => {
    return (
    <div className="min-h-[100vh] bg-[#faf8f5]">
      <ServicesIntro />
      <ServicesGrid />
      <ServicesWhyChoose />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
