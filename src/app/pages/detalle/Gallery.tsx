//import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
//import axios from "axios";

interface GalleryProps {
    productName: string;
}

const Gallery: React.FC<GalleryProps> = () => {
    const [image, setImage] = useState(0);
    const [imagenes, _setImages] = useState<string[]>([]);
    const [_loading, _setLoading] = useState(true);

    /*useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/producto/ImagenesDetalle/${productName}`
                );

                if (response.status === 201) {
                    const respuesta: { imagenBase64: string }[] = response.data;
                    const imagenes = respuesta
                        .slice(0, 4)
                        .map((img) => img.imagenBase64);

                    setImages(imagenes);
                } else {
                    console.error(
                        "Error al obtener las imágenes: Código de estado",
                        response.status
                    );
                }
            } catch (error) {
                console.error("Error al obtener las imágenes:", error);
            } finally {
                setLoading(false);
            }
        };

        if (productName) fetchImages();
    }, [productName]); */

    return (
        <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="-mx-4 flex flex-col md:flex-row">
                <div className="px-4 md:flex-1">
                    <div className="mb-4 h-64 rounded-lg bg-gray-100 md:h-80">
                        <div className="flex h-full items-center justify-center">
                            {imagenes[image] ? (
                                <img
                                    className="max-h-full max-w-full object-contain"
                                    src={`data:image/jpeg;base64,${imagenes[image]}`}
                                    alt="Imagen destacada"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                    
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="-mx-2 mb-4 flex">
                        {imagenes.map((img, i) => (
                            <div key={i} className="flex-1 px-2">
                                <button
                                    className={`flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 p-2 focus:outline-none ${image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                                        }`}
                                    onClick={() => setImage(i)}
                                >
                                    <img
                                        className="max-h-full max-w-full object-cover"
                                        src={`data:image/png;base64,${img}`}
                                        alt={`Vista previa ${i + 1}`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
