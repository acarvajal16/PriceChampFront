import { routes } from "@/app/router/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");

    return (
        <form className="">
            <label
                htmlFor="default-search"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
                
            </label>
            <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Ej: Zapatos deportivos"
                    required
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-ardilla hover:bg-gray-500  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
                    onClick={() => navigate(`${routes.busqueda}?q=${busqueda}`)}
                >
                    Buscar
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
