import React from 'react';
import { 
  Droplets, 
  Dumbbell, 
  Warehouse, // using Warehouse as Club House approximation
  Gamepad2, // using Gamepad2 as Play Area approximation
  Trees, 
  ShieldCheck 
} from 'lucide-react';

const amenitiesList = [
  { icon: Droplets, label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Gym & Fitness' },
  { icon: Warehouse, label: 'Club House' },
  { icon: Gamepad2, label: "Children's Play Area" },
  { icon: Trees, label: 'Landscaped Garden' },
  { icon: ShieldCheck, label: '24/7 Security' },
];

const Amenities: React.FC = () => {
  return (
    <div className="mt-[64px]">
      <h2 className="font-serif text-[2rem] text-[#08233F] m-[0_0_32px_0]">
        Amenities
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px]">
        {amenitiesList.map((item, index) => (
          <div key={index} className="bg-[white] border-[1px] border-solid border-[#E8E2D8] rounded-[12px] p-[24px_16px] flex flex-col items-center text-center gap-[16px] shadow-[0_2px_10px_rgba(11,_42,_74,_0.02)]">
            <item.icon size={28} color="#C98A32" strokeWidth={1.5} />
            <span className="text-[0.9rem] font-[500] text-[#17324F] font-['DM_Sans',_sans-serif]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Amenities;
