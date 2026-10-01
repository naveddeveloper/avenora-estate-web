import React from 'react';
import { Check, ArrowRight, MapPin, Plus, Minus } from 'lucide-react';
import type { Property } from '@/features/properties/types/property.types';

interface FloorPlanAndLocationProps {
  property: Property;
}

const FloorPlanAndLocation: React.FC<FloorPlanAndLocationProps> = ({ property }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] mt-[64px]">
      {/* Floor Plan */}
      <div>
        <h2 className="font-serif text-[2rem] text-[#08233F] m-[0_0_32px_0]">
          Floor Plan
        </h2>
        
        <div className="bg-[#FAF8F4] rounded-[16px] p-[20px] md:p-[32px] flex flex-col md:flex-row gap-[20px] md:gap-[32px] border-[1px] border-solid border-[#E8E2D8] items-center">
          
          <div className="flex-[1] bg-[white] rounded-[12px] p-[16px] flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            {/* SVG Floor plan illustration */}
            <div className="w-[100%] bg-[#f3f4f6] rounded-[8px] flex items-center justify-center overflow-hidden [aspect-ratio:4/3]">
              <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outline */}
                <rect x="10" y="10" width="380" height="280" rx="4" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc" />
                
                {/* Living Room */}
                <rect x="20" y="20" width="160" height="180" stroke="#94a3b8" strokeWidth="1" fill="#f1f5f9" />
                <text x="100" y="115" fill="#64748b" fontSize="16" textAnchor="middle" fontFamily="sans-serif">Living & Dining</text>
                
                {/* Kitchen */}
                <rect x="200" y="20" width="180" height="80" stroke="#94a3b8" strokeWidth="1" fill="#f1f5f9" />
                <text x="290" y="65" fill="#64748b" fontSize="16" textAnchor="middle" fontFamily="sans-serif">Kitchen</text>

                {/* Bedroom 1 */}
                <rect x="200" y="120" width="110" height="160" stroke="#94a3b8" strokeWidth="1" fill="#f1f5f9" />
                <text x="255" y="205" fill="#64748b" fontSize="16" textAnchor="middle" fontFamily="sans-serif">Master Bed</text>

                {/* Bedroom 2 */}
                <rect x="20" y="215" width="160" height="65" stroke="#94a3b8" strokeWidth="1" fill="#f1f5f9" />
                <text x="100" y="255" fill="#64748b" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Bed 2</text>

                {/* Bathrooms */}
                <rect x="325" y="120" width="55" height="75" stroke="#94a3b8" strokeWidth="1" fill="#e2e8f0" />
                <text x="352" y="162" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Bath</text>

                <rect x="325" y="205" width="55" height="75" stroke="#94a3b8" strokeWidth="1" fill="#e2e8f0" />
                <text x="352" y="247" fill="#64748b" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Bath</text>
                
                {/* Doors (arcs) */}
                <path d="M 180 160 Q 190 150 200 150" stroke="#94a3b8" strokeWidth="1" fill="none" />
                <path d="M 180 60 Q 190 50 200 50" stroke="#94a3b8" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          <div className="flex-[1]">
            <h3 className="text-[1.2rem] font-[700] text-[#08233F] m-[0_0_4px_0] font-['DM_Sans',_sans-serif]">{property.beds ? `${property.beds} BHK` : 'Property'} - Type A</h3>
            <p className="text-[0.95rem] text-[#65758B] m-[0_0_24px_0] font-['DM_Sans',_sans-serif]">{property.area}</p>

            <ul className="p-[0] m-[0_0_24px_0] flex flex-col gap-[12px] [list-style:none]">
              {[
                'Spacious living and dining area',
                `${property.beds || 3} bedrooms with attached bathrooms`,
                'Modern kitchen with utility space',
                'Large balcony with city view'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-[12px]">
                  <Check size={18} color="#C98A32" className="mt-[2px] [flex-shrink:0]" />
                  <span className="text-[0.9rem] text-[#17324F] font-['DM_Sans',_sans-serif]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
            onMouseOver={(e) => { e.currentTarget.style.background = '#FAF8F4'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'white'; }} className="bg-[white] border-[1px] border-solid border-[#C98A32] text-[#C98A32] p-[12px_24px] rounded-[30px] text-[0.9rem] font-[600] flex items-center gap-[8px] cursor-pointer transition-[all_0.2s_ease] font-['DM_Sans',_sans-serif]">
              View Full Floor Plan <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <h2 className="font-serif text-[2rem] text-[#08233F] m-[0_0_32px_0]">
          Location
        </h2>
        
        <div className="relative rounded-[16px] overflow-hidden border-[1px] border-solid border-[#E8E2D8] h-[100%] min-h-[320px] bg-[#e5e7eb] [background-image:radial-gradient(#d1d5db_1px,_transparent_1px)] [background-size:20px_20px]">
          {/* Mock Map UI */}
          <div className="absolute top-[0] left-[0] w-[100%] h-[100%] flex items-center justify-center">
            {/* Mock Property Marker */}
            <div className="relative">
              <div className="absolute left-[50%] top-[-30px] bg-[white] p-[8px_16px] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center whitespace-nowrap [transform:translateX(-50%)]">
                <span className="text-[0.85rem] font-[700] text-[#08233F] font-['DM_Sans',_sans-serif]">{property.name}</span>
                <span className="text-[0.75rem] text-[#65758B] font-['DM_Sans',_sans-serif]">{property.location}, {property.city}</span>
                <div className="absolute bottom-[-6px] w-[12px] h-[12px] bg-[white] [transform:rotate(45deg)]"/>
              </div>
              <MapPin size={32} color="#dc2626" fill="white" />
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute right-[16px] bottom-[16px] flex flex-col gap-[4px] bg-[white] rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden">
            <button className="border-none bg-[white] p-[8px] cursor-pointer border-b-[1px] border-solid border-b-[#E8E2D8]">
              <Plus size={18} color="#17324F" />
            </button>
            <button className="border-none bg-[white] p-[8px] cursor-pointer">
              <Minus size={18} color="#17324F" />
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FloorPlanAndLocation;
