import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import type { Property } from '@/features/properties/types/property.types';

const defaultImages = [
  '/images/interior_living.jpg',
  '/images/category_house.jpg',
  '/images/hero_villa.jpg',
  '/images/cta_bg.jpg',
  '/images/category_apartment.jpg',
];

interface PropertyGalleryProps {
  property: Property;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ property }) => {
  const images = [property.image, ...defaultImages.filter(img => img !== property.image)];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[100%] flex flex-col gap-[16px]">
      {/* Main Image */}
      <div className="relative w-[100%] pb-[60%] rounded-[16px] overflow-hidden bg-[#e5e7eb]">
        <img 
          src={images[activeIndex]} 
          alt="Property" className="absolute top-[0] left-[0] w-[100%] h-[100%] object-cover"
        />

        {/* Badges */}
        <div className="absolute top-[16px] left-[16px] bg-[#08233F] text-[white] p-[6px_16px] rounded-[20px] text-[0.85rem] font-[600] font-['DM_Sans',_sans-serif]">
          {property.status}
        </div>

        {/* Navigation Arrows */}
        <button className="gallery-arrow left" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </button>
        <button className="gallery-arrow right" onClick={handleNext}>
          <ChevronRight size={24} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-[16px] left-[16px] bg-[rgba(8,_35,_63,_0.7)] text-[white] p-[6px_12px] rounded-[20px] text-[0.85rem] font-[500] flex items-center gap-[6px] [backdrop-filter:blur(4px)] font-['DM_Sans',_sans-serif]">
          <Camera size={14} /> {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hide-scrollbar flex gap-[12px] [overflow-x:auto] [scrollbar-width:none] [ms-overflow-style:none]">
        {images.slice(0, 5).map((img, index) => {
          const isLast = index === 4 && images.length > 5;
          return (
            <div 
              key={index}
              onClick={() => {
                if (!isLast) setActiveIndex(index);
                // If it's last, maybe open a modal in a real app
              }} className={`flex-[0_0_calc(20%_-_9.6px)] rounded-[8px] overflow-hidden relative cursor-pointer [aspect-ratio:16/10] border-[2px] border-solid ${activeIndex === index && !isLast ? 'border-[#C98A32]' : 'border-transparent'}`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`} className="w-[100%] h-[100%] object-cover block"
              />
              {isLast && (
                <div className="absolute bg-[rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-[white] [inset:0] font-['DM_Sans',_sans-serif] p-[4px]">
                  <span className="text-[1.1rem] md:text-[1.2rem] font-[600] leading-none">+{images.length - 5}</span>
                  <span className="text-[0.65rem] font-[500] mt-[4px] hidden sm:block uppercase [letter-spacing:0.05em]">Photos</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default PropertyGallery;
