import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Heart, ChevronRight, X } from 'lucide-react';
import { useFavorites } from '@/features/favorites/context/FavoritesContext';
import { properties } from '@/features/properties/data/properties.data';
import PropertyCard from '@/features/properties/components/PropertyCard';

interface FavoritesPageProps {
}

const FavoritesPage: React.FC<FavoritesPageProps> = () => {
  const navigate = useNavigate();
  const { favorites, clearFavorites } = useFavorites();
  const [showClearModal, setShowClearModal] = useState(false);

  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <div className="bg-[#faf8f5] min-h-[100vh] pb-[80px] pt-[72px]">
      {/* Header / Breadcrumb */}
      <div className="bg-[white] p-[24px_0] border-b-[1px] border-solid border-b-[rgba(201,169,110,0.15)]">
        <div className="max-w-[1280px] m-[0_auto] p-[0_24px]">
          <nav aria-label="Breadcrumb" className="mb-[16px]">
            <ol className="p-[0] m-[0] flex items-center gap-[8px] [list-style:none]">
              <li>
                <button
                  onClick={() => navigate('/')}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#65758B')} className="bg-transparent border-none p-[0] cursor-pointer text-[0.85rem] text-[#65758B] transition-[color_0.2s] font-['DM_Sans',_sans-serif]"
                >
                  Home
                </button>
              </li>
              <li className="flex items-center text-[#65758B]">
                <ChevronRight size={14} />
              </li>
              <li className="text-[0.85rem] text-[#0f2044] font-[500] font-['DM_Sans',_sans-serif]">
                Favorites
              </li>
            </ol>
          </nav>
          
          <div className="flex justify-between items-end gap-[16px] [flex-wrap:wrap]">
            <div>
              <h1 className="font-serif text-[2.5rem] text-[#0f2044] m-[0_0_8px_0] [line-height:1.2]">
                Saved Properties
              </h1>
              <p className="text-[#65758B] m-[0] text-[1rem] font-['DM_Sans',_sans-serif]">
                {favoriteProperties.length === 0 
                  ? "Keep track of properties you're interested in."
                  : `${favoriteProperties.length} ${favoriteProperties.length === 1 ? 'property' : 'properties'} saved`}
              </p>
            </div>
            
            {favoriteProperties.length > 0 && (
              <button
                onClick={() => setShowClearModal(true)} className="bg-transparent border-none text-[#65758B] text-[0.9rem] cursor-pointer p-[8px_0] font-['DM_Sans',_sans-serif] [text-decoration:underline]"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1280px] m-[0_auto] p-[40px_24px]">
        {favoriteProperties.length === 0 ? (
          /* Empty State */
          <div className="bg-[white] rounded-[16px] p-[80px_24px] text-center border-[1px] border-solid border-[rgba(201,169,110,0.15)] shadow-[0_4px_24px_rgba(15,32,68,0.04)] max-w-[600px] m-[40px_auto]">
            <div className="w-[64px] h-[64px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center m-[0_auto_24px] text-[#c9a96e]">
              <Heart size={32} />
            </div>
            <h2 className="font-serif text-[1.75rem] text-[#0f2044] m-[0_0_12px_0]">
              No Saved Properties Yet
            </h2>
            <p className="text-[#65758B] m-[0_0_32px_0] text-[1rem] font-['DM_Sans',_sans-serif] [line-height:1.6]">
              You haven't saved any properties yet. Browse our collection and save properties you love to find them here later.
            </p>
            <button
              onClick={() => navigate('/properties')}
              onMouseEnter={e => (e.currentTarget.style.background = '#152955')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0f2044')} className="btn-navy bg-[#0f2044] text-[white] border-none p-[14px_28px] rounded-[8px] text-[0.95rem] font-[600] cursor-pointer transition-[background_0.2s] font-['DM_Sans',_sans-serif]"
            >
              Explore Properties &rarr;
            </button>
          </div>
        ) : (
          /* Populated State */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {favoriteProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </main>

      {/* Clear Confirmation Modal */}
      {showClearModal && (
        <div className="fixed bg-[rgba(15,_32,_68,_0.4)] flex items-center justify-center z-[1000] p-[24px] [inset:0] [backdrop-filter:blur(4px)]">
          <div className="bg-[white] rounded-[16px] p-[32px] w-[100%] max-w-[400px] relative">
            <button 
              onClick={() => setShowClearModal(false)} className="absolute top-[16px] right-[16px] bg-transparent border-none cursor-pointer text-[#65758B]"
            >
              <X size={20} />
            </button>
            <h2 className="font-serif text-[1.5rem] text-[#0f2044] m-[0_0_12px_0]">Clear all saved properties?</h2>
            <p className="text-[#65758B] text-[0.95rem] m-[0_0_24px_0] font-['DM_Sans',_sans-serif] [line-height:1.5]">
              This will remove all properties from your favorites. This action cannot be undone.
            </p>
            <div className="flex gap-[12px]">
              <button
                onClick={() => setShowClearModal(false)} className="flex-[1] p-[12px] bg-[white] border-[1px] border-solid border-[#E8E2D8] rounded-[8px] font-[600] text-[#0f2044] cursor-pointer font-['DM_Sans',_sans-serif]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  clearFavorites();
                  setShowClearModal(false);
                }} className="flex-[1] p-[12px] bg-[#e84040] border-none rounded-[8px] font-[600] text-[white] cursor-pointer font-['DM_Sans',_sans-serif]"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default FavoritesPage;
