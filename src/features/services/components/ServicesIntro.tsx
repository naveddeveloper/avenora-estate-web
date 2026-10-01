import React from 'react';
import { Shield, Users, Gem, Headset } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'Trusted Guidance', desc: 'Expert advice at every step.' },
  { icon: Users, title: 'Personalized Support', desc: 'Tailored to your goals.' },
  { icon: Gem, title: 'Premium Listings', desc: 'Verified and high-quality.' },
  { icon: Headset, title: 'End-to-End Service', desc: 'From search to settlement.' },
];

const ServicesIntro: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[140px_24px_80px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] md:gap-[60px] items-center">
        
        {/* Left Side: Content */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            OUR SERVICES
          </span>
          <h1 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            Complete Real Estate<br />Solutions for Every Need
          </h1>
          <p className="text-[1.05rem] text-[#6b7280] m-[0] max-w-[500px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            Whether you're looking to buy, sell, rent or invest, Avenora Estates provides expert guidance and end-to-end support to make your property journey simple, transparent and rewarding.
          </p>
        </div>

        {/* Right Side: 4 Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-[repeat(4,_1fr)] gap-[16px] [align-items:start]">
          {highlights.map((item) => (
            <React.Fragment key={item.title}>
              <div className="flex flex-col items-center text-center gap-[16px]">
                <div className="w-[56px] h-[56px] rounded-[50%] bg-[#fff] border-[1px] border-solid border-[rgba(201,169,110,0.2)] flex items-center justify-center shadow-[0_4px_12px_rgba(15,_32,_68,_0.04)]">
                  <item.icon size={24} color="#c9a96e" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[1rem] font-[600] text-[#0f2044] m-[0_0_8px_0] font-['DM_Sans',_sans-serif] [line-height:1.2]">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.5]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default ServicesIntro;
