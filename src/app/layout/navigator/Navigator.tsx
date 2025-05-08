import { routes } from "@/app/router/routes";
import useAuth from "@/shared/store/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "/LogoTexto.svg"
import { useState } from "react";
import SearchBar from "./SearchBarMain";



function Navigator() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { user } = useAuth();

    const location = useLocation();

    return (
        <div className="w-full h-full bg-primary-color flex">
            <div className="flex justify-center items-center p-4 cursor-pointer">
                <img onClick={() => navigate(routes.home)} src={Logo} className="m-1.5 pl-3 w-32 h-32" alt='mySvgImage' />
            </div>
            {
                user ? (
                    
                    <>
                        <div className="w-full flex justify-between items-center p-4 text-white font-bold">
                        <div className="w-full h-full flex items-center">
                            {
                                location.pathname !== routes.home && (
                                    <SearchBar/>
                                )
                            }
                            </div>
                            <div className="flex items-center justify-center mr-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <img onClick={() => navigate(routes.profile)} className="size-10 hover:scale-110 hover:cursor-pointer" src="user.svg" alt="user" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full flex justify-between items-center p-4 text-white font-bold">
                        <div className="w-full h-full flex items-center">
                            {
                                location.pathname !== routes.home && (
                                    <SearchBar/>
                                )
                            }
                            </div>
                            <div className="flex items-center justify-center mr-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                {
                                    location.pathname == routes.home && (
                                        <button
                                            type="button"
                                            className=" flex text-nowrap text-xs  bg-white text-black hover:bg-black hover:text-white focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg mx-2  px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                                            onClick={() => navigate(routes.login)}
                                        >
                                            Iniciar Sesión
                                        </button>
                                    )
                                }
                                
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-expanded={isMenuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navigator;