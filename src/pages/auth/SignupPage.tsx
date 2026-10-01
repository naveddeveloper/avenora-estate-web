import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';

interface SignupPageProps {
}

const SignupPage: React.FC<SignupPageProps> = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password validation checks
  const passLength = formData.password.length >= 8;
  const passUpper = /[A-Z]/.test(formData.password);
  const passLower = /[a-z]/.test(formData.password);
  const passNum = /[0-9]/.test(formData.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.name.length < 2) {
      setError('Name must be at least 2 characters long.');
      return;
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone) {
      setError('Phone number is required.');
      return;
    }
    if (!passLength || !passUpper || !passLower || !passNum) {
      setError('Please meet all password requirements.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      // Force navigation to profile after signup success
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Unable to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100vh] bg-[#faf8f5]">
      {/* Left visual area (hidden on mobile) */}
      <div className="auth-visual hidden md:block flex-[1] sticky top-[0] h-[100vh] [background-image:url(/images/interior_living.jpg)] [background-size:cover] [background-position:center]"
      >
        <div className="absolute bg-[linear-gradient(180deg,_rgba(15,32,68,0.1)_0%,_rgba(15,32,68,0.85)_100%)] flex flex-col justify-end p-[64px] text-[white] [inset:0]">
          <h2 className="font-serif text-[3.6rem] m-[0_0_16px_0] [line-height:1.1]">
            Join Avenora <br/>Estates
          </h2>
          <p className="text-[1.1rem] opacity-[0.9] max-w-[400px] font-['DM_Sans',_sans-serif] [line-height:1.6]">
            Create an account to save your favorite properties and manage your viewings in one place.
          </p>
        </div>
      </div>

      {/* Right form area */}
      <div className="auth-form-container flex-[1] p-[104px_16px_32px] md:p-[120px_24px_64px] overflow-y-auto"
      >
        <div className="w-[100%] max-w-[480px] m-[0_auto] bg-[#fff] rounded-[16px] p-[32px_24px] md:p-[48px_40px] shadow-[0_12px_40px_rgba(15,_32,_68,_0.04)] border-[1px] border-solid border-[rgba(201,169,110,0.15)]">
          <div className="text-center mb-[32px]">
            <h1 className="font-serif text-[2.5rem] text-[#0f2044] m-[0_0_8px_0]">
              Create Your Account
            </h1>
            <p className="text-[#6b7280] m-[0] text-[1rem] font-['DM_Sans',_sans-serif]">
              Join Avenora Estates and save properties you love.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {error && (
              <div className="p-[12px_16px] bg-[rgba(225,_29,_72,_0.05)] border-[1px] border-solid border-[rgba(225,_29,_72,_0.2)] rounded-[8px] text-[#E11D48] text-[0.9rem] font-['DM_Sans',_sans-serif]">
                {error}
                {error.includes('exists') && (
                   <div className="mt-[8px]">
                     <button type="button" onClick={() => navigate('/login')} className="bg-transparent border-none p-[0] text-[#0f2044] font-[600] cursor-pointer [text-decoration:underline]">
                       Login instead
                     </button>
                   </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="name" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Full Name
              </label>
              <input id="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="auth-input" />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Email Address
              </label>
              <input id="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="auth-input" />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="phone" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Phone Number
              </label>
              <input id="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9307147361" className="auth-input" />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="password" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password" className="auth-input w-[100%]"
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
            
            {/* Password checklist */}
            <div className="grid grid-cols-[1fr_1fr] gap-[8px] p-[12px_16px] bg-[#faf8f5] rounded-[8px] mt-[-4px]">
              <div className={`pwd-req ${passLength ? 'text-[#10B981]' : 'text-[#a0aec0]'}`} >
                <CheckCircle2 size={14} /> 8+ characters
              </div>
              <div className={`pwd-req ${passUpper ? 'text-[#10B981]' : 'text-[#a0aec0]'}`} >
                <CheckCircle2 size={14} /> Uppercase letter
              </div>
              <div className={`pwd-req ${passLower ? 'text-[#10B981]' : 'text-[#a0aec0]'}`} >
                <CheckCircle2 size={14} /> Lowercase letter
              </div>
              <div className={`pwd-req ${passNum ? 'text-[#10B981]' : 'text-[#a0aec0]'}`} >
                <CheckCircle2 size={14} /> Number
              </div>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="confirmPassword" className="text-[0.85rem] font-[600] text-[#0f2044] font-['DM_Sans',_sans-serif]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="auth-input"
              />
            </div>

            <label className="flex items-start gap-[12px] cursor-pointer mt-[8px]">
              <input type="checkbox" required className="w-[16px] h-[16px] mt-[4px] [accent-color:#c9a96e]" />
              <span className="text-[0.85rem] text-[#6b7280] font-['DM_Sans',_sans-serif] [line-height:1.5]">
                I agree to the{' '}
                <button type="button" onClick={() => navigate('/terms')} className="bg-transparent border-none p-[0] text-[#0f2044] font-[600] cursor-pointer [text-decoration:underline]">Terms & Conditions</button>
                {' '}and{' '}
                <button type="button" onClick={() => navigate('/privacy')} className="bg-transparent border-none p-[0] text-[#0f2044] font-[600] cursor-pointer [text-decoration:underline]">Privacy Policy</button>.
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading} className={`btn-gold w-[100%] p-[16px] rounded-[8px] mt-[12px] text-[1rem] justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            >
              {isLoading ? 'Creating Account...' : 'Create Account →'}
            </button>
          </form>

          <div className="text-center mt-[32px]">
            <span className="text-[0.95rem] text-[#6b7280] font-['DM_Sans',_sans-serif]">
              Already have an account?{' '}
            </span>
            <button
              onClick={() => navigate('/login')} className="bg-transparent border-none p-[0] text-[0.95rem] text-[#0f2044] cursor-pointer font-[700] font-['DM_Sans',_sans-serif]"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SignupPage;
