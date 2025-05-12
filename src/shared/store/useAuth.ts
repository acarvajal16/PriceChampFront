import { UserProfile } from '@/interfaces/Api';
import { api, ApiClient } from '@/services/ApiClient';
import { create } from 'zustand';

export type useAuthType = {
  user: UserProfile | null,
  token: string | null,
  favoritos: Record<string, boolean>,
  setUser: (token: string) => void,
  getToken: () => string | null,
  clearUser: () => void,
  addFavorite: (id: string) => void,
  removeFavorite: (id: string) => void,
}

const useAuth = create<useAuthType>((set, get) => ({
  user: null,
  token: null,
  favoritos: {},
  setUser: (token) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    set({ token });

    try {
      
      ApiClient.getProfile()
        .then((res) => {

          const favoritos: Record<string, boolean> = {};
          res.favorites.forEach(res => {
            favoritos[res] = true;
          });

          set({ favoritos, user: res })
        });

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
  },

  addFavorite: (id) => {
    set(s => ({
      favoritos: ({...s.favoritos, [id]: true})
    }))
  },

  removeFavorite: (id) => {
    set(s => ({
      favoritos: ({...s.favoritos, [id]: false})
    }))
  }
}));

export default useAuth;
