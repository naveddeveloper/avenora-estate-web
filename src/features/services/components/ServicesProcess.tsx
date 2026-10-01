import React from 'react';
import { Search, FileText, Settings, Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Understand',
    desc: 'We learn about your goals and requirements.'
  },
  {
    num: '02',
    icon: FileText,
    title: 'Plan',
    desc: 'Get a customized strategy and options.'
  },
  {
    num: '03',
    icon: Settings,
    title: 'Execute',
    desc: 'We handle the process with expert support.'
  },
  {
    num: '04',
    icon: Check,
    title: 'Achieve',
    desc: 'You get the best results with complete peace of mind.'
  }
];

const ServicesProcess: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[100px_24px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] flex flex-col gap-[60px]">
        
        {/* Header */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            HOW OUR SERVICES WORK
          </span>
          <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0] [line-height:1.15]">
            A Simple Process<br />for Better Results
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,_1fr)] gap-[40px] md:gap-[60px] lg:gap-[24px] relative">
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-[20px] relative">
              
              {/* Icon & Connector */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[64px] h-[64px] rounded-[50%] border-[1px] border-solid border-[#c9a96e] flex items-center justify-center bg-[#faf8f5] z-[2]">
                  <step.icon size={28} color="#c9a96e" strokeWidth={1.5} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-[1] h-[1px] bg-[#c9a96e] relative ml-[8px] mr-[8px]">
                    <ArrowRight size={16} color="#c9a96e" className="absolute top-[50%] right-[-8px] [transform:translateY(-50%)]" />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div>
                <span className="text-[0.9rem] font-[700] text-[#c9a96e] mb-[8px] block font-['DM_Sans',_sans-serif]">
                  {step.num}
                </span>
                <h3 className="text-[1.2rem] font-[600] text-[#0f2044] m-[0_0_10px_0] font-['DM_Sans',_sans-serif]">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.6]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

      
    </section>
  );
};

export default ServicesProcess;
