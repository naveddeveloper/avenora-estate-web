import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/features/properties/types/property.types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <article
      aria-label={`Category: ${category.title}`} className="category-card bg-[#fff] rounded-[14px] border-[1px] border-solid border-[rgba(201,169,110,0.15)] overflow-hidden shadow-[0_4px_20px_rgba(15,32,68,0.06)] cursor-pointer flex flex-col min-w-[200px]"
    >
      {/* Image */}
      <div className="overflow-hidden h-[180px]">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy" className="cat-img w-[100%] h-[100%] object-cover block"
        />
      </div>
      {/* Content */}
      <div className="p-[16px_18px] flex items-center justify-between gap-[8px]">
        <div>
          <h3 className="text-[0.95rem] font-[600] text-[#0f2044] m-[0_0_3px] font-['DM_Sans',_sans-serif]"
          >
            {category.title}
          </h3>
          <p className="text-[0.75rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif]"
          >
            {category.subtitle}
          </p>
        </div>
        <button
          aria-label={`Browse ${category.title}`} className="arrow-btn [flex-shrink:0]"
        >
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
};

export default CategoryCard;
