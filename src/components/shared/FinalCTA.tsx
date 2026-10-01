import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section
      aria-labelledby="cta-heading" className="p-[40px_24px] bg-[#f5f0e8]"
    >
      <div className="max-w-[1280px] m-[0_auto] rounded-[24px] overflow-hidden relative min-h-[280px] flex items-center"
      >
        {/* Background image */}
        <img
          src="/images/cta_bg.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy" className="absolute w-[100%] h-[100%] object-cover [inset:0] [object-position:center_right]"
        />

        {/* Dark overlay */}
        <div
          aria-hidden="true" className="absolute bg-[linear-gradient(to_right,_rgba(10,22,50,0.96)_0%,_rgba(10,22,50,0.85)_45%,_rgba(10,22,50,0.45)_75%,_rgba(10,22,50,0.2)_100%)] [inset:0]"
        />

        {/* Content */}
        <div className="relative p-[32px] md:p-[52px_64px] md:max-w-[640px] z-[1]"
        >
          <p className="text-[0.65rem] font-[600] text-[#c9a96e] m-[0_0_12px] font-['DM_Sans',_sans-serif] [letter-spacing:0.22em] [text-transform:uppercase]"
          >
            Ready to Find Your Perfect Home?
          </p>

          <h2
            id="cta-heading" className="font-serif text-[clamp(2.2rem,_4vw,_3.2rem)] font-[600] text-[#fff] m-[0_0_18px] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.1]"
          >
            Let's Make It Happen
          </h2>

          <p className="text-[0.95rem] text-[rgba(255,255,255,0.75)] m-[0_0_32px] font-['DM_Sans',_sans-serif] [line-height:1.7]"
          >
            Explore the best properties, get expert advice and take the next
            step towards your dream home.
          </p>

          <button
            aria-label="Get started with Avenora Estates" className="btn-gold p-[14px_28px] text-[0.95rem] font-[600]"
          >
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
