import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { properties } from '@/features/properties/data/properties.data';
import PropertyCard from '@/features/properties/components/PropertyCard';

interface SimilarPropertiesProps {
  currentPropertyId: number;
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ currentPropertyId }) => {
  const similarPropertiesData = properties.filter(p => p.id !== currentPropertyId).slice(0, 4);
  const navigate = useNavigate();
  return (
    <div className="mt-[80px] mb-[80px]">
      <div className="flex justify-between items-center mb-[32px]">
        <h2 className="font-serif text-[2rem] text-[#08233F] m-[0]">
          Similar Properties
        </h2>
        
        <button 
          onClick={() => navigate('/properties')} className="bg-transparent border-none text-[#C98A32] text-[0.95rem] font-[600] flex items-center gap-[8px] cursor-pointer font-['DM_Sans',_sans-serif]"
        >
          View All Properties <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {similarPropertiesData.map((prop) => (
          <div key={prop.id} className="similar-card">
            <PropertyCard property={prop} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SimilarProperties;
