import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, IndianRupee, Search, ChevronDown } from 'lucide-react';
import { properties } from '@/features/properties/data/properties.data';

const propertyTypes = ['Any', 'Villa', 'Apartment', 'Independent House', 'Commercial', 'Plot & Land'];
const budgetOptions = ['Any', 'Under ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹3Cr', '₹3Cr – ₹5Cr', '₹5Cr+'];

const PropertySearch: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Any');
  const [budget, setBudget] = useState('Any');
  const [typeOpen, setTypeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    if (!location.trim()) return [];
    const query = location.toLowerCase();
    
    // Extract unique cities and locations
    const cities = Array.from(new Set(properties.map(p => p.city))).filter(c => c.toLowerCase().includes(query));
    const locations = Array.from(new Set(properties.map(p => p.location.split(',')[0]))).filter(l => l.toLowerCase().includes(query) && !cities.includes(l));
    
    // Extract property names
    const names = properties.filter(p => p.name.toLowerCase().includes(query)).map(p => p.name);
    
    return [...cities, ...locations, ...names].slice(0, 5);
  }, [location]);

  const handleSearch = (e?: React.FormEvent, directSuggestion?: string) => {
    if (e) e.preventDefault();
    const searchVal = directSuggestion || location;
    
    // Navigate to properties page with state
    navigate('/properties', {
      state: {
        searchQuery: searchVal,
        propertyType: propertyType !== 'Any' ? propertyType : 'All',
        budget: budget !== 'Any' ? budget : undefined
      }
    });
  };

  const closeDropdowns = () => { setTypeOpen(false); setBudgetOpen(false); };

  return (
    <section
      aria-label="Property search" className="p-[0_24px] max-w-[1280px] m-[-56px_auto_0] relative z-[10]"
    >
      <form
        onSubmit={handleSearch}
        aria-label="Search properties form" className="bg-[#fff] rounded-[20px] shadow-[0_8px_48px_rgba(15,32,68,0.12)] border-[1px] border-solid border-[rgba(201,169,110,0.18)] p-[12px] md:p-[8px_8px_8px_0] flex flex-col md:flex-row md:flex-wrap items-stretch"
      >
        {/* Location */}
        <div className="flex-none md:flex-1 p-[12px_16px] md:p-[14px_24px] w-full md:w-auto flex items-center gap-[10px] cursor-text"
        >
          <MapPin size={18} color="#c9a96e" strokeWidth={1.8} className="[flex-shrink:0]" />
          <div className="flex-[1] relative">
            <label
              htmlFor="search-location" className="block text-[0.68rem] font-[600] text-[#0f2044] mb-[3px] [letter-spacing:0.1em] [text-transform:uppercase]"
            >
              Location
            </label>
            <input
              id="search-location"
              type="text"
              placeholder="Enter city or area"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
              className="border-none outline-none text-[0.875rem] text-[#6b7280] bg-[transparent] w-[100%] font-['DM_Sans',_sans-serif]"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-[100%] left-[0] bg-[#fff] border-[1px] border-solid border-[rgba(201,169,110,0.2)] rounded-[12px] shadow-[0_8px_32px_rgba(15,32,68,0.12)] m-[0] mt-[16px] p-[6px_0] min-w-[200px] z-[50] [list-style:none]">
                {suggestions.map((s, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setLocation(s);
                        setShowSuggestions(false);
                        handleSearch(undefined, s);
                      }}
                      className="w-[100%] text-left border-none cursor-pointer p-[10px_16px] text-[0.875rem] font-['DM_Sans',_sans-serif] bg-transparent hover:bg-[rgba(201,169,110,0.08)] text-[#374151]"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="w-full h-[1px] md:w-[1px] md:h-auto my-0 md:my-[12px] bg-[#e5e0d8] self-stretch" />

        {/* Property Type */}
        <div className="flex-none md:flex-1 w-full md:w-auto relative">
          <button
            type="button"
            onClick={() => { setTypeOpen(!typeOpen); setBudgetOpen(false); }}
            aria-haspopup="listbox"
            aria-expanded={typeOpen}
            aria-label="Select property type" className="w-full h-full bg-transparent border-none cursor-pointer p-[12px_16px] md:p-[14px_24px] flex items-center gap-[10px] text-left"
          >
            <Home size={18} color="#c9a96e" strokeWidth={1.8} className="[flex-shrink:0]" />
            <div className="flex-[1]">
              <div className="text-[0.68rem] font-[600] text-[#0f2044] mb-[3px] [letter-spacing:0.1em] [text-transform:uppercase]">
                Property Type
              </div>
              <div className="text-[0.875rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">
                {propertyType}
              </div>
            </div>
            <ChevronDown size={14} color="#9ca3af" />
          </button>
          {typeOpen && (
            <ul
              role="listbox"
              aria-label="Property types" className="absolute top-[calc(100%_+_8px)] left-[0] bg-[#fff] border-[1px] border-solid border-[rgba(201,169,110,0.2)] rounded-[12px] shadow-[0_8px_32px_rgba(15,32,68,0.12)] m-[0] p-[6px_0] min-w-[200px] z-[50] [list-style:none]"
            >
              {propertyTypes.map((t) => (
                <li key={t}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={propertyType === t}
                    onClick={() => { setPropertyType(t); setTypeOpen(false); }} className={`w-[100%] text-left border-none cursor-pointer p-[10px_16px] text-[0.875rem] font-['DM_Sans',_sans-serif] ${propertyType === t ? 'bg-[rgba(201,169,110,0.08)] text-[#c9a96e] font-[600]' : 'bg-transparent text-[#374151] font-[400]'}`}
                  >
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-full h-[1px] md:w-[1px] md:h-auto my-0 md:my-[12px] bg-[#e5e0d8] self-stretch" />

        {/* Budget */}
        <div className="flex-none md:flex-1 w-full md:w-auto relative">
          <button
            type="button"
            onClick={() => { setBudgetOpen(!budgetOpen); setTypeOpen(false); }}
            aria-haspopup="listbox"
            aria-expanded={budgetOpen}
            aria-label="Select budget range" className="w-full h-full bg-transparent border-none cursor-pointer p-[12px_16px] md:p-[14px_24px] flex items-center gap-[10px] text-left"
          >
            <IndianRupee size={18} color="#c9a96e" strokeWidth={1.8} className="[flex-shrink:0]" />
            <div className="flex-[1]">
              <div className="text-[0.68rem] font-[600] text-[#0f2044] mb-[3px] [letter-spacing:0.1em] [text-transform:uppercase]">
                Budget
              </div>
              <div className="text-[0.875rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">
                {budget}
              </div>
            </div>
            <ChevronDown size={14} color="#9ca3af" />
          </button>
          {budgetOpen && (
            <ul
              role="listbox"
              aria-label="Budget options" className="absolute top-[calc(100%_+_8px)] left-[0] bg-[#fff] border-[1px] border-solid border-[rgba(201,169,110,0.2)] rounded-[12px] shadow-[0_8px_32px_rgba(15,32,68,0.12)] m-[0] p-[6px_0] min-w-[200px] z-[50] [list-style:none]"
            >
              {budgetOptions.map((b) => (
                <li key={b}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={budget === b}
                    onClick={() => { setBudget(b); setBudgetOpen(false); }} className={`w-[100%] text-left border-none cursor-pointer p-[10px_16px] text-[0.875rem] font-['DM_Sans',_sans-serif] ${budget === b ? 'bg-[rgba(201,169,110,0.08)] text-[#c9a96e] font-[600]' : 'bg-transparent text-[#374151] font-[400]'}`}
                  >
                    {b}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search button */}
        <div className="p-[12px_16px] md:p-[8px] w-full md:w-auto flex items-center">
          <button
            type="submit"
            aria-label="Search properties" className="btn-navy p-[14px_28px] rounded-[14px] text-[0.9rem] font-[600] gap-[8px] whitespace-nowrap w-[100%] md:w-auto justify-center"
          >
            <Search size={18} />
            Search
          </button>
        </div>
      </form>



      {/* Click-outside to close dropdowns */}
      {(typeOpen || budgetOpen) && (
        <div
          onClick={closeDropdowns}
          aria-hidden="true" className="fixed z-[40] [inset:0]"
        />
      )}

      
    </section>
  );
};

export default PropertySearch;
