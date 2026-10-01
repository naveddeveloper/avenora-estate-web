import React from 'react';
import { Home, Shield, Headphones, Heart } from 'lucide-react';

const features = [
  {
    icon: <Home size={28} strokeWidth={1.4} />,
    title: 'Verified Listings',
    desc: '100% genuine listings with verified owners.',
  },
  {
    icon: <Shield size={28} strokeWidth={1.4} />,
    title: 'Trusted & Secure',
    desc: 'Safe transactions with complete transparency.',
  },
  {
    icon: <Headphones size={28} strokeWidth={1.4} />,
    title: 'Expert Support',
    desc: 'Guidance at every step of your journey.',
  },
  {
    icon: <Heart size={28} strokeWidth={1.4} />,
    title: 'Better Living',
    desc: 'Find a home that fits your lifestyle.',
  },
];

const FeatureHighlights: React.FC = () => {
  return (
    <section
      aria-label="Our key features" className="bg-[#faf8f5] p-[60px_24px_56px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1280px] m-[0_auto]">
        {features.map((f, idx) => (
          <div key={f.title} className="flex flex-col items-center text-center p-[24px_28px] border-b sm:border-b-0 border-r-0 sm:border-r border-[rgba(201,169,110,0.15)] last:border-r-0 last:border-b-0" data-last={idx === features.length - 1}>
            {/* Icon container */}
            <div
              aria-hidden="true" className="w-[64px] h-[64px] rounded-[50%] bg-[rgba(201,169,110,0.08)] border-[1px] border-solid border-[rgba(201,169,110,0.2)] flex items-center justify-center text-[#c9a96e] mb-[12px]"
            >
              {f.icon}
            </div>
            <h3 className="text-[0.95rem] font-[600] text-[#0f2044] m-[0_0_6px] font-['DM_Sans',_sans-serif]"
            >
              {f.title}
            </h3>
            <p className="text-[0.82rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.6]"
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default FeatureHighlights;
