import React from 'react';
import { ArrowRight } from 'lucide-react';
import CategoryCard from '@/features/properties/components/CategoryCard';
import { categories } from '@/features/properties/data/properties.data';

const PropertyCategories: React.FC = () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading" className="p-[80px_24px] bg-[#faf8f5]"
    >
      <div className="max-w-[1280px] m-[0_auto]">
        {/* Header */}
        <div className="flex items-end justify-between mb-[40px] flex-wrap gap-[16px]">
          <div>
            <p className="text-[0.68rem] font-[600] text-[#c9a96e] m-[0_0_8px] font-['DM_Sans',_sans-serif] [letter-spacing:0.2em] [text-transform:uppercase]"
            >
              Explore by Category
            </p>
            <h2
              id="categories-heading" className="text-[clamp(2rem,_4vw,_3rem)] font-[600] text-[#0f2044] m-[0] [font-family:Cormorant_Garamond,_Georgia,_serif] [line-height:1.1]"
            >
              Find Properties by Category
            </h2>
          </div>

          <button
            aria-label="View all property categories" className="btn-navy p-[12px_22px] text-[0.85rem] rounded-[50px] whitespace-nowrap"
          >
            View All Categories
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default PropertyCategories;
