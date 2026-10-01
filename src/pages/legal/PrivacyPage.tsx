import React from 'react';

interface PrivacyPageProps {
}

const PrivacyPage: React.FC<PrivacyPageProps> = () => {
    return (
    <div className="bg-[#FAF8F4] min-h-[100vh] pt-[100px] pb-[60px] px-[24px]">
      <div className="max-w-[800px] m-[0_auto] bg-[white] p-[40px] rounded-[16px] border-[1px] border-solid border-[#E8E2D8]">
        <h1 className="font-serif text-[2.5rem] text-[#08233F] mb-[24px]">Privacy Policy</h1>
        <div className="text-[#65758B] flex flex-col gap-[16px] font-['DM_Sans',_sans-serif] [line-height:1.6]">
          <p>
            At Avenora Estates, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, save properties, schedule a visit, or contact us. This may include your name, email address, phone number, and property preferences.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, communicate with you about properties, process your requests, and personalize your experience on our platform.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">3. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
          <p className="mt-[24px]">
            Last updated: September 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
