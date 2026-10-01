import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface AboutTrustProps {
}

const checklistItems = [
  'Curated premium properties',
  'Expert guidance and support',
  'Transparent and secure transactions',
  'End-to-end real estate solutions'
];

const AboutTrust: React.FC<AboutTrustProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#faf8f5] p-[100px_24px] flex justify-center">
      <div className="max-w-[1200px] w-[100%] flex flex-col md:flex-row items-center gap-[60px] md:gap-[80px] relative">
        
        {/* Desktop Vertical Divider */}
        <div className="hidden md:block absolute left-[50%] top-[10%] bottom-[10%] w-[1px] bg-[rgba(201,169,110,0.2)] [transform:translateX(-50%)]" />

        {/* Left Side: Content */}
        <div className="flex-[1] pr-[0] md:pr-[40px] text-center md:text-right">
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            WHY CHOOSE AVENORA ESTATES
          </span>
          <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            A Trusted Partner<br />in Your Property Journey
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] mb-[36px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            We combine deep market knowledge, a customer-centric approach and a commitment to excellence to deliver a seamless real estate experience.
          </p>
          <button
          onClick={() => navigate('/properties')}
          onMouseEnter={(e) => e.currentTarget.style.background = '#b8985d'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#c9a96e'} className="bg-[#c9a96e] text-[#fff] border-none p-[14px_28px] rounded-[50px] text-[1rem] font-[500] cursor-pointer items-center gap-[8px] transition-[background_0.2s_ease] font-['DM_Sans',_sans-serif] [display:inline-flex]"
          >
            Explore Properties <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side: Checklist */}
        <div className="flex-[1] pl-[0] md:pl-[40px] text-center md:text-left">
          <ul className="p-[0] m-[0] flex flex-col gap-[32px] [list-style:none]">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center gap-[20px]">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#c9a96e] flex items-center justify-center [flex-shrink:0]">
                  <Check size={18} color="#fff" strokeWidth={2.5} />
                </div>
                <span className="text-[1.1rem] text-[#0f2044] font-[500] font-['DM_Sans',_sans-serif]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      
    </section>
  );
};

export default AboutTrust;
