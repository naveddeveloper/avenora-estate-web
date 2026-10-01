import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/shared/Logo';

const SocialIcons = {
  Facebook: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.34 29 29 0 0 0-.46-5.33z"/>
      <polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  ),
};

const quickLinks = ['Home', 'Properties', 'About Us', 'Services', 'Contact'];

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  return (
    <footer
      role="contentinfo" className="bg-[#fff] p-[56px_24px_32px] border-t-[1px] border-solid border-t-[rgba(201,169,110,0.15)]"
    >
      <div className="max-w-[1280px] m-[0_auto]">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-[32px] lg:gap-[48px] mb-[48px]"
        >
          {/* Col 1: Brand */}
          <div>
            <Logo />
            <p className="text-[0.85rem] text-[#6b7280] m-[16px_0_0] max-w-[260px] font-['DM_Sans',_sans-serif] [line-height:1.7]"
            >
              Your trusted partner for premium real estate — buying, selling, and renting made simple.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-[0.8rem] font-[600] text-[#0f2044] m-[0_0_18px] font-['DM_Sans',_sans-serif] [letter-spacing:0.15em] [text-transform:uppercase]"
            >
              Quick Links
            </h3>
            <ul className="m-[0] p-[0] flex flex-col gap-[10px] [list-style:none]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const page = link === 'About Us' ? 'About' : link;
                      const paths: Record<string, string> = {
                        'Home': '/',
                        'Properties': '/properties',
                        'About': '/about',
                        'Services': '/services',
                        'Contact': '/contact'
                      };
                      navigate(paths[page] || '/');
                      window.scrollTo(0, 0);
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')} className="bg-transparent border-none cursor-pointer p-[0] text-left text-[0.875rem] text-[#6b7280] transition-[color_0.2s] font-['DM_Sans',_sans-serif]"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-[0.8rem] font-[600] text-[#0f2044] m-[0_0_18px] font-['DM_Sans',_sans-serif] [letter-spacing:0.15em] [text-transform:uppercase]"
            >
              Get in Touch
            </h3>
            <ul className="m-[0] p-[0] flex flex-col gap-[14px] [list-style:none]">
              <li className="flex items-start gap-[10px]">
                <Phone size={15} color="#c9a96e" strokeWidth={1.8} className="mt-[2px] [flex-shrink:0]" />
                <a
                  href="tel:+919307147361"
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')} className="text-[0.875rem] text-[#6b7280] no-underline font-['DM_Sans',_sans-serif]"
                >
                  +91 9307147361
                </a>
              </li>
              <li className="flex items-start gap-[10px]">
                <Mail size={15} color="#c9a96e" strokeWidth={1.8} className="mt-[2px] [flex-shrink:0]" />
                <a
                  href="mailto:hello@avenoraestates.com"
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')} className="text-[0.875rem] text-[#6b7280] no-underline font-['DM_Sans',_sans-serif]"
                >
                  hello@avenoraestates.com
                </a>
              </li>
              <li className="flex items-start gap-[10px]">
                <MapPin size={15} color="#c9a96e" strokeWidth={1.8} className="mt-[2px] [flex-shrink:0]" />
                <address className="text-[0.875rem] text-[#6b7280] font-['DM_Sans',_sans-serif] [font-style:normal] [line-height:1.6]"
                >
                  12th Floor, Skyline Tower,<br />
                  MG Road, Bangalore,<br />
                  Karnataka 560001
                </address>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h3 className="text-[0.8rem] font-[600] text-[#0f2044] m-[0_0_18px] font-['DM_Sans',_sans-serif] [letter-spacing:0.15em] [text-transform:uppercase]"
            >
              Follow Us
            </h3>
            <div className="flex gap-[10px] [flex-wrap:wrap]">
              {[
                { Icon: SocialIcons.Facebook, label: 'Facebook' },
                { Icon: SocialIcons.Instagram, label: 'Instagram' },
                { Icon: SocialIcons.LinkedIn, label: 'LinkedIn' },
                { Icon: SocialIcons.YouTube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`https://${label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Avenora Estates on ${label}`}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#c9a96e';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(201,169,110,0.1)';
                    (e.currentTarget as HTMLElement).style.color = '#c9a96e';
                  }} className="w-[38px] h-[38px] rounded-[50%] bg-[rgba(201,169,110,0.1)] border-[1px] border-solid border-[rgba(201,169,110,0.25)] flex items-center justify-center text-[#c9a96e] no-underline transition-[background_0.2s,_color_0.2s]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-[24px] border-t-[1px] border-solid border-t-[rgba(201,169,110,0.15)]">
          <div className="flex items-center justify-between gap-[12px] [flex-wrap:wrap]"
          >
            <p className="text-[0.8rem] text-[#9ca3af] m-[0] font-['DM_Sans',_sans-serif]">
              © 2025 Avenora Estates. All rights reserved.
            </p>
            <div className="flex gap-[24px]">
              {['Privacy Policy', 'Terms & Conditions'].map((t) => (
                <button
                  key={t}
                  onClick={() => window.scrollTo(0, 0)}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')} className="bg-transparent border-none cursor-pointer p-[0] text-[0.8rem] text-[#9ca3af] font-['DM_Sans',_sans-serif]"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
