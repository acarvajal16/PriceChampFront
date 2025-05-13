// apiClient.ts
import axios from 'axios';

export interface AnalizarPayload {
    comentario: string;
}

export interface AnalizarResponse {
    comentario: string;
    emocion: string;
    confianza: number;
    estrellas: number;
    mensaje: string;
}

const apiEmociones = axios.create({ baseURL: "http://localhost:5000" });

class EmocionesClient {

    static async analizarComentario(data: AnalizarPayload): Promise<AnalizarResponse> {
        try {
            const response = await apiEmociones.post('/analizar', data);
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.error || 'Error al analizar el comentario');
        }
    }
}

export default EmocionesClient;
