import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from '@/features/auth/context/AuthContext';

interface FavoritesContextType {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading: authLoading } = useAuth();
  
  const [favorites, setFavorites] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Sync state with auth changes
  useEffect(() => {
    if (authLoading) return; // Wait for auth to figure out its state

    const LOCAL_KEY = 'avenora-favorites';
    const USER_KEY = user ? `avenora-favorites-${user.id}` : LOCAL_KEY;

    try {
      const localStored = localStorage.getItem(LOCAL_KEY);
      const localFavs = localStored ? JSON.parse(localStored) : [];

      if (user) {
        // User logged in, check user specific favorites
        const userStored = localStorage.getItem(USER_KEY);
        const userFavs = userStored ? JSON.parse(userStored) : [];

        // Merge local favorites into user favorites if any
        if (localFavs.length > 0) {
          const merged = Array.from(new Set([...userFavs, ...localFavs]));
          setFavorites(merged);
          // Clear local favorites since they are now merged
          localStorage.removeItem(LOCAL_KEY);
        } else {
          setFavorites(userFavs);
        }
      } else {
        // Logged out
        setFavorites(localFavs);
      }
    } catch (e) {
      console.error('Failed to load favorites', e);
      setFavorites([]);
    } finally {
      setIsInitialized(true);
    }
  }, [user, authLoading]);

  // Save changes
  useEffect(() => {
    if (!isInitialized) return;
    const key = user ? `avenora-favorites-${user.id}` : 'avenora-favorites';
    localStorage.setItem(key, JSON.stringify(favorites));
  }, [favorites, user, isInitialized]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const isFavorite = (id: number) => favorites.includes(id);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        showToast('Property removed from favorites');
        return prev.filter(fId => fId !== id);
      } else {
        showToast('✓ Property saved to favorites');
        return [...prev, id];
      }
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(fId => fId !== id));
    showToast('Property removed from favorites');
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      clearFavorites,
      favoritesCount: favorites.length
    }}>
      {children}
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-[24px] right-[24px] bg-[#0f2044] text-[#fff] p-[12px_24px] rounded-[8px] text-[0.9rem] shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-[9999] font-['DM_Sans',_sans-serif] [animation:toast-slide-up_0.3s_ease-out]">
          {toastMessage}
          
        </div>
      )}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
