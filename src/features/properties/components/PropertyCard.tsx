import { useNavigate } from 'react-router-dom';
import React from 'react';
import { MapPin, BedDouble, Bath, Ruler, Heart, ArrowRight } from 'lucide-react';
import type {Property } from '@/features/properties/types/property.types';
import { useFavorites } from '@/features/favorites/context/FavoritesContext';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property}) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const liked = isFavorite(property.id);

  const badgeColor = property.status === 'For Sale' ? '#0f2044' : '#2d7a4f';

  return (
    <article
      aria-label={`${property.name}, ${property.location}`}
      onClick={(e) => {
        // Prevent navigating when clicking heart
        if (!(e.target as HTMLElement).closest('.heart-btn')) {
          navigate(`/property/${property.id}`);
          window.scrollTo(0, 0);
        }
      }} className="property-card bg-[#fff] rounded-[16px] border-[1px] border-solid border-[rgba(201,169,110,0.15)] overflow-hidden shadow-[0_4px_24px_rgba(15,32,68,0.07)] flex flex-col"
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy" className="card-img w-[100%] h-[100%] object-cover block"
        />
        {/* Status badge */}
        <span
          aria-label={`Status: ${property.status}`} className="absolute top-[14px] left-[14px] text-[#fff] text-[0.7rem] font-[600] p-[5px_12px] rounded-[50px] font-['DM_Sans',_sans-serif] [letter-spacing:0.05em]" style={{ background: badgeColor }}
        >
          {property.status}
        </span>
        {/* Heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(property.id);
          }}
          aria-label={liked ? `Remove ${property.name} from favorites` : `Save ${property.name} to favorites`}
          aria-pressed={liked} className={`heart-btn absolute top-[12px] right-[12px] w-[36px] h-[36px] rounded-[50%] bg-[rgba(255,255,255,0.9)] border-none cursor-pointer flex items-center justify-center ${liked ? 'active text-[#e84040]' : 'text-[#9ca3af]'}`}
        >
          <Heart
            size={16}
            strokeWidth={1.8}
            fill={liked ? '#e84040' : 'none'}
          />
        </button>
      </div>

      {/* Card body */}
      <div className="p-[18px_20px_20px] flex-[1] flex flex-col gap-[10px]">
        {/* Name */}
        <h3 className="font-serif text-[1.25rem] font-[600] text-[#0f2044] m-[0] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.2]"
        >
          {property.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-[5px] text-[#6b7280]">
          <MapPin size={13} strokeWidth={1.8} color="#c9a96e" />
          <span className="text-[0.8rem] font-['DM_Sans',_sans-serif]">
            {property.location}
          </span>
        </div>

        {/* Details row */}
        <div className="flex flex-wrap items-center gap-[8px] sm:gap-[16px] p-[8px_0] border-t-[1px] border-solid border-t-[rgba(201,169,110,0.12)] border-b-[1px] border-solid border-b-[rgba(201,169,110,0.12)]"
        >
          <span className="flex items-center gap-[4px] text-[0.78rem] text-[#4b5563] font-['DM_Sans',_sans-serif]">
            <BedDouble size={13} strokeWidth={1.8} color="#c9a96e" />
            {property.beds ? `${property.beds} Beds` : '—'}
          </span>
          <span className="flex items-center gap-[4px] text-[0.78rem] text-[#4b5563] font-['DM_Sans',_sans-serif]">
            <Bath size={13} strokeWidth={1.8} color="#c9a96e" />
            {property.baths ? `${property.baths} Baths` : '—'}
          </span>
          <span className="flex items-center gap-[4px] text-[0.78rem] text-[#4b5563] font-['DM_Sans',_sans-serif]">
            <Ruler size={13} strokeWidth={1.8} color="#c9a96e" />
            {property.area}
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between mt-[auto]">
          <div>
            <span className="font-serif text-[1.35rem] font-[600] text-[#0f2044] [font-family:Cormorant_Garamond,_Georgia,_serif]"
            >
              {property.price}
            </span>
            {property.priceNote && (
              <span className="text-[0.78rem] text-[#6b7280] ml-[2px] font-['DM_Sans',_sans-serif]">
                {property.priceNote}
              </span>
            )}
          </div>
          <button
            className="arrow-btn"
            aria-label={`View details for ${property.name}`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
