import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { User as UserIcon, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';
import {useAuth } from '@/features/auth/context/AuthContext';

interface AccountDropdownProps {
  onClose: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ onClose}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!user) return null;

  return (
    <div 
      ref={dropdownRef} className="absolute top-[calc(100%_+_8px)] right-[0] w-[280px] bg-[#fff] rounded-[12px] shadow-[0_8px_32px_rgba(15,32,68,0.12)] border-[1px] border-solid border-[rgba(201,169,110,0.2)] overflow-hidden z-[1000] [animation:dropdown-fade_0.2s_ease-out]"
    >
      <div className="p-[20px_24px] flex items-center gap-[16px] border-b-[1px] border-solid border-b-[#F3EFE9]">
        <div className="w-[48px] h-[48px] rounded-[50%] bg-[#08233F] text-[#C98A32] flex items-center justify-center text-[1.1rem] font-[700] font-['DM_Sans',_sans-serif]">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-[100%] h-[100%] rounded-[50%] object-cover" />
          ) : (
            user.name.substring(0, 2).toUpperCase()
          )}
        </div>
        <div>
          <div className="text-[1.1rem] text-[#08233F] font-[600] font-['Playfair_Display',_serif]">
            Hi, {user.name.split(' ')[0]}
          </div>
          <div className="text-[0.8rem] text-[#65758B] font-['DM_Sans',_sans-serif]">
            {user.email}
          </div>
        </div>
      </div>

      <div className="p-[8px_0]">
        <button
          onClick={() => { navigate('/profile'); onClose(); }}
          className="w-[100%] text-left bg-transparent border-none cursor-pointer p-[12px_24px] text-[0.95rem] font-['DM_Sans',_sans-serif] text-[#08233F] flex items-center gap-[12px] transition-colors hover:bg-[#FAF8F5]"
        >
          <UserIcon size={16} />
          <span>Profile</span>
          <ChevronRight size={14} className="ml-[auto] opacity-[0.5]" />
        </button>
        <button
          onClick={() => { navigate('/favorites'); onClose(); }}
          className="w-[100%] text-left bg-transparent border-none cursor-pointer p-[12px_24px] text-[0.95rem] font-['DM_Sans',_sans-serif] text-[#08233F] flex items-center gap-[12px] transition-colors hover:bg-[#FAF8F5]"
        >
          <Heart size={16} />
          <span>Saved Properties</span>
          <ChevronRight size={14} className="ml-[auto] opacity-[0.5]" />
        </button>
        <button
          onClick={() => { navigate('/profile'); onClose(); }}
          className="w-[100%] text-left bg-transparent border-none cursor-pointer p-[12px_24px] text-[0.95rem] font-['DM_Sans',_sans-serif] text-[#08233F] flex items-center gap-[12px] transition-colors hover:bg-[#FAF8F5]"
        >
          <Settings size={16} />
          <span>Account Settings</span>
          <ChevronRight size={14} className="ml-[auto] opacity-[0.5]" />
        </button>
      </div>

      <div className="p-[8px_0] border-t-[1px] border-solid border-t-[#F3EFE9]">
        <button
          onClick={async () => {
            await logout();
            onClose();
            navigate('/'); // Ensure logout brings user to home
          }} className="w-[100%] text-left bg-transparent border-none cursor-pointer p-[12px_24px] text-[0.95rem] font-['DM_Sans',_sans-serif] text-[#E11D48] flex items-center gap-[12px] transition-colors hover:bg-[rgba(225,29,72,0.05)]"
        >
          <LogOut size={16} color="#E11D48" />
          <span>Logout</span>
        </button>
      </div>


    </div>
  );
};

export default AccountDropdown;
