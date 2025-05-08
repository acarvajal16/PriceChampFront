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

export interface UserProfile {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;
    metadata: {
        createdAt: string;
        lastSignIn: string;
    };
    searchHistory: string[];
    favorites: string[];
}

export interface Producto {
    imagen: string 
    precio: string
    producto: string
}

export interface ProductosResponse {
    productos: Producto[];
}

export interface SearchHistoryResponse {
    searchHistory: string[];
}

export interface FavoritesResponse {
    favorites: string[];
}
