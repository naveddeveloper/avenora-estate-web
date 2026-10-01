import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/features/properties/components/PropertyCard';
import { properties } from '@/features/properties/data/properties.data';

interface FeaturedPropertiesProps {
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = () => {
  const navigate = useNavigate();
  return (
    <section
      id="featured-properties"
      aria-labelledby="featured-heading" className="p-[80px_24px_80px]"
    >
      <div className="max-w-[1280px] m-[0_auto]">
        {/* Section header */}
        <div className="section-header">
          <div>
            <p className="text-[0.68rem] font-[600] text-[#c9a96e] m-[0_0_8px] font-['DM_Sans',_sans-serif] [letter-spacing:0.2em] [text-transform:uppercase]"
            >
              Featured Properties
            </p>
            <h2
              id="featured-heading" className="text-[clamp(2rem,_4vw,_3rem)] font-[600] text-[#0f2044] m-[0] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.1]"
            >
              Exclusive Properties for You
            </h2>
          </div>

          <button
            aria-label="View all available properties"
            onClick={() => navigate('/properties')} className="btn-navy p-[12px_22px] text-[0.85rem] rounded-[50px] whitespace-nowrap"
          >
            View All Properties
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Property cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default FeaturedProperties;
