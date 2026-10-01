import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesCTAProps {
}

const ServicesCTA: React.FC<ServicesCTAProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#faf8f5] p-[40px_24px_100px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] bg-[#0b1f3a] rounded-[24px] overflow-hidden relative flex flex-col md:flex-row items-center shadow-[0_20px_40px_rgba(11,_31,_58,_0.15)]">
        
        {/* Left Content */}
        <div className="p-[40px] md:p-[80px_60px] flex-[1] z-[2] md:max-w-[600px] w-full">
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[20px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            READY TO GET STARTED?
          </span>
          <h2 className="font-serif text-[2.8rem] text-[#ffffff] m-[0_0_24px_0] [line-height:1.2]">
            Let's Build Your<br />Real Estate Goals Together.
          </h2>
          <p className="text-[1.05rem] text-[rgba(255,255,255,0.8)] m-[0_0_40px_0] font-['DM_Sans',_sans-serif] [line-height:1.6]">
            Whether you want to buy, sell, rent or invest, our experts are here to guide you at every step.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#b3955d';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#c9a96e';
              e.currentTarget.style.transform = 'translateY(0)';
            }} className="items-center gap-[8px] bg-[#c9a96e] text-[#fff] border-none p-[16px_32px] rounded-[30px] text-[1rem] font-[600] cursor-pointer transition-[background-color_0.2s_ease,_transform_0.2s_ease] [display:inline-flex] font-['DM_Sans',_sans-serif]"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Image Background with Gradient Overlay */}
        <div className="relative md:absolute top-[0] right-[0] bottom-[0] w-[100%] h-[300px] md:w-[55%] md:h-[100%] z-[1]">
          {/* Gradient to blend image into the solid dark navy background */}
          <div className="absolute top-[0] left-[0] bottom-[0] w-[100%] bg-[linear-gradient(to_right,_#0b1f3a_0%,_rgba(11,31,58,0.7)_40%,_rgba(11,31,58,0.2)_100%)] z-[2]" />
          <img 
            src="/images/cta_bg.jpg" 
            alt="Luxury real estate" className="w-[100%] h-[100%] object-cover block [object-position:center]"
          />
        </div>

      </div>

      
    </section>
  );
};

export default ServicesCTA;
