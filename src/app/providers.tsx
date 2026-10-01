import type { ReactNode } from 'react';
import { AuthProvider } from '@/features/auth/context/AuthContext';
import { FavoritesProvider } from '@/features/favorites/context/FavoritesContext';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
