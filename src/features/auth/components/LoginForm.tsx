import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
      {error && (
        <div className="p-[12px_16px] bg-[rgba(225,_29,_72,_0.05)] border-[1px] border-solid border-[rgba(225,_29,_72,_0.2)] rounded-[8px] text-[#E11D48] text-[0.9rem] font-['DM_Sans',_sans-serif]">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-[6px]">
        <label htmlFor="email" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="auth-input"
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label htmlFor="password" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
          Password
        </label>
        <div className="relative flex items-center">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" className="auth-input w-[100%]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-[12px] bg-transparent border-none text-[#6b7280] cursor-pointer flex items-center p-[4px]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[-4px]">
        <label className="flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" className="w-[16px] h-[16px] [accent-color:#c9a96e]" />
          <span className="text-[0.9rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">Remember me</span>
        </label>
        <button
          type="button"
          onClick={() => navigate('/forgot-password')} className="bg-transparent border-none p-[0] text-[0.9rem] text-[#c9a96e] cursor-pointer font-[600] font-['DM_Sans',_sans-serif]"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading} className={`btn-gold w-[100%] p-[16px] rounded-[8px] mt-[8px] text-[1rem] justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
      >
        {isLoading ? 'Signing In...' : 'Login →'}
      </button>
    </form>
  );
};
