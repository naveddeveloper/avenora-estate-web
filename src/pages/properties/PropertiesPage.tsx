import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import PropertiesHero from '@/features/properties/components/PropertiesHero';
import PropertyCard from '@/features/properties/components/PropertyCard';
import FinalCTA from '@/components/shared/FinalCTA';
import { properties } from '@/features/properties/data/properties.data';

const propertyTypes = ['All', 'Villas', 'Apartments', 'Independent Houses', 'Commercial', 'Plots & Land'];
const propertyStatus = ['All', 'For Sale', 'For Rent'];
interface PropertiesPageProps {
}

const PropertiesPage: React.FC<PropertiesPageProps> = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Initialize from navigation state if available
  useEffect(() => {
    if (location.state) {
      if (location.state.searchQuery) setSearchQuery(location.state.searchQuery);
      if (location.state.propertyType && location.state.propertyType !== 'Any') setSelectedType(location.state.propertyType);
    }
  }, [location.state]);

  // Filter properties
  const filteredProperties = properties.filter((prop) => {
    const matchesSearch = prop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesType = selectedType === 'All' || 
                       (selectedType === 'Villas' && prop.type === 'Villa') ||
                       (selectedType === 'Apartments' && prop.type === 'Apartment') ||
                       (selectedType === 'Independent Houses' && prop.type === 'Independent House') ||
                       (selectedType === 'Commercial' && prop.type === 'Commercial') ||
                       (selectedType === 'Plots & Land' && prop.type === 'Plot & Land');
                       
    const matchesStatus = selectedStatus === 'All' || prop.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="bg-[#faf8f5] min-h-[100vh]">
      <PropertiesHero />
      
      {/* Search Bar Section */}
      <div className="max-w-[1280px] m-[-30px_auto_40px] p-[0_24px] relative z-[10]">
        <div className="properties-search-bar bg-[#fff] p-[20px] rounded-[16px] shadow-[0_10px_40px_rgba(15,32,68,0.08)] flex flex-wrap md:flex-nowrap gap-[16px] items-center border-[1px] border-solid border-[rgba(201,169,110,0.2)] w-[100%]">
          <div className="flex-[1] relative min-w-[0] w-[calc(100%-80px)] md:w-auto order-1">
            <Search size={20} color="#9ca3af" className="absolute left-[16px] top-[50%] [transform:translateY(-50%)]" />
            <input 
              type="text" 
              placeholder="Search by location, property type, or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = '#c9a96e'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'} className="w-[100%] p-[16px_16px_16px_48px] rounded-[12px] border-[1px] border-solid border-[#e5e7eb] text-[1rem] text-[#0f2044] outline-none transition-[border-color_0.2s] font-['DM_Sans',_sans-serif]"
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className="mobile-filter-toggle hidden p-[16px] rounded-[12px] border-[1px] border-solid border-[#c9a96e] bg-[#fefdfa] text-[#c9a96e] cursor-pointer items-center justify-center [flex-shrink:0] order-2 md:order-none"
          >
            <SlidersHorizontal size={20} />
          </button>

          <button className="btn-navy p-[16px_32px] text-[1rem] rounded-[12px] whitespace-nowrap w-[100%] md:w-auto order-3 md:order-none"
          >
            Search Properties
          </button>
        </div>
      </div>

      <div className="properties-layout max-w-[1280px] m-[0_auto] p-[0_24px_80px] flex gap-[40px]">
        
        {/* Sidebar Filters */}
        <aside className="[flex-shrink:0]"
        >
          <div className="bg-[#fff] rounded-[16px] p-[24px] border-[1px] border-solid border-[rgba(201,169,110,0.15)] sticky top-[100px]">
            <div className="flex items-center gap-[10px] mb-[24px]">
              <SlidersHorizontal size={20} color="#0f2044" />
              <h2 className="font-serif text-[1.5rem] text-[#0f2044] m-[0]">Filters</h2>
            </div>

            {/* Property Type */}
            <div className="mb-[32px]">
              <h3 className="text-[1.05rem] font-[600] text-[#0f2044] mb-[16px] font-['DM_Sans',_sans-serif]">
                Property Type
              </h3>
              <div className="flex flex-col gap-[12px]">
                {propertyTypes.map(type => (
                  <label key={type} className="flex items-center gap-[10px] cursor-pointer">
                    <input 
                      type="radio" 
                      name="property-type" 
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)} className="w-[18px] h-[18px] [accent-color:#0f2044]"
                    />
                    <span className="text-[0.95rem] text-[#4b5563] font-['DM_Sans',_sans-serif]">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mb-[32px]">
              <h3 className="text-[1.05rem] font-[600] text-[#0f2044] mb-[16px] font-['DM_Sans',_sans-serif]">
                Property Status
              </h3>
              <div className="flex flex-col gap-[12px]">
                {propertyStatus.map(status => (
                  <label key={status} className="flex items-center gap-[10px] cursor-pointer">
                    <input 
                      type="radio" 
                      name="property-status" 
                      checked={selectedStatus === status}
                      onChange={() => setSelectedStatus(status)} className="w-[18px] h-[18px] [accent-color:#0f2044]"
                    />
                    <span className="text-[0.95rem] text-[#4b5563] font-['DM_Sans',_sans-serif]">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-[1.05rem] font-[600] text-[#0f2044] mb-[16px] font-['DM_Sans',_sans-serif]">
                Price Range
              </h3>
              <div className="grid grid-cols-[1fr_1fr] gap-[12px]">
                <div className="relative">
                  <select 
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)} className="w-[100%] p-[10px_12px] rounded-[8px] border-[1px] border-solid border-[#e5e7eb] text-[0.9rem] text-[#4b5563] outline-none bg-[#faf8f5] font-['DM_Sans',_sans-serif] [appearance:none]"
                  >
                    <option value="">Min</option>
                    <option value="1Cr">₹ 1 Cr</option>
                    <option value="2Cr">₹ 2 Cr</option>
                    <option value="5Cr">₹ 5 Cr</option>
                  </select>
                  <ChevronDown size={14} color="#6b7280" className="absolute right-[10px] top-[50%] [transform:translateY(-50%)] [pointer-events:none]" />
                </div>
                <div className="relative">
                  <select 
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)} className="w-[100%] p-[10px_12px] rounded-[8px] border-[1px] border-solid border-[#e5e7eb] text-[0.9rem] text-[#4b5563] outline-none bg-[#faf8f5] font-['DM_Sans',_sans-serif] [appearance:none]"
                  >
                    <option value="">Max</option>
                    <option value="2Cr">₹ 2 Cr</option>
                    <option value="5Cr">₹ 5 Cr</option>
                    <option value="10Cr">₹ 10 Cr</option>
                  </select>
                  <ChevronDown size={14} color="#6b7280" className="absolute right-[10px] top-[50%] [transform:translateY(-50%)] [pointer-events:none]" />
                </div>
              </div>
            </div>
            
            <button className="btn-navy w-[100%] mt-[32px] p-[12px] rounded-[8px]"
            >
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Main Listing Area */}
        <div className="flex-[1]">
          
          {/* Category Filter Chips */}
          <div className="filter-chips-container flex gap-[12px] mb-[24px] pb-[8px] [overflow-x:auto] [scrollbar-width:none]"
          >
            {propertyTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)} className={`p-[8px_16px] rounded-[50px] text-[0.9rem] cursor-pointer whitespace-nowrap transition-[all_0.2s_ease] font-['DM_Sans',_sans-serif] border-[1px] border-solid ${selectedType === type ? 'border-[#0f2044] bg-[#0f2044] text-[#fff] font-[600]' : 'border-[rgba(201,169,110,0.3)] bg-[#fff] text-[#4b5563] font-[400]'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-[24px] gap-[16px] [flex-wrap:wrap]">
            <p className="text-[#4b5563] m-[0] font-['DM_Sans',_sans-serif]">
              Showing <span className="font-[600] text-[#0f2044]">1-{filteredProperties.length}</span> of {filteredProperties.length} properties
            </p>
            
            <div className="flex items-center gap-[12px]">
              <span className="text-[0.9rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">Sort by:</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)} className="p-[8px_32px_8px_16px] rounded-[50px] border-[1px] border-solid border-[rgba(201,169,110,0.3)] bg-[#fff] text-[0.9rem] text-[#0f2044] font-[500] outline-none cursor-pointer font-['DM_Sans',_sans-serif] [appearance:none]"
                >
                  <option value="latest">Latest Added</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown size={16} color="#0f2044" className="absolute right-[12px] top-[50%] [transform:translateY(-50%)] [pointer-events:none]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[30px]">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="text-center p-[60px_0] bg-[#fff] rounded-[16px] border-[1px_dashed_#c9a96e] [grid-column:1_/_-1]">
                <h3 className="font-serif text-[1.5rem] text-[#0f2044] mb-[12px]">No properties found</h3>
                <p className="text-[#6b7280] font-['DM_Sans',_sans-serif]">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {filteredProperties.length > 0 && (
            <div className="flex justify-center items-center gap-[8px] mt-[60px]">
              <button className="pagination-btn disabled">Prev</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <span className="text-[#9ca3af]">...</span>
              <button className="pagination-btn">5</button>
              <button className="pagination-btn">Next</button>
            </div>
          )}
        </div>
      </div>
      
      <FinalCTA />
      
      
    </div>
  );
};

export default PropertiesPage;
