import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/features/auth/components/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[100vh] bg-[#faf8f5]">
      {/* Left visual area (hidden on mobile) */}
      <div className="auth-visual hidden md:block flex-[1] sticky top-[0] h-[100vh] [background-image:url(/images/hero_villa.jpg)] [background-size:cover] [background-position:center]"
      >
        <div className="absolute bg-[linear-gradient(180deg,_rgba(15,32,68,0.2)_0%,_rgba(15,32,68,0.85)_100%)] flex flex-col justify-end p-[64px] text-[white] [inset:0]">
          <h2 className="font-serif text-[3.6rem] m-[0_0_16px_0] [line-height:1.1]">
            Find Your <br/>Dream Home
          </h2>
          <p className="text-[1.1rem] opacity-[0.9] max-w-[400px] font-['DM_Sans',_sans-serif] [line-height:1.6]">
            Join Avenora Estates to save properties, schedule viewings, and experience premium real estate.
          </p>
        </div>
      </div>

      {/* Right form area */}
      <div className="auth-form-container flex-[1] p-[104px_16px_32px] md:p-[120px_24px_64px] overflow-y-auto"
      >
        <div className="w-[100%] max-w-[480px] m-[0_auto] bg-[#fff] rounded-[16px] p-[32px_24px] md:p-[48px_40px] shadow-[0_12px_40px_rgba(15,_32,_68,_0.04)] border-[1px] border-solid border-[rgba(201,169,110,0.15)]">
          <div className="text-center mb-[40px]">
            <h1 className="font-serif text-[2.5rem] text-[#0f2044] m-[0_0_8px_0]">
              Welcome Back
            </h1>
            <p className="text-[#6b7280] m-[0] text-[1rem] font-['DM_Sans',_sans-serif]">
              Sign in to continue to your Avenora Estates account.
            </p>
          </div>

          <LoginForm />

          <div className="text-center mt-[32px]">
            <span className="text-[0.95rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">
              Don't have an account?{' '}
            </span>
            <button
              onClick={() => navigate('/signup')} className="bg-transparent border-none p-[0] text-[0.95rem] text-[#0f2044] cursor-pointer font-[700] font-['DM_Sans',_sans-serif]"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LoginPage;
