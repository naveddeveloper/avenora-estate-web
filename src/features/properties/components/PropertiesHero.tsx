import React from 'react';

const PropertiesHero: React.FC = () => {
  return (
    <section className="pt-[120px] pb-[60px] bg-[#faf8f5] border-b-[1px] border-solid border-b-[rgba(201,169,110,0.15)]"
    >
      <div className="max-w-[1280px] m-[0_auto] p-[0_24px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px] md:gap-[60px] items-center"
      >
        <div>
          <h1 className="font-serif text-[3.5rem] text-[#0f2044] mb-[24px] [line-height:1.1]"
          >
            Discover Your Next<br />
            <span className="text-[#c9a96e] [font-style:italic]">Property</span>
          </h1>
          <p className="text-[1.1rem] text-[#4b5563] max-w-[500px] mb-[32px] font-['DM_Sans',_sans-serif] [line-height:1.6]"
          >
            Explore our extensive portfolio of premium properties across India. Find the perfect home, investment, or commercial space tailored to your lifestyle.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-[-20px] right-[-20px] w-[100%] h-[100%] border-[2px_solid_#c9a96e] rounded-[24px] z-[0]" />
          <img 
            src="/images/hero_villa.jpg" 
            alt="Premium luxury villa" className="w-[100%] h-[400px] object-cover rounded-[24px] relative z-[1] shadow-[0_20px_40px_rgba(15,_32,_68,_0.1)]" 
          />
        </div>
      </div>
      
      
    </section>
  );
};

export default PropertiesHero;
