import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';

interface ResetPasswordPageProps {
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // In a real app we'd get token from URL. We simulate it here from localStorage.
  const token = localStorage.getItem('mock_reset_token') || '';

  const passLength = password.length >= 8;
  const passUpper = /[A-Z]/.test(password);
  const passLower = /[a-z]/.test(password);
  const passNum = /[0-9]/.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!token) {
      setError('Invalid or missing reset token.');
      return;
    }

    if (!passLength || !passUpper || !passLower || !passNum) {
      setError('Please meet all password requirements.');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword(token, password);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Password reset link is invalid or expired.');
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
              Create a New Password
            </h1>
            <p className="text-[#65758B] m-[0] text-[1rem] font-['DM_Sans',_sans-serif]">
              Please enter your new password below.
            </p>
          </div>

          {isSuccess ? (
             <div className="bg-[white] p-[32px] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] text-center shadow-[0_4px_24px_rgba(15,32,68,0.04)]">
              <div className="w-[64px] h-[64px] rounded-[50%] bg-[rgba(16,_185,_129,_0.1)] text-[#10B981] flex items-center justify-center m-[0_auto_24px] text-[2rem]">✓</div>
              <h2 className="font-serif text-[1.5rem] text-[#08233F] m-[0_0_12px_0]">
                Password Reset Successfully
              </h2>
              <p className="text-[#65758B] m-[0_0_24px_0] text-[0.95rem] font-['DM_Sans',_sans-serif]">
                Your password has been changed. You can now log in with your new password.
              </p>
              <button
                onClick={() => navigate('/login')} className="btn-navy w-[100%] p-[14px] rounded-[8px] justify-center"
              >
                Login →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              {error && (
                <div className="p-[12px_16px] bg-[rgba(225,_29,_72,_0.05)] border-[1px] border-solid border-[rgba(225,_29,_72,_0.2)] rounded-[8px] text-[#E11D48] text-[0.9rem] font-['DM_Sans',_sans-serif]">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-[6px]">
                <label htmlFor="password" className="text-[0.85rem] font-[600] text-[#08233F] font-['DM_Sans',_sans-serif]">
                  New Password
                </label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password" className="w-[100%] p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] text-[1rem] outline-none font-['DM_Sans',_sans-serif]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} className="absolute right-[12px] bg-transparent border-none text-[#65758B] cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1fr] gap-[8px] p-[12px_16px] bg-[#f8f9fa] rounded-[8px] mt-[-8px]">
                <div className={`flex items-center gap-[6px] text-[0.8rem] ${passLength ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} >
                  <CheckCircle2 size={14} /> 8+ characters
                </div>
                <div className={`flex items-center gap-[6px] text-[0.8rem] ${passUpper ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} >
                  <CheckCircle2 size={14} /> Uppercase letter
                </div>
                <div className={`flex items-center gap-[6px] text-[0.8rem] ${passLower ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} >
                  <CheckCircle2 size={14} /> Lowercase letter
                </div>
                <div className={`flex items-center gap-[6px] text-[0.8rem] ${passNum ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} >
                  <CheckCircle2 size={14} /> Number
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label htmlFor="confirmPassword" className="text-[0.85rem] font-[600] text-[#08233F] font-['DM_Sans',_sans-serif]">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password" className="w-[100%] p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] text-[1rem] outline-none font-['DM_Sans',_sans-serif]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading} className={`btn-navy w-[100%] p-[14px] rounded-[8px] mt-[8px] text-[1rem] justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
              >
                {isLoading ? 'Resetting...' : 'Reset Password →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
