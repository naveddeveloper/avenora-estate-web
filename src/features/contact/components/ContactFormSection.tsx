import React, { useState, useEffect } from 'react';
import { Clock, Users, Shield, Headset, ArrowRight } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';

const highlights = [
  { icon: Clock, title: 'Quick Response', desc: 'We usually respond within 24 hours.' },
  { icon: Users, title: 'Expert Guidance', desc: 'Talk to our real estate experts.' },
  { icon: Shield, title: 'Trusted Support', desc: 'Safe and transparent process.' },
  { icon: Headset, title: 'End-to-End Assistance', desc: 'From search to settlement.' }
];

const ContactFormSection: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        phone: user.phone,
        email: user.email
      }));
    }
  }, [user]);
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <section className="bg-[#faf8f5] p-[140px_24px_80px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[60px] [align-items:start]">
        
        {/* Left Side: Content & Highlights */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            CONTACT US
          </span>
          <h1 className="font-serif text-[3.6rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            Let's Talk<br />About Your<br />Property Goals.
          </h1>
          <p className="text-[1.05rem] text-[#6b7280] m-[0_0_40px_0] max-w-[500px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            Whether you want to buy, sell, rent or invest, our team is here to help. Get in touch with us and take the next step towards your dream property.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-[repeat(4,_1fr)] gap-[16px]">
            {highlights.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center gap-[12px]">
                  <div className="w-[48px] h-[48px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center border-[1px] border-solid border-[rgba(201,169,110,0.2)]">
                    <item.icon size={20} color="#c9a96e" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[0.9rem] font-[700] text-[#0f2044] m-[0_0_4px_0] font-['DM_Sans',_sans-serif] [line-height:1.2]">
                      {item.title}
                    </h3>
                    <p className="text-[0.8rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.4]">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {index < highlights.length - 1 && (
                  <div className="contact-highlight-divider w-[1px] h-[60%] bg-[rgba(201,169,110,0.2)] m-[auto_0]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#fff] rounded-[16px] p-[40px] shadow-[0_12px_40px_rgba(15,_32,_68,_0.04)] border-[1px] border-solid border-[rgba(201,169,110,0.15)]">
          <h2 className="font-serif text-[2rem] text-[#0f2044] m-[0_0_8px_0]">
            Send Us a Message
          </h2>
          <p className="text-[0.95rem] text-[#6b7280] m-[0_0_32px_0] font-['DM_Sans',_sans-serif]">
            Fill out the form below and our team will get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex-[1] flex flex-col gap-[8px]">
                <label className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>
              <div className="flex-[1] flex flex-col gap-[8px]">
                <label className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex-[1] flex flex-col gap-[8px]">
                <label className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="form-input"
                />
              </div>
              <div className="flex-[1] flex flex-col gap-[8px]">
                <label className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                  Subject *
                </label>
                <select 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange} className="form-input [appearance:none] [background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23c9a96e%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E)] [background-repeat:no-repeat] [background-position:right_16px_top_50%] [background-size:12px_auto]"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Buying a Property">Buying a Property</option>
                  <option value="Selling a Property">Selling a Property</option>
                  <option value="Renting a Property">Renting a Property</option>
                  <option value="Property Investment">Property Investment</option>
                  <option value="Real Estate Consulting">Real Estate Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Your Message *
              </label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..." className="form-input h-[120px] [resize:vertical]"
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              onMouseOver={(e) => {
                if(status !== 'loading') e.currentTarget.style.backgroundColor = '#b3955d';
              }}
              onMouseOut={(e) => {
                if(status !== 'loading') e.currentTarget.style.backgroundColor = '#c9a96e';
              }} className={`items-center justify-center gap-[8px] bg-[#c9a96e] text-[#fff] border-none p-[16px] rounded-[30px] text-[1rem] font-[600] transition-[background-color_0.2s_ease] mt-[8px] [display:inline-flex] font-['DM_Sans',_sans-serif] ${status === 'loading' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer opacity-100'}`}
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <ArrowRight size={18} /></>
              )}
            </button>

            {status === 'success' && (
              <div className="bg-[#e6f4ea] text-[#137333] p-[16px] rounded-[8px] text-[0.9rem] text-center mt-[8px] font-['DM_Sans',_sans-serif]">
                Thanks! Your message has been received. We’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>

      
    </section>
  );
};

export default ContactFormSection;
