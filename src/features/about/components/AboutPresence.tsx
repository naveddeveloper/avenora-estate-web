import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutPresenceProps {
}

const cities = [
  { name: 'Bangalore', image: '/images/property_sunrise.jpg' },
  { name: 'Mumbai', image: '/images/category_apartment.jpg' },
  { name: 'Pune', image: '/images/property_maplewood.jpg' },
  { name: 'Delhi', image: '/images/hero_villa.jpg' },
];

const AboutPresence: React.FC<AboutPresenceProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f6f4f0] p-[100px_24px] flex justify-center">
      <div className="about-presence-container max-w-[1200px] w-[100%] flex flex-col gap-[60px]">
        
        <div className="presence-header flex justify-between items-end gap-[30px] [flex-wrap:wrap]">
          <div className="max-w-[600px]">
            <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
              OUR PRESENCE
            </span>
            <h2 className="font-serif text-[3.2rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
              Across Major Cities<br />in India & Beyond
            </h2>
            <p className="text-[1.05rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.7]">
              From metropolitan hubs to emerging destinations, we help you explore exceptional properties in the most sought-after locations.
            </p>
          </div>

          <button
          onClick={() => navigate('/properties')}
          onMouseEnter={(e) => e.currentTarget.style.background = '#b8985d'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#c9a96e'} className="bg-[#c9a96e] text-[#fff] border-none p-[14px_28px] rounded-[50px] text-[1rem] font-[500] cursor-pointer items-center gap-[8px] transition-[background_0.2s_ease] font-['DM_Sans',_sans-serif] [display:inline-flex]"
          >
            Explore Properties <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {cities.map((city) => (
            <div key={city.name}
            onClick={() => navigate('/properties')} className="city-card relative rounded-[16px] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(15,_32,_68,_0.06)] [aspect-ratio:3/4]"
            >
              <img 
                src={city.image} 
                alt={`${city.name} real estate`} className="city-img w-[100%] h-[100%] object-cover block transition-[transform_0.5s_ease]"
              />
              <div className="absolute bottom-[0] left-[0] right-[0] h-[60%] bg-[linear-gradient(to_top,_rgba(11,31,58,0.9)_0%,_rgba(11,31,58,0)_100%)] flex items-end p-[24px]">
                <h3 className="text-[1.4rem] font-[600] text-[#fff] m-[0] font-['DM_Sans',_sans-serif]">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default AboutPresence;
