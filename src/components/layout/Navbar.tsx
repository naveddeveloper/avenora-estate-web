import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Heart, User, ArrowRight, Menu, X } from 'lucide-react';
import { useFavorites } from '@/features/favorites/context/FavoritesContext';
import { useAuth } from '@/features/auth/context/AuthContext';
import Logo from '@/components/shared/Logo';
import AccountDropdown from '@/components/layout/AccountDropdown';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { favoritesCount } = useFavorites();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>


      <header
        role="banner" className={`fixed top-[0] left-[0] right-[0] z-[100] bg-[rgba(250,248,245,0.97)] transition-[box-shadow_0.3s_ease] [backdrop-filter:blur(12px)] border-b-[1px] border-solid border-b-[rgba(201,169,110,0.15)] ${scrolled ? 'shadow-[0_4px_24px_rgba(15,32,68,0.08)]' : 'shadow-none'}`}
      >
        <nav
          aria-label="Main navigation" className="max-w-[1280px] m-[0_auto] p-[0_24px] h-[72px] flex items-center justify-between gap-[16px]"
        >
          {/* Logo */}
          <button 
            aria-label="Avenora Estates home"
            onClick={() => navigate('/')} className="no-underline bg-transparent border-none cursor-pointer p-[0]"
          >
            <Logo />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-[32px] list-none m-[0] p-[0]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => navigate(link.path)}
                  aria-current={location.pathname === link.path ? 'page' : undefined} className={`bg-transparent border-none cursor-pointer text-[0.9rem] text-[#0f2044] p-[4px_0] relative font-['DM_Sans',_sans-serif] ${location.pathname === link.path ? 'font-[600]' : 'font-[400]'}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-[12px]">
            {/* Icon buttons */}
            <div className="hidden md:flex items-center gap-[8px]">
              <button
                aria-label="Saved properties"
                onClick={() => navigate('/favorites')}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')} className="bg-transparent border-none cursor-pointer p-[8px_12px] text-[#0f2044] rounded-[24px] flex items-center gap-[6px] transition-[background_0.2s]"
              >
                <Heart size={18} fill={favoritesCount > 0 ? '#C98A32' : 'none'} color={favoritesCount > 0 ? '#C98A32' : '#0f2044'} />
                {favoritesCount > 0 && (
                  <span className="text-[0.85rem] font-[600] text-[#C98A32] font-['DM_Sans',_sans-serif]">
                    {favoritesCount > 99 ? '99+' : favoritesCount}
                  </span>
                )}
              </button>
              {!isAuthenticated && (
                <button
                  onClick={() => navigate('/login')}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0f2044')} className="bg-transparent border-none cursor-pointer text-[0.95rem] font-[600] text-[#0f2044] p-[8px_12px] transition-[color_0.2s] font-['DM_Sans',_sans-serif]"
                >
                  Login
                </button>
              )}
            </div>

            {/* Profile Avatar - Visible on Mobile and Desktop if logged in */}
            {isAuthenticated && (
              <div className="relative">
                <button
                  aria-label="Account menu"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} className="bg-[#0f2044] border-none cursor-pointer p-[0] w-[36px] h-[36px] text-[#c9a96e] rounded-[50%] flex items-center justify-center transition-[transform_0.2s] overflow-hidden"
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt="Profile" className="w-[100%] h-[100%] object-cover" />
                  ) : (
                    <span className="text-[0.9rem] font-[700] font-['DM_Sans',_sans-serif]">
                      {user?.name ? user.name.substring(0, 2).toUpperCase() : <User size={16} />}
                    </span>
                  )}
                </button>
                {dropdownOpen && (
                  <AccountDropdown 
                    onClose={() => setDropdownOpen(false)} 
                  />
                )}
              </div>
            )}

            {/* CTA Button */}
            <button
              aria-label="Get started with Avenora Estates"
              onClick={() => navigate('/contact')} className="btn-navy !hidden md:!inline-flex p-[10px_20px] text-[0.875rem]"
            >
              Get Started
              <ArrowRight size={16} />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen} className="flex md:hidden bg-transparent border-none cursor-pointer text-[#0f2044] p-[6px] items-center"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          aria-hidden={!mobileOpen} className={`border-t-[1px] border-solid border-t-[rgba(201,169,110,0.15)] md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        >
          <div className="p-[16px_24px_24px]">
            <ul className="m-[0] p-[0] [list-style:none]">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b-[1px] border-solid border-b-[rgba(201,169,110,0.12)]">
                  <button
                    onClick={() => { navigate(link.path); setMobileOpen(false); }} className={`w-[100%] text-left bg-transparent border-none cursor-pointer text-[1rem] text-[#0f2044] p-[14px_0] font-['DM_Sans',_sans-serif] ${location.pathname === link.path ? 'font-[600]' : 'font-[400]'}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              {!isAuthenticated && (
                <li className="border-b-[1px] border-solid border-b-[rgba(201,169,110,0.12)]">
                  <button
                    onClick={() => { navigate('/login'); setMobileOpen(false); }} className={`w-[100%] text-left bg-transparent border-none cursor-pointer text-[1rem] text-[#0f2044] p-[14px_0] font-['DM_Sans',_sans-serif] ${location.pathname === '/login' ? 'font-[600]' : 'font-[400]'}`}
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
            <div className="mt-[20px]">
              <button
                onClick={() => { navigate('/contact'); setMobileOpen(false); }} className="btn-navy p-[12px_24px] text-[0.9rem] w-[100%] justify-center"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>


      </header>
    </>
  );
};

export default Navbar;
