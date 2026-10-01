import React from 'react';
import { Home, CheckCircle2, Sofa, Compass } from 'lucide-react';
import type { Property } from '@/features/properties/types/property.types';

interface PropertyOverviewProps {
  property: Property;
}

const PropertyOverview: React.FC<PropertyOverviewProps> = ({ property }) => {
  return (
    <div className="flex flex-col gap-[40px]">
      {/* Overview and Key Details */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[24px] lg:gap-[40px]">
        <div>
          <h2 className="font-serif text-[2rem] text-[#08233F] m-[0_0_20px_0]">
            Property Overview
          </h2>
          <p className="text-[1.05rem] text-[#65758B] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            {property.name} is a premium residential development in {property.city}, 
            offering a perfect blend of modern architecture, luxurious living and excellent connectivity. 
            Designed for families who value comfort, convenience and style, this property features 
            spacious interiors, high-quality finishes and world-class amenities.
          </p>
        </div>

        <div className="bg-[#FAF8F4] rounded-[16px] p-[20px] md:p-[32px] border-[1px] border-solid border-[#E8E2D8]">
          <h3 className="font-serif text-[1.4rem] text-[#08233F] m-[0_0_24px_0]">
            Key Details
          </h3>
          
          <div className="flex flex-col gap-[16px]">
            {[
              { label: 'Bedrooms', value: property.beds ? property.beds.toString() : '—' },
              { label: 'Bathrooms', value: property.baths ? property.baths.toString() : '—' },
              { label: 'Built-up Area', value: property.area },
              { label: 'Car Parking', value: '2 Covered' },
              { label: 'Property Age', value: '2 Years' },
              { label: 'Total Floors', value: '15' },
              { label: 'Floor', value: '8th of 15' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_20px_1.5fr] text-[0.95rem] font-['DM_Sans',_sans-serif]">
                <span className="text-[#65758B]">{item.label}</span>
                <span className="text-[#65758B] text-center">:</span>
                <span className="text-[#08233F] font-[600]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[24px] bg-[white] border-[1px] border-solid border-[#E8E2D8] rounded-[16px] p-[20px] md:p-[32px]">
        {[
          { icon: Home, label: 'Property Type', value: property.type },
          { icon: CheckCircle2, label: 'Status', value: 'Ready to Move' },
          { icon: Sofa, label: 'Furnishing', value: 'Semi-Furnished' },
          { icon: Compass, label: 'Facing', value: 'East' },
        ].map((info, index) => (
          <div key={index} className="flex items-center gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-[50%] bg-[rgba(201,_138,_50,_0.1)] flex items-center justify-center [flex-shrink:0]">
              <info.icon size={22} color="#C98A32" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[0.85rem] text-[#65758B] mb-[4px] font-['DM_Sans',_sans-serif]">{info.label}</div>
              <div className="text-[1rem] font-[600] text-[#08233F] font-['DM_Sans',_sans-serif]">{info.value}</div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default PropertyOverview;
