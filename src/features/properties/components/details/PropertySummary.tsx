import React from 'react';
import { MapPin, BedDouble, Bath, Square, Crown } from 'lucide-react';
import type { Property } from '@/features/properties/types/property.types';

interface PropertySummaryProps {
  property: Property;
  onScheduleVisit: () => void;
  onGetInfo: () => void;
}

const PropertySummary: React.FC<PropertySummaryProps> = ({ property, onScheduleVisit, onGetInfo }) => {

  return (
    <div className="bg-[white] rounded-[16px] p-[24px] md:p-[32px] border-[1px] border-solid border-[#E8E2D8] shadow-[0_4px_20px_rgba(11,_42,_74,_0.04)] static lg:sticky lg:top-[100px]">
      <div className="flex justify-between items-start">
        <h1 className="font-serif text-[2.4rem] text-[#08233F] m-[0_0_12px_0] flex-[1] [line-height:1.1]">
          {property.name}
        </h1>
      </div>
      
      <div className="flex items-center gap-[6px] text-[#65758B] text-[1rem] mb-[24px] font-['DM_Sans',_sans-serif]">
        <MapPin size={18} color="#C98A32" />
        {property.location}, {property.city}
      </div>

      <div className="flex gap-[16px] mb-[24px] [align-items:baseline]">
        <div className="text-[2rem] text-[#C98A32] font-[700] font-['DM_Sans',_sans-serif]">
          {property.price}
        </div>
        <div className="bg-[#f3f4f6] text-[#17324F] p-[4px_12px] rounded-[16px] text-[0.85rem] font-[600] font-['DM_Sans',_sans-serif]">
          {property.status}
        </div>
      </div>

      <hr className="border-[0] m-[0_0_24px_0] border-t-[1px] border-solid border-t-[#E8E2D8]" />

      <div className="property-features-row flex justify-between mb-[32px] gap-[16px] [flex-wrap:wrap]">
        <div className="flex items-center gap-[8px] text-[#17324F] font-[500] font-['DM_Sans',_sans-serif]">
          <BedDouble size={20} color="#C98A32" strokeWidth={1.5} />
          {property.beds ? `${property.beds} Beds` : '—'}
        </div>
        <div className="flex items-center gap-[8px] text-[#17324F] font-[500] font-['DM_Sans',_sans-serif]">
          <Bath size={20} color="#C98A32" strokeWidth={1.5} />
          {property.baths ? `${property.baths} Baths` : '—'}
        </div>
        <div className="flex items-center gap-[8px] text-[#17324F] font-[500] font-['DM_Sans',_sans-serif]">
          <Square size={20} color="#C98A32" strokeWidth={1.5} />
          {property.area}
        </div>
      </div>

      <div className="bg-[#FAF8F4] rounded-[12px] p-[20px] mb-[32px] border-[1px] border-solid border-[rgba(201,138,50,0.15)]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <Crown size={20} color="#C98A32" />
          <h3 className="m-[0] text-[#08233F] text-[1.05rem] font-[700] font-['DM_Sans',_sans-serif]">
            {property.type}
          </h3>
        </div>
        <p className="m-[0] text-[#65758B] text-[0.9rem] font-['DM_Sans',_sans-serif] [line-height:1.5]">
          Modern living with world-class amenities in a prime location.
        </p>
      </div>

      <div className="flex flex-col gap-[16px]">
        <button className="btn-schedule" onClick={onScheduleVisit}>
          Schedule a Visit &rarr;
        </button>
        <button className="btn-info" onClick={onGetInfo}>
          Get More Information
        </button>
      </div>

      
    </div>
  );
};

export default PropertySummary;
