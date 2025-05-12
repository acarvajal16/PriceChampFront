import { ProductCard } from "@/shared/components/ProductCard";
import CategoryFilter from "./CategoryFilter";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiClient } from "@/services/ApiClient";
import { Producto } from "@/interfaces/Api";


function Busqueda() {
    
    const [get] = useSearchParams();
    const q = get.get("q");
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {

        ApiClient.getProductos(q ?? "")
            .then(res => {
                setProductos([...res.productos]);
            });

    }, [get]);

    return (
        <div className="flex relative justify-center items-center w-screen h-full dark:bg-gray-600 ">
            <div className="bg-white flex place-self-start m-4 mt-10 h-96 w-[160px] text-center rounded-lg dark:bg-gray-800">
                <CategoryFilter/>
            </div>
            <div className="flex-1 h-full py-10 flex flex-col gap-2 ">
                <div className="h-10 py-1 px-1.5 mr-4  font-radiobold  text-xl dark:text-white">
                    Resultados de la búsqueda "{q}"
                </div>
                <div className="p-4 h-full grid grid-cols-4 gap-y-6 bg-gray-200 dark:bg-gray-800  rounded-md mr-7">
                    {
                        productos.map(producto => (
                            <div>
                                <ProductCard producto={producto} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Busqueda;