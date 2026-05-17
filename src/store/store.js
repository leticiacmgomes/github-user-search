import { create } from "zustand";

export const useStore = create((set) => ({
  user: "",
  profileData: null,
  error: null,
  setUser: (value) => set({ user: value }),
  setProfileData: (data) => set({ profileData: data }),
  setError: (error) => set({ error: error }),
}));
