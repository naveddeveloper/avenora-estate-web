import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '@/features/auth/context/AuthContext';

interface ForgotPasswordPageProps {
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth();
  
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      // In production, don't reveal if email exists, just show success.
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100vh] bg-[#FAF8F4]">
      <div className="flex-[1] flex items-center justify-center pt-[112px] pb-[40px] px-[24px] max-w-[600px] w-[100%] m-[0_auto]"
      >
        <div className="w-[100%] max-w-[420px]">
          <div className="text-center mb-[40px]">
            <h1 className="font-serif text-[2.5rem] text-[#08233F] m-[0_0_8px_0]">
              Forgot Your Password?
            </h1>
            <p className="text-[#65758B] m-[0] text-[1rem] font-['DM_Sans',_sans-serif] [line-height:1.5]">
              Enter your email address and we'll help you reset your password.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[white] p-[32px] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] text-center shadow-[0_4px_24px_rgba(15,32,68,0.04)]">
              <div className="w-[64px] h-[64px] rounded-[50%] bg-[rgba(16,_185,_129,_0.1)] text-[#10B981] flex items-center justify-center m-[0_auto_24px] text-[2rem]">✓</div>
              <h2 className="font-serif text-[1.5rem] text-[#08233F] m-[0_0_12px_0]">
                Check Your Email
              </h2>
              <p className="text-[#65758B] m-[0_0_24px_0] text-[0.95rem] font-['DM_Sans',_sans-serif] [line-height:1.6]">
                If an account exists for {email}, password reset instructions have been sent.
              </p>
              <button
                onClick={() => navigate('/login')} className="btn-navy w-[100%] p-[14px] rounded-[8px] justify-center"
              >
                Return to Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="email" className="text-[0.85rem] font-[600] text-[#08233F] font-['DM_Sans',_sans-serif]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" className="p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] text-[1rem] text-[#08233F] outline-none transition-[all_0.2s] font-['DM_Sans',_sans-serif]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !email} className={`btn-navy w-[100%] p-[14px] rounded-[8px] mt-[8px] text-[1rem] justify-center ${isLoading || !email ? 'opacity-70 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link →'}
              </button>
            </form>
          )}

          {!isSubmitted && (
            <div className="text-center mt-[32px]">
              <button
                onClick={() => navigate('/login')} className="bg-transparent border-none p-[0] text-[0.95rem] text-[#08233F] cursor-pointer font-[600] font-['DM_Sans',_sans-serif]"
              >
                &larr; Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
