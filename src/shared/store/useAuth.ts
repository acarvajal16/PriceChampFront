import { IUser } from '@/interfaces/IUser';
import { api } from '@/services/ApiClient';
import { create } from 'zustand';

export type useAuthType = {
  user: IUser | null,
  token: string | null,
  setUser: (token: string) => void,
  getToken: () => string | null,
  clearUser: () => void
}

const useAuth = create<useAuthType>((set, get) => ({
  user: null,
  token: null,
  
  setUser: (token) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      //const decoded = decodeJwt(token);

      const user: IUser = {
        email: token
      }

      set({ token, user });
    } catch (error) {
      console.error('Invalid token format', error);
      set({ token, user: null });
    }
  },

  getToken: () => {
    const token = localStorage.getItem('token');
    if(token) {
      get().setUser(token);
    }
    return token
  },
  
  clearUser: () => {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = "";
    set({ user: null, token: null });
  }
}));

export default useAuth;
