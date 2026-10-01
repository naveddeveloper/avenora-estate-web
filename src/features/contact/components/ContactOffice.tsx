import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const officeDetails = [
  { 
    icon: MapPin, 
    label: 'Address', 
    info: '12th Floor, Skyline Tower,\nMG Road, Bangalore,\nKarnataka 560001' 
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    info: '+91 9307147361' 
  },
  { 
    icon: Mail, 
    label: 'Email', 
    info: 'hello@avenoraestates.com\nsupport@avenoraestates.com' 
  },
  { 
    icon: Clock, 
    label: 'Office Hours', 
    info: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 4:00 PM' 
  }
];

const ContactOffice: React.FC = () => {
  return (
    <section className="bg-[#f6f4f0] p-[80px_24px] flex justify-center">
      <div className="max-w-[1280px] w-[100%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[60px] [align-items:start]">
        
        {/* Left Side: Office Info */}
        <div>
          <span className="text-[0.85rem] font-[700] text-[#c9a96e] block mb-[16px] font-['DM_Sans',_sans-serif] [letter-spacing:0.1em] [text-transform:uppercase]">
            VISIT OUR OFFICE
          </span>
          <h2 className="font-serif text-[2.8rem] text-[#0f2044] m-[0_0_24px_0] [line-height:1.15]">
            Our Office Location
          </h2>
          <p className="text-[1.05rem] text-[#6b7280] m-[0_0_40px_0] max-w-[500px] font-['DM_Sans',_sans-serif] [line-height:1.7]">
            Come meet us at our Bangalore office or get in touch through your preferred channel. We're always happy to assist you.
          </p>

          <div className="flex flex-col gap-[32px]">
            {officeDetails.map((detail, index) => (
              <div key={index} className="office-detail-row flex gap-[24px] items-start">
                <div className="w-[48px] h-[48px] rounded-[50%] bg-[rgba(201,169,110,0.1)] flex items-center justify-center [flex-shrink:0]">
                  <detail.icon size={20} color="#c9a96e" strokeWidth={1.5} />
                </div>
                
                <div className="flex-[1] flex flex-col md:flex-row gap-[12px] md:gap-[24px]">
                  <div className="w-[100px]">
                    <h3 className="text-[0.95rem] font-[700] text-[#0f2044] m-[4px_0_0_0] font-['DM_Sans',_sans-serif]">
                      {detail.label}
                    </h3>
                  </div>
                  <div className="hidden md:block w-[1px] min-h-[40px] bg-[rgba(201,169,110,0.2)]" />
                  <div className="flex-[1]">
                    <p className="text-[0.95rem] text-[#6b7280] m-[4px_0_0_0] font-['DM_Sans',_sans-serif] [line-height:1.6] [white-space:pre-line]">
                      {detail.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="map-container h-[100%] min-h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(15,_32,_68,_0.06)] border-[1px] border-solid border-[rgba(201,169,110,0.15)] bg-[#e0e0e0]">
          <iframe 
            title="Avenora Estates Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3887.971576402447!2d77.6044673!3d12.9736569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e4529f79b%3A0xc31fa4a20eb18a2f!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714500000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" className="border-[0] block"
          />
        </div>
      </div>

      
    </section>
  );
};

export default ContactOffice;
