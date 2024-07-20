// store/authStore.ts
import {create} from 'zustand';
import {AuthState, User} from '../scripts/interfaces/interfaces'

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isGuest: true,
  user: null,

  login: (user: User) => set({ isAuthenticated: true, isGuest: false, user }),
  logout: () => set({ isAuthenticated: false, isGuest: true, user: null }),
  guestCheckout: () => set({ isAuthenticated: false, isGuest: true, user: null }),
}));
