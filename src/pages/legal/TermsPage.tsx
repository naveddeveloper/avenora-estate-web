import React from 'react';

interface TermsPageProps {
}

const TermsPage: React.FC<TermsPageProps> = () => {
    return (
    <div className="bg-[#FAF8F4] min-h-[100vh] pt-[100px] pb-[60px] px-[24px]">
      <div className="max-w-[800px] m-[0_auto] bg-[white] p-[40px] rounded-[16px] border-[1px] border-solid border-[#E8E2D8]">
        <h1 className="font-serif text-[2.5rem] text-[#08233F] mb-[24px]">Terms & Conditions</h1>
        <div className="text-[#65758B] flex flex-col gap-[16px] font-['DM_Sans',_sans-serif] [line-height:1.6]">
          <p>
            Welcome to Avenora Estates. These Terms & Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">1. Use of the Platform</h2>
          <p>
            The content provided on this website is for informational purposes only. We strive to provide accurate property details, but we make no guarantees regarding completeness or accuracy.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">2. User Accounts</h2>
          <p>
            To save properties or schedule visits, you may need to register an account. You are responsible for maintaining the confidentiality of your login credentials.
          </p>
          <h2 className="text-[1.2rem] text-[#08233F] m-[16px_0_8px_0]">3. Real Estate Transactions</h2>
          <p>
            Avenora Estates acts as a facilitator. Final terms of sale or lease are subject to formal agreements between the involved parties. Property availability and pricing are subject to change without notice.
          </p>
          <p className="mt-[24px]">
            Last updated: September 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
