export interface RegisterResponse {
    uid: string;
    token: string;
}

export interface LoginResponse {
    uid: string;
    idToken: string;
    refreshToken: string;
    expiresIn: string;
}

export type HistoryQ = {fecha: Date, q: string}

export interface UserProfile {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;
    metadata: {
        createdAt: string;
        lastSignIn: string;
    };
    searchHistory: HistoryQ[];
    favorites: string[];
}

export interface Producto {
    enlace: string
    imagen: string 
    precio: string
    producto: string
    from: string
}

export interface ProductosResponse {
    productos: Producto[];
}

export interface SearchHistoryResponse {
    searchHistory: HistoryQ[];
}

export interface FavoritesResponse {
    favorites: string[];
}
