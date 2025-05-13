import { FavoritesResponse, LoginResponse, Producto, ProductosResponse, RegisterResponse, SearchHistoryResponse, UserProfile } from '@/interfaces/Api';
import axios from 'axios';

export const api = axios.create({ baseURL: "http://localhost:3000" });

export class ApiClient {

    static async register(nombre: string, email: string, password: string): Promise<RegisterResponse> {
        const { data } = await api.post<RegisterResponse>('/api/register', { nombre, email, password });
        return data;
    }

    static async login(email: string, password: string): Promise<LoginResponse> {
        const { data } = await api.post<LoginResponse>('/api/login', { email, password });
        return data;
    }

    static async getProfile(): Promise<UserProfile> {
        const { data } = await api.get<UserProfile>('/api/users/me');
        return data;
    }

    static async getProductos(q?: string, source?: 'falabella' | 'mercadolibre'): Promise<ProductosResponse> {
        const { data } = await api.get<ProductosResponse>('/api/productos', {
            params: {
                q,
                source: source ?? ""
            }
        });
        return data;
    }

    static async getRandomProductos(): Promise<ProductosResponse> {
        const { data } = await api.get<ProductosResponse>('/api/productos/random');
        return data;
    }

    static async getProducto(nombre: string): Promise<Producto> {
        const { data } = await api.get<Producto>(`/api/productos/${nombre}`);
        return data;
    }

    static async createProducto(producto: Producto): Promise<Producto> {
        const { data } = await api.post<Producto>('/api/productos', producto);
        return data;
    }

    static async updateProducto(id: string, producto: Partial<Producto>): Promise<Producto> {
        const { data } = await api.put<Producto>(`/api/productos/${id}`, producto);
        return data;
    }

    static async deleteProducto(id: string): Promise<{ message: string }> {
        const { data } = await api.delete(`/api/productos/${id}`);
        return data;
    }

    static async saveSearchQuery(query: string): Promise<SearchHistoryResponse> {
        const { data } = await api.post<SearchHistoryResponse>('/api/search-history', {
            searchQuery: query
        });
        return data;
    }

    static async getSearchHistory(): Promise<SearchHistoryResponse> {
        const { data } = await api.get<SearchHistoryResponse>('/api/search-history');
        return data;
    }

    static async addFavorite(productId: string): Promise<FavoritesResponse> {
        const { data } = await api.post<FavoritesResponse>('/api/favorites', { productId });
        return data;
    }

    static async getFavorites(): Promise<FavoritesResponse> {
        const { data } = await api.get<FavoritesResponse>('/api/favorites');
        return data;
    }

    static async removeFavorite(productId: string): Promise<FavoritesResponse> {
        const { data } = await api.delete<FavoritesResponse>(`/api/favorites/${productId}`);
        return data;
    }
}
