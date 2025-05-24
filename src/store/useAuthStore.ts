import { create } from "zustand";

interface AuthState {
  id: number | null;
  email: string | null;
  name: string | null;
  profileImageUrl : string | null;
  profileMessage: string | null;
  setUser: (user: { id: number; email: string; name: string; profileImageUrl: string; profileMessage: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  id: null,
  email: null,
  name: null,
  profileImageUrl: null,
  profileMessage: null,
  setUser: (user) => set(user),
  logout: () =>
    set({ 
      id: null,
      email: null,
      name: null,
      profileImageUrl: null,
      profileMessage: null
    }),
}));
