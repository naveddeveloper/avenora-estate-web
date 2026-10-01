import React from 'react';
import { Shield, Users, Gem, Headset } from 'lucide-react';

const benefits = [
  { icon: Shield, title: 'Expert Guidance', desc: 'Years of market experience' },
  { icon: Users, title: 'Client-Centric Approach', desc: 'Your satisfaction comes first' },
  { icon: Gem, title: 'Transparent Process', desc: 'No hidden fees or surprises' },
  { icon: Headset, title: 'Ongoing Support', desc: "We're here even after the deal" }
];

const ServicesWhyChoose: React.FC = () => {
  return (
    <section className="bg-[#f6f4f0] p-[100px_24px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] lg:gap-[60px] items-center">
        
        {/* Left Side: Content */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            WHY CHOOSE OUR SERVICES
          </span>
          <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            Your Goals,<br />Our Commitment
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] m-[0] max-w-[500px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            We go beyond listings to give you a seamless, reliable and rewarding real estate experience. Our services are designed to save you time, reduce stress and help you make confident decisions.
          </p>
        </div>

        {/* Right Side: Benefits Grid */}
        <div className="bg-[#fff] rounded-[24px] p-[24px] md:p-[40px] shadow-[0_12px_40px_rgba(15,_32,_68,_0.04)] border-[1px] border-solid border-[rgba(201,169,110,0.15)] grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:gap-[40px]">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center [flex-shrink:0]">
                <item.icon size={20} color="#c9a96e" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[1.05rem] font-[600] text-[#0f2044] m-[0_0_6px_0] font-['DM_Sans',_sans-serif] [line-height:1.2]">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.5]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default ServicesWhyChoose;
