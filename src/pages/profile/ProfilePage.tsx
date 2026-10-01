import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { User as UserIcon, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';
import { useFavorites } from '@/features/favorites/context/FavoritesContext';

interface ProfilePageProps {
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfile, changePassword, isAuthenticated, isLoading } = useAuth();
  const { favoritesCount } = useFavorites();
  
  const [activeTab, setActiveTab] = useState<'profile' | 'edit' | 'security'>('profile');
  
  // Edit Profile State
  const [editData, setEditData] = useState({ name: '', phone: '' });
  const [editLoading, setEditLoading] = useState(false);
  const [editSuccess, setEditSuccess] = useState('');
  const [editError, setEditError] = useState('');

  // Password State
  const [pwdData, setPwdData] = useState({ current: '', new: '', confirm: '' });
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdSuccess, setPwdSuccess] = useState('');
  const [pwdError, setPwdError] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
    if (user) {
      setEditData({ name: user.name, phone: user.phone });
    }
  }, [user, isAuthenticated, isLoading]);

  if (isLoading || !user) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-[#FAF8F4]">
        <div className="text-[#08233F] font-['DM_Sans',_sans-serif]">Loading...</div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditError('');
    setEditSuccess('');
    setEditLoading(true);
    try {
      await updateProfile({ name: editData.name, phone: editData.phone });
      setEditSuccess('Profile updated successfully.');
      setTimeout(() => setActiveTab('profile'), 2000);
    } catch (err: any) {
      setEditError(err.message || 'Failed to update profile.');
    } finally {
      setEditLoading(false);
    }
  };

  const handlePwdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdError('');
    setPwdSuccess('');
    
    if (pwdData.new.length < 8) {
      setPwdError('New password must be at least 8 characters long.');
      return;
    }
    if (pwdData.new !== pwdData.confirm) {
      setPwdError('New passwords do not match.');
      return;
    }

    setPwdLoading(true);
    try {
      await changePassword(pwdData.current, pwdData.new);
      setPwdSuccess('Password changed successfully.');
      setPwdData({ current: '', new: '', confirm: '' });
    } catch (err: any) {
      setPwdError(err.message || 'Failed to change password.');
    } finally {
      setPwdLoading(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] min-h-[100vh] pb-[80px] pt-[72px]">
      {/* Header */}
      <div className="bg-[white] p-[48px_0] border-b-[1px] border-solid border-b-[rgba(201,169,110,0.15)]">
        <div className="max-w-[1000px] m-[0_auto] p-[0_24px] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-[24px]">
          <div className="w-[80px] h-[80px] rounded-[50%] bg-[#0f2044] text-[#c9a96e] flex items-center justify-center text-[2rem] font-[700] shadow-[0_4px_12px_rgba(15,32,68,0.1)]">
            {user.avatar ? (
              <img src={user.avatar} alt="Profile" className="w-[100%] h-[100%] rounded-[50%] object-cover" />
            ) : user.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="font-serif text-[2rem] text-[#0f2044] m-[0_0_4px_0]">{user.name}</h1>
            <p className="text-[#65758B] m-[0] font-['DM_Sans',_sans-serif]">
              Member since {new Date(user.createdAt).getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] m-[40px_auto] p-[0_24px] flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-stretch md:items-start [flex-wrap:wrap]">
        
        {/* Sidebar */}
        <div className="w-full md:w-[250px] bg-[white] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] overflow-hidden [flex-shrink:0]">
          <button 
            className={`w-full flex items-center gap-[12px] p-[16px_24px] bg-transparent text-left font-['DM_Sans',_sans-serif] text-[0.95rem] cursor-pointer transition-all duration-200 ${activeTab === 'profile' ? 'bg-[#faf8f5] text-[#c9a96e] font-[600] border-l-[3px] border-l-[#c9a96e] border-t-0 border-r-0 border-b-0 border-solid' : 'text-[#65758B] border-none hover:bg-[#faf8f5] hover:text-[#0f2044]'}`}
            onClick={() => setActiveTab('profile')}
          >
            <UserIcon size={18} /> Personal Info
          </button>
          <button 
            className={`w-full flex items-center gap-[12px] p-[16px_24px] bg-transparent text-left font-['DM_Sans',_sans-serif] text-[0.95rem] cursor-pointer transition-all duration-200 ${activeTab === 'security' ? 'bg-[#faf8f5] text-[#c9a96e] font-[600] border-l-[3px] border-l-[#c9a96e] border-t-0 border-r-0 border-b-0 border-solid' : 'text-[#65758B] border-none hover:bg-[#faf8f5] hover:text-[#0f2044]'}`}
            onClick={() => setActiveTab('security')}
          >
            <Settings size={18} /> Security
          </button>
          <button 
            className="w-full flex items-center gap-[12px] p-[16px_24px] bg-transparent text-[#65758B] border-none text-left font-['DM_Sans',_sans-serif] text-[0.95rem] cursor-pointer transition-all duration-200 hover:bg-[#faf8f5] hover:text-[#0f2044]"
            onClick={() => navigate('/favorites')}
          >
            <Heart size={18} /> Saved Properties ({favoritesCount})
          </button>
          <div className="m-[8px_0] border-t-[1px] border-solid border-t-[#E8E2D8]"></div>
          <button
            onClick={handleLogout} className="w-full flex items-center gap-[12px] p-[16px_24px] bg-transparent text-[#E11D48] border-none text-left font-['DM_Sans',_sans-serif] text-[0.95rem] cursor-pointer transition-all duration-200 hover:bg-[#faf8f5]"
          >
            <LogOut size={18} color="#E11D48" /> Logout
          </button>
        </div>

        {/* Content */}
        <div className="flex-[1] min-w-[300px]">
          
          {/* PROFILE VIEW */}
          {activeTab === 'profile' && (
            <div className="bg-[white] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] p-[20px] md:p-[32px]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[32px] gap-[12px] md:gap-0">
                <h2 className="font-serif text-[1.5rem] text-[#0f2044] m-[0]">Personal Information</h2>
                <button 
                  onClick={() => setActiveTab('edit')} className="bg-transparent border-none text-[#c9a96e] font-[600] cursor-pointer p-[0] font-['DM_Sans',_sans-serif]"
                >
                  Edit Profile
                </button>
              </div>
              
              <div className="grid grid-cols-[1fr] gap-[24px]">
                <div>
                  <div className="text-[0.85rem] text-[#65758B] mb-[4px]">Full Name</div>
                  <div className="text-[1rem] text-[#0f2044] font-[500]">{user.name}</div>
                </div>
                <div>
                  <div className="text-[0.85rem] text-[#65758B] mb-[4px]">Email Address</div>
                  <div className="text-[1rem] text-[#0f2044] font-[500]">{user.email}</div>
                </div>
                <div>
                  <div className="text-[0.85rem] text-[#65758B] mb-[4px]">Phone Number</div>
                  <div className="text-[1rem] text-[#0f2044] font-[500]">{user.phone}</div>
                </div>
              </div>
            </div>
          )}

          {/* EDIT PROFILE VIEW */}
          {activeTab === 'edit' && (
            <div className="bg-[white] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] p-[20px] md:p-[32px]">
              <h2 className="font-serif text-[1.5rem] text-[#0f2044] m-[0_0_32px_0]">Edit Profile</h2>
              
              {editError && <div className="p-[12px_16px] bg-[rgba(225,29,72,0.05)] border-[1px] border-solid border-[rgba(225,29,72,0.2)] rounded-[8px] text-[#E11D48] font-['DM_Sans',_sans-serif] text-[0.9rem] mb-[24px]">{editError}</div>}
              {editSuccess && <div className="p-[12px_16px] bg-[rgba(16,185,129,0.1)] border-[1px] border-solid border-[rgba(16,185,129,0.2)] rounded-[8px] text-[#10B981] font-['DM_Sans',_sans-serif] text-[0.9rem] mb-[24px] flex items-center gap-[8px] before:content-['✓'] before:font-bold">{editSuccess}</div>}

              <form onSubmit={handleEditSubmit} className="flex flex-col gap-[20px]">
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">Full Name</label>
                  <input type="text" className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] text-[#0f2044] outline-none transition-all duration-200 focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]" value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">Email Address (Read-only)</label>
                  <input type="email" value={user.email} readOnly className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] outline-none transition-all duration-200 bg-[#f8f9fa] text-[#65758B] [cursor:not-allowed]" />
                </div>
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">Phone Number</label>
                  <input type="tel" className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] text-[#0f2044] outline-none transition-all duration-200 focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]" value={editData.phone} onChange={e => setEditData({...editData, phone: e.target.value})} required />
                </div>
                <div className="flex flex-col sm:flex-row gap-[12px] mt-[12px]">
                  <button type="button" onClick={() => setActiveTab('profile')} className="p-[14px] bg-[white] border-[1px] border-solid border-[#E8E2D8] rounded-[8px] font-['DM_Sans',_sans-serif] text-[1rem] font-[600] text-[#0f2044] cursor-pointer transition-colors duration-200 hover:bg-[#faf8f5] flex-[1]">Cancel</button>
                  <button type="submit" disabled={editLoading} className="btn-navy p-[14px] rounded-[8px] flex-[1] justify-center">
                    {editLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SECURITY VIEW */}
          {activeTab === 'security' && (
            <div className="bg-[white] rounded-[16px] border-[1px] border-solid border-[#E8E2D8] p-[20px] md:p-[32px]">
              <h2 className="font-serif text-[1.5rem] text-[#0f2044] m-[0_0_32px_0]">Change Password</h2>
              
              {pwdError && <div className="p-[12px_16px] bg-[rgba(225,29,72,0.05)] border-[1px] border-solid border-[rgba(225,29,72,0.2)] rounded-[8px] text-[#E11D48] font-['DM_Sans',_sans-serif] text-[0.9rem] mb-[24px]">{pwdError}</div>}
              {pwdSuccess && <div className="p-[12px_16px] bg-[rgba(16,185,129,0.1)] border-[1px] border-solid border-[rgba(16,185,129,0.2)] rounded-[8px] text-[#10B981] font-['DM_Sans',_sans-serif] text-[0.9rem] mb-[24px] flex items-center gap-[8px] before:content-['✓'] before:font-bold">{pwdSuccess}</div>}

              <form onSubmit={handlePwdSubmit} className="flex flex-col gap-[20px]">
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">Current Password</label>
                  <input type="password" required className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] text-[#0f2044] outline-none transition-all duration-200 focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]" value={pwdData.current} onChange={e => setPwdData({...pwdData, current: e.target.value})} />
                </div>
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">New Password</label>
                  <input type="password" required className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] text-[#0f2044] outline-none transition-all duration-200 focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]" value={pwdData.new} onChange={e => setPwdData({...pwdData, new: e.target.value})} />
                </div>
                <div>
                  <label className="block font-['DM_Sans',_sans-serif] text-[0.85rem] font-[600] text-[#0f2044] mb-[6px]">Confirm New Password</label>
                  <input type="password" required className="w-full p-[12px_16px] h-[48px] border-[1px] border-solid border-[#E8E2D8] rounded-[10px] font-['DM_Sans',_sans-serif] text-[1rem] text-[#0f2044] outline-none transition-all duration-200 focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]" value={pwdData.confirm} onChange={e => setPwdData({...pwdData, confirm: e.target.value})} />
                </div>
                <button type="submit" disabled={pwdLoading} className="btn-navy mt-[12px] p-[14px] rounded-[8px] justify-center">
                  {pwdLoading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>

      
    </div>
  );
};

export default ProfilePage;
