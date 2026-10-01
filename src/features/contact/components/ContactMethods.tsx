import React from 'react';
import { Phone, Mail, MessageSquare, MessageCircle } from 'lucide-react';

const methods = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '+91 9307147361',
    sub: 'Mon - Sat, 9 AM - 7 PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'hello@avenoraestates.com',
    sub: 'We reply within 24 hours'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    info: 'Chat with our support team',
    sub: 'directly on our website.'
  },
  {
    icon: MessageCircle, // Using MessageCircle for WhatsApp approximation
    title: 'WhatsApp',
    info: '+91 9307147361',
    sub: 'Quick responses on WhatsApp.'
  }
];

const ContactMethods: React.FC = () => {
  return (
    <section className="bg-[#faf8f5] p-[80px_24px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] flex flex-col gap-[40px]">
        
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            STAY CONNECTED
          </span>
          <h2 className="font-serif text-[2.8rem] text-[#0f2044] m-[0_0_16px_0] [line-height:1.15]">
            Other Ways to Reach Us
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif]">
            Choose the most convenient way to get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          
          {methods.map((method, index) => (
            <div key={index} className="method-card bg-[#fff] rounded-[16px] p-[32px] border-[1px] border-solid border-[rgba(201,169,110,0.15)] shadow-[0_8px_24px_rgba(15,_32,_68,_0.03)] flex flex-col items-start transition-[transform_0.2s_ease,_box-shadow_0.2s_ease] cursor-pointer">
              <div className="w-[48px] h-[48px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center mb-[24px]">
                <method.icon size={22} color="#c9a96e" strokeWidth={1.5} />
              </div>
              <h3 className="text-[1.1rem] font-[600] text-[#0f2044] m-[0_0_8px_0] font-['DM_Sans',_sans-serif]">
                {method.title}
              </h3>
              <p className="text-[0.95rem] font-[500] text-[#0f2044] m-[0_0_4px_0] font-['DM_Sans',_sans-serif]">
                {method.info}
              </p>
              <p className="text-[0.85rem] text-[#6b7280] m-[0] font-['DM_Sans',_sans-serif] [line-height:1.5]">
                {method.sub}
              </p>
            </div>
          ))}

        </div>
      </div>

      
    </section>
  );
};

export default ContactMethods;
