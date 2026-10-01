import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChevronRight, Heart, Share2 } from 'lucide-react';
import type { Property } from '@/features/properties/types/property.types';
import { useFavorites } from '@/features/favorites/context/FavoritesContext';

interface BreadcrumbsProps {
  property: Property;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ property }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isSaved = isFavorite(property.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.name,
          text: `Check out ${property.name} on Avenora Estates`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-[1400px] m-[0_auto] p-[16px] md:p-[24px] flex justify-between items-center gap-[16px] [flex-wrap:wrap]">
      <div className="flex items-center gap-[8px] text-[0.9rem] text-[#65758B] font-['DM_Sans',_sans-serif]">
        <button 
          onClick={() => navigate('/')} className="bg-transparent border-none text-[inherit] cursor-pointer p-[0]"
        >
          Home
        </button>
        <ChevronRight size={14} />
        <button 
          onClick={() => navigate('/properties')} className="bg-transparent border-none text-[inherit] cursor-pointer p-[0]"
        >
          Properties
        </button>
        <ChevronRight size={14} />
        <span className="text-[#17324F] font-[500]">{property.name}</span>
      </div>

      <div className="flex items-center gap-[12px]">
        <button 
          onClick={() => toggleFavorite(property.id)}
          className={`flex items-center gap-[6px] bg-white border border-[#E8E2D8] p-[8px_16px] rounded-[20px] font-['DM_Sans',_sans-serif] text-[0.9rem] font-medium cursor-pointer transition-all duration-200 ease-in hover:border-[#C98A32] hover:text-[#C98A32] ${isSaved ? 'text-[#C98A32] border-[#C98A32]' : 'text-[#17324F]'}`}
        >
          <Heart size={16} fill={isSaved ? '#C98A32' : 'none'} color={isSaved ? '#C98A32' : 'currentColor'} /> 
          {isSaved ? 'Saved ✓' : 'Save'}
        </button>
        <button 
          onClick={handleShare}
          className="flex items-center gap-[6px] bg-white border border-[#E8E2D8] p-[8px_16px] rounded-[20px] font-['DM_Sans',_sans-serif] text-[0.9rem] font-medium text-[#17324F] cursor-pointer transition-all duration-200 ease-in hover:border-[#C98A32] hover:text-[#C98A32]"
        >
          <Share2 size={16} /> Share
        </button>
      </div>


    </div>
  );
};

export default Breadcrumbs;
