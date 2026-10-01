import React from 'react';
import { Users, Home, MapPin, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '12K+', label: 'Happy Clients' },
  { icon: Home, value: '500+', label: 'Properties Listed' },
  { icon: MapPin, value: '25+', label: 'Cities' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
];

const AboutStats: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[100px_24px_60px] flex justify-center">
      <div className="max-w-[1200px] w-[100%] bg-[#fff] rounded-[24px] p-[40px_20px] md:p-[40px_0] shadow-[0_12px_40px_rgba(15,_32,_68,_0.04)] border-[1px] border-solid border-[rgba(201,169,110,0.15)] grid grid-cols-2 md:flex items-center justify-between md:justify-evenly gap-[40px] md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col items-center gap-[12px] p-[0_20px] flex-[1]">
              <stat.icon size={28} color="#c9a96e" strokeWidth={1.5} />
              <h3 className="font-serif text-[2.5rem] text-[#0f2044] m-[0] [line-height:1]">
                {stat.value}
              </h3>
              <p className="text-[0.95rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif]">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-[60px] bg-[rgba(201,169,110,0.2)]" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      
    </section>
  );
};

export default AboutStats;
