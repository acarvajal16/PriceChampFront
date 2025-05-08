import { routes } from "@/app/router/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");

    return (
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <form className="max-w-md mx-auto" onSubmit={(e) => {
                e.preventDefault();
                navigate(`${routes.busqueda}?q=${busqueda}`);
            }}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className=" w-[400px] relative">
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
                        className="w-[400px] block p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Busca y compara..."
                        required
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
