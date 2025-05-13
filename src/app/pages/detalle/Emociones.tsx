import EmocionesClient, { AnalizarResponse } from "@/services/EmocionesClient";
import { useState } from "react";

function EmocionesMensaje({ titulo, mensaje }: { titulo: string, mensaje: string }) {

    return (
        <div className="flex items-start gap-2.5">
            <img
                className="w-8 h-8 rounded-full"
                src="ai-lighter.svg"
                alt="AI"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-[1.5] p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-ss-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        BOT
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {titulo}
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {mensaje}
                </p>
            </div>
        </div>
    )
}

export function Emociones() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [texto, setTexto] = useState("");

    const [respuesta, setRespuesta] = useState<AnalizarResponse | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        EmocionesClient.analizarComentario({
            comentario: texto
        }).then((res) => {
            setRespuesta(res);
        });
    }

    return (
        <div className=" bg-gray-200 dark:bg-gray-600 p-3 rounded-md h-auto w-full my-5">
            <EmocionesMensaje titulo="" mensaje="Danos tu opinion de este producto" />
            <form className="flex items-end m-1.5 rounded-lg" onSubmit={handleSubmit}>
                <input
                    id=""
                    type="text"
                    name="User"
                    className=" ml-57 rounded-t-lg rounded-l-lg"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
            </form>
            {
                respuesta && (
                    <EmocionesMensaje titulo={respuesta.emocion} mensaje={respuesta.mensaje} />
                )
            }
        </div>
    )
} 