import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleExplore = () => {
    const el = document.getElementById('featured-properties');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="hero"
        aria-label="Hero section" className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#faf8f5]"
      >
        {/* Background image – right portion */}
        <div className="absolute top-[0] right-[0] w-[100%] md:w-[60%] h-[100%] z-[0] opacity-30 md:opacity-100"
        >
          <img
            src="/images/hero_villa.jpg"
            alt="Luxury modern villa with swimming pool and tropical landscaping" className="w-[100%] h-[100%] object-cover [object-position:center]"
          />
          {/* Left fade gradient */}
          <div aria-hidden="true" className="absolute bg-[linear-gradient(to_right,_#faf8f5_0%,_rgba(250,248,245,0.8)_30%,_rgba(250,248,245,0.1)_65%,_transparent_100%)] [inset:0]" />
          {/* Bottom fade */}
          <div aria-hidden="true" className="absolute bg-[linear-gradient(to_top,_rgba(250,248,245,0.85)_0%,_transparent_25%)] [inset:0]" />
        </div>

        {/* Content */}
        <div className="relative z-[1] max-w-[1280px] m-[0_auto] p-[100px_24px_120px] md:p-[120px_24px_160px] w-[100%]">
          <div className="max-w-[560px]">
            {/* Eyebrow label */}
            <p className="text-[0.68rem] font-[600] text-[#c9a96e] mb-[24px] mt-[0] font-['DM_Sans',_sans-serif] [letter-spacing:0.22em] [text-transform:uppercase]">
              Premium Properties. A Brighter Tomorrow.
            </p>

            {/* Main heading */}
            <h1 className="text-[clamp(3rem,_6vw,_5.5rem)] font-[600] text-[#0f2044] m-[0_0_4px] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.0]">
              Find Your<br />Dream Home
            </h1>

            {/* Italic accent line */}
            <p className="text-[clamp(1.8rem,_3.5vw,_3rem)] font-[300] text-[#c9a96e] m-[4px_0_24px] [font-family:Cormorant_Garamond,_Georgia,_serif] [font-style:italic] [line-height:1.2]">
              with Avenora Estates
            </p>

            {/* Description */}
            <p className="text-[1rem] text-[#4a5568] m-[0_0_36px] max-w-[440px] font-['DM_Sans',_sans-serif] [line-height:1.75]">
              Discover exceptional homes, prime locations and lifestyle-driven
              communities — all in one place.
            </p>

            {/* CTA */}
            <button
              onClick={handleExplore}
              aria-label="Explore our property listings" className="btn-gold p-[14px_28px] text-[0.95rem] font-[500]"
            >
              Explore Properties
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Hero;
