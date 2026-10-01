import React from 'react';
import { ArrowRight, Home, Key, Building2, MapPin, BarChart3, Handshake } from 'lucide-react';

const services = [
  {
    title: 'Buy Properties',
    desc: 'Discover premium homes, villas, apartments and commercial spaces in the best locations.',
    image: '/images/hero_villa.jpg',
    icon: Home,
  },
  {
    title: 'Sell Properties',
    desc: 'Get the best value for your property with our expert marketing and wide network of buyers.',
    image: '/images/interior_living.jpg',
    icon: Key,
  },
  {
    title: 'Rent Properties',
    desc: 'Find the perfect rental home or list your property for rent with verified tenants.',
    image: '/images/category_apartment.jpg',
    icon: Building2,
  },
  {
    title: 'Invest in Land',
    desc: 'Explore high-potential land investment opportunities in emerging locations.',
    image: '/images/category_land.jpg',
    icon: MapPin,
  },
  {
    title: 'Commercial Properties',
    desc: 'Office spaces, retail shops and commercial buildings for your business growth.',
    image: '/images/category_commercial.jpg',
    icon: BarChart3,
  },
  {
    title: 'Real Estate Consulting',
    desc: 'Get personalized advice, market insights and complete support from our experts.',
    image: '/images/property_maplewood.jpg',
    icon: Handshake,
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[40px_24px_80px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_1fr)] gap-[30px]">
        
        {services.map((service, index) => (
          <div key={index} className="service-card bg-[#fff] rounded-[16px] border-[1px] border-solid border-[rgba(201,169,110,0.15)] overflow-hidden shadow-[0_8px_30px_rgba(15,_32,_68,_0.04)] transition-[transform_0.3s_ease,_box-shadow_0.3s_ease] cursor-pointer flex flex-col">
            {/* Image Wrapper */}
            <div className="relative h-[220px] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} className="service-img w-[100%] h-[100%] object-cover block transition-[transform_0.5s_ease]"
              />
              {/* Floating Icon */}
              <div className="absolute left-[24px] bottom-[-20px] w-[48px] h-[48px] rounded-[50%] bg-[#fff] flex items-center justify-center shadow-[0_4px_12px_rgba(15,_32,_68,_0.08)] z-[2]">
                <service.icon size={20} color="#c9a96e" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Wrapper */}
            <div className="p-[36px_24px_24px] flex flex-col flex-[1]">
              <h3 className="font-serif text-[1.5rem] text-[#0f2044] m-[0_0_12px_0]">
                {service.title}
              </h3>
              <p className="text-[0.95rem] text-[#6b7280] m-[0_0_24px_0] flex-[1] font-['DM_Sans',_sans-serif] [line-height:1.6]">
                {service.desc}
              </p>
              
              <div className="service-link items-center gap-[6px] text-[0.95rem] font-[600] text-[#c9a96e] mt-[auto] transition-[gap_0.2s_ease] [display:inline-flex] font-['DM_Sans',_sans-serif]">
                Learn More <ArrowRight size={16} className="arrow-icon transition-[transform_0.2s_ease]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default ServicesGrid;
