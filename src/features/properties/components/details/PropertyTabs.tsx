import React from 'react';

const tabs = ['Overview', 'Amenities', 'Floor Plan', 'Location', 'Price Details'];

interface PropertyTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PropertyTabs: React.FC<PropertyTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="hide-scrollbar mb-[40px] border-b-[1px] border-solid border-b-[#E8E2D8] [overflow-x:auto] [scrollbar-width:none] [ms-overflow-style:none]">
      <div className="flex gap-[32px] min-w-[max-content]">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)} className={`bg-transparent border-none p-[16px_0] text-[1.05rem] cursor-pointer relative transition-[color_0.2s_ease] font-['DM_Sans',_sans-serif] ${activeTab === tab ? 'font-[600] text-[#08233F]' : 'font-[500] text-[#65758B]'}`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute left-[0] right-[0] h-[3px] bg-[#C98A32] rounded-[3px_3px_0_0] bottom-[-1px]" />
            )}
          </button>
        ))}
      </div>
      
      
    </div>
  );
};

export default PropertyTabs;
