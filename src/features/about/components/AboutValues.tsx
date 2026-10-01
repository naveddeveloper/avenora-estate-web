import React from 'react';
import { Users, Shield, Gem, Leaf } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'People First',
    description: 'Your goals and dreams always come first.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest advice and transparent process.'
  },
  {
    icon: Gem,
    title: 'Excellence',
    description: 'Curated properties and quality service.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    description: 'Building better communities for tomorrow.'
  }
];

const AboutValues: React.FC = () => {
  return (
    <section className="bg-[#f6f4f0] p-[100px_24px] flex justify-center">
      <div className="max-w-[1200px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] lg:gap-[80px] items-center">
        
        {/* Left Side: Content */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            OUR VALUES
          </span>
          <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            Guided by<br />What Matters
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] max-w-[480px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            Our values shape everything we do. They help us create meaningful experiences, build lasting relationships and make a positive impact in the communities we serve.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
          {values.map((value, index) => (
            <div key={index}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} className="bg-[#fff] border-[1px] border-solid border-[rgba(201,169,110,0.15)] rounded-[16px] p-[32px_24px] shadow-[0_8px_30px_rgba(15,_32,_68,_0.04)] flex flex-col items-center text-center transition-[transform_0.3s_ease]"
            >
              <div className="w-[56px] h-[56px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center mb-[20px]">
                <value.icon size={24} color="#c9a96e" strokeWidth={1.5} />
              </div>
              <h3 className="text-[1.1rem] font-[600] text-[#0f2044] m-[0_0_10px_0] font-['DM_Sans',_sans-serif]">
                {value.title}
              </h3>
              <p className="text-[0.9rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.5]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default AboutValues;
