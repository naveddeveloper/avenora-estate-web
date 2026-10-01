import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutStory: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[120px_24px_80px] flex justify-center">
      <div className="max-w-[1200px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[60px] lg:gap-[80px] items-center">
        
        {/* Left Side: Image */}
        <div className="relative">
          <div className="absolute top-[-15px] left-[-15px] w-[100%] h-[100%] border-[2px_solid_rgba(201,169,110,0.4)] rounded-[24px] z-[0]" />
          <img 
            src="/images/interior_living.jpg" 
            alt="Premium luxury interior" className="w-[100%] object-cover rounded-[24px] shadow-[0_20px_40px_rgba(15,_32,_68,_0.08)] relative z-[1] block [aspect-ratio:4/3]"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            OUR STORY
          </span>
          <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            A Passion for<br />Better Living
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] mb-[36px] max-w-[500px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            Avenora Estates was founded with a simple vision — to make real estate easier, more transparent and more human. What started as a passion for exceptional properties has grown into a trusted platform helping thousands of people find homes, investments and opportunities across India and beyond.
          </p>
          <button
          onMouseEnter={(e) => e.currentTarget.style.background = '#b8985d'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#c9a96e'} className="bg-[#c9a96e] text-[#fff] border-none p-[14px_28px] rounded-[50px] text-[1rem] font-[500] cursor-pointer items-center gap-[8px] transition-[background_0.2s_ease] font-['DM_Sans',_sans-serif] [display:inline-flex]"
          >
            Learn More <ArrowRight size={18} />
          </button>
        </div>

      </div>

      
    </section>
  );
};

export default AboutStory;
