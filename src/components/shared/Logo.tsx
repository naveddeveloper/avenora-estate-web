import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  const accentColor = '#c9a96e';

  return (
    <div className="flex items-center gap-[10px] no-underline">
      {/* Home Icon SVG */}
      <div className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center [flex-shrink:0] border-[1.5px] border-solid ${light ? 'border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.08)]' : 'border-[#C98A32] bg-[rgba(201,169,110,0.08)]'}`} >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      </div>
      {/* Brand Text */}
      <div className="[line-height:1]">
        <div className={`font-[600] text-[1rem] whitespace-nowrap font-['DM_Sans',_sans-serif] [letter-spacing:0.01em] ${light ? 'text-white' : 'text-[#0f2044]'}`} >
          Avenora Estates
        </div>
        <div className={`text-[0.62rem] font-[400] mt-[2px] font-['DM_Sans',_sans-serif] [letter-spacing:0.18em] text-[#C98A32]`} >
          BUY · SELL · RENT
        </div>
      </div>
    </div>
  );
};

export default Logo;
