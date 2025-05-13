import { Producto } from "@/interfaces/Api";
import { ApiClient } from "@/services/ApiClient";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Emociones } from "./Emociones";
const Detalle = () => {

    const [params] = useSearchParams();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [producto, setProducto] = useState<Producto | null>(null);

    useEffect(() => {
        const nombreProducto = params.get("producto");
        if(nombreProducto) {
            ApiClient.getProducto(nombreProducto)
                .then((prod) => {
                    setProducto(prod);
                });
        }
    }, [params]);

    return (
        <div className="flex justify-center p-8 dark:bg-gray-600">
            <div className="bg-white dark:bg-gray-800 h-[550px] w-[960px] rounded-xl">
                <div className="container flex justify-center p-6 mt-2 ">
                    <div className="bg-gray-200 h-[470px] w-[580px] rounded-lg m-1">
                        <div className="justify-center">
                            {
                                producto?.imagen && (
                                    <img className=" object-cover w-full h-full rounded-md  " src={producto.imagen} ></img>
                                )
                            }
                        </div>
                    </div>
                    <div className="w-[700px] ml-5  inline-flex flex-col">
                        <strong className="text-xl pb-2 dark:text-white">{producto?.producto}</strong>
                        <div className="flex items-center">
                            {[...Array(4)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-300 ml-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                            <svg
                                className="w-5 h-5 ml-1 text-gray-300 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <div className="py-6">
                            <span className="font-bold text-base dark:text-white">Descripción</span>
                            <br />
                            <p className="dark:text-white">{producto?.producto}</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="inline-block">
                                <span className="font-bold dark:text-white">Comprar en:</span>
                                <div className="flex ">
                                    <div className=" bg-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 w-[200px] mr-2 dark:bg-gray-500  dark:text-white rounded-xs">
                                        {producto?.from == "mercadolibre" && (
                                            <a className="font-semibold py-1.5  dark:text-white" href={producto.enlace}>Mercadolibre</a>
                                        )}
                                    </div>
                                    <div className=" bg-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 w-[150px] dark:bg-gray-500 rounded-xs flex justify-center">
                                        {producto?.from == "falabella" && (
                                            <a className="font-semibold py-1.5  dark:text-white" href={producto.enlace}>Falabella</a>
                                        )}
                                    </div>
                                </div>

                                <Emociones/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detalle;