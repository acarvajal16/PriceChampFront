import { routes } from "@/app/router/routes";
import { Producto } from "@/interfaces/Api";
import { ApiClient } from "@/services/ApiClient";
import CarouselWithIndicators from "@/shared/components/CarouselWithIndicators";
import { ProductCard } from "@/shared/components/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");

    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {

        ApiClient.getRandomProductos()
            .then(res => {
                console.log(res);
                setProductos([...res.productos]);
            });

    }, []);

    return (
        <div className="bg-white h-full w-full">
            <div className="flex fade-b-[19%] mb-2 ">
                <section className="w-full bg-center bg-cover bg-no-repeat bg-gradient bg-gray-700 bg-blend-multiply">
                    <div className="px-10 mx-auto max-w-screen-xl text-center py-16 lg:py-40">
                        <h1 className="mb-6 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                            ¿Pagando de más por ropa deportiva?
                        </h1>
                        <p className="mb-2.5 text-lg font-lato text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Compra inteligente, compra fácil.
                        </p>
                        <p className="mb-6 text-lg font-extralight text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Con Price Champ puedes comparar precios de las mejores marcas de ropa deportiva en un solo lugar. Encuentra las mejores ofertas y descuentos
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <form className="max-w-md mx-auto" onSubmit={(e) => {
                                e.preventDefault();
                                navigate(`${routes.busqueda}?q=${busqueda}`);
                            }}>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                    Search
                                </label>
                                <div className=" w-[300px] relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="w-[300px] block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Busca y compara..."
                                        required
                                        value={busqueda}
                                        onChange={(e) => setBusqueda(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Ir
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div className="flex flex-col bg-cover bg-blur bg-center w-full h-[600px]">
                <div className="flex justify-center">
                    <h1 className="font-radiobold text-3xl my-2 p-10">Productos Destacados</h1>
                </div >
                <div className="w-full flex flex-nowrap overflow-x-auto scrollbar-hide scroll-smooth">
                    {
                        productos.map(((producto) => (
                            <div className="flex-1 flex justify-center items-center">
                                <ProductCard producto={producto} />
                            </div>
                        )))
                    }
                </div>
            </div>
            <div className="relative w-full h-[340px] ml-7">
                <img src="RegisterBanner.png" alt="Seccion Registrar" />
                <button onClick={() => navigate(routes.register)} className="absolute bottom-20 right-50 cursor-pointer  bg-white rounded-3xl  py-1 px-4 hover:bg-black hover:text-white focus:ring-white ">
                    <p className=" font-radiobold ">
                        Únete aquí
                    </p>
                </button>
            </div>
            <Test />
            <div>
                <CarouselWithIndicators
                    images={[
                        "Seccion Dctos.png",
                        "Seccion Dctos.png"
                    ]}
                ></CarouselWithIndicators>
            </div>
        </div>
    )
}
// images={["Seccion Dctos.png"]}
const Test = () => {
    return (
        <div>

        </div>
    )
}

export default Home;