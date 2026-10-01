import React from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { number: '12K+', label: 'Happy Clients' },
  { number: '500+', label: 'Properties Listed' },
  { number: '25+', label: 'Cities' },
  { number: '98%', label: 'Success Rate' },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-heading" className="bg-[#f5f0e8] p-[80px_24px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[64px] items-center max-w-[1280px] m-[0_auto]">
        {/* Left: interior image with decorative text overlay */}
        <div className="relative rounded-[20px] overflow-hidden">
          <img
            src="/images/interior_living.jpg"
            alt="Luxury modern living room with floor-to-ceiling windows and city view"
            loading="lazy" className="w-[100%] h-[460px] object-cover block"
          />
          {/* Decorative script overlay */}
          <div
            aria-hidden="true" className="absolute bottom-[28px] left-[28px] bg-[rgba(15,32,68,0.72)] rounded-[12px] p-[16px_22px] [backdrop-filter:blur(8px)]"
          >
            <p className="text-[1.6rem] font-[300] text-[#c9a96e] m-[0] [font-family:Cormorant_Garamond,_Georgia,_serif] [font-style:italic] [line-height:1.35]"
            >
              A Better<br />Place<br />Awaits
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <p className="text-[0.68rem] font-[600] text-[#c9a96e] m-[0_0_12px] font-['DM_Sans',_sans-serif] [letter-spacing:0.2em] [text-transform:uppercase]"
          >
            Why Choose Avenora
          </p>

          <h2
            id="why-heading" className="font-serif text-[clamp(2rem,_3.5vw,_2.8rem)] font-[600] text-[#0f2044] m-[0_0_20px] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.15]"
          >
            More Than Properties.<br />We Build Better Futures.
          </h2>

          <p className="text-[0.95rem] text-[#4b5563] m-[0_0_32px] font-['DM_Sans',_sans-serif] [line-height:1.75]"
          >
            Whether you're buying, selling or renting, we make the process simple,
            transparent and stress-free. Your dream home is closer than you think.
          </p>

          <button
            aria-label="Learn more about Avenora Estates" className="btn-navy p-[12px_24px] text-[0.9rem] mb-[40px]"
          >
            Learn More
            <ArrowRight size={16} />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[32px] border-t border-[rgba(201,169,110,0.25)]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[2.2rem] font-[600] text-[#0f2044] mb-[6px] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1]"
                >
                  {s.number}
                </div>
                <div className="text-[0.78rem] text-[#6b7280] font-['DM_Sans',_sans-serif] [line-height:1.4]"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default WhyChooseSection;
