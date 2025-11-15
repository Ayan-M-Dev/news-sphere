import axiosInstance from '@/lib/api/client';
import { ENDPOINTS } from '@/lib/endpoints';
import {
  AuthResponse,
  LoginPayload,
  User,
} from '@/types';
import Cookies from 'js-cookie';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'sonner';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  
  login: (data: LoginPayload) => Promise<void>;
  logout: () => void;
  getCurrentUser: () => Promise<User | null>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      login: async (data: LoginPayload) => {
        set({ isLoading: true });
        try {
          const response = await axiosInstance.post<AuthResponse>(ENDPOINTS.login, data);
          
          toast.promise(
            Promise.resolve(response),
            {
              loading: 'Logging in...',
              success: () => {
                const { user, token } = response.data;
                set({ user });
                Cookies.set('token', token);
                window.location.href = '/dashboard';
                return 'Login successful!';
              },
              error: (error: any) =>
                error?.response?.data?.message ||
                'Failed to login. Please try again.',
            }
          );
        } catch (error: any) {
          const errorMessage = error?.response?.data?.message || 
                              error?.message || 
                              'Failed to login. Please try again.';
          
          if (errorMessage.includes('CORS') || errorMessage.includes('Access-Control')) {
            toast.error('CORS Error: Backend needs to allow requests from http://localhost:3000');
          } else {
            toast.error(errorMessage);
          }
          set({ isLoading: false });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ user: null });
        Cookies.remove('token');
        window.location.href = '/';
      },

      getCurrentUser: async () => {
        try {
          const response = await axiosInstance.get<User>(ENDPOINTS.currentUser);
          const user = response.data;
          set({ user });
          return user;
        } catch (error: any) {
          if (process.env.NODE_ENV === 'development') {
            if (!error.response) {
              console.warn('Network error fetching current user - backend may not be running:', {
                message: error.message,
                code: error.code,
                baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
              });
            } else {
              console.error('Failed to fetch current user:', error.response?.data || error.message);
            }
          }
          return null;
        }
      },
    }),
    {
      name: 'news-sphere-auth-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => key !== 'isLoading'
          )
        ) as Partial<AuthState>,
    }
  )
);
