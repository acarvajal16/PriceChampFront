import { routes } from "@/app/router/routes";
import useAuth from "@/shared/store/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "/LogoTexto.svg"
import { useState } from "react";
import SearchBar from "./SearchBarMain";
import DMToggler from "@/shared/components/DMToggler";
import { ThemeProvider } from "@/context/ThemeContext";

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
                            <div className="flex items-center justify-center mr-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <img onClick={() => navigate(routes.profile)} className="h-6 hover:scale-110 hover:cursor-pointer" src="user.svg" alt="user" />
                            </div>
                            <div className="mx-2  cursor-pointer">
                                <ThemeProvider>
                                    <DMToggler/>
                                </ThemeProvider>
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
                            
                            <div className="flex items-center justify-center mr-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                {
                                    location.pathname == routes.home && (
                                        <button
                                            type="button"
                                            className=" flex text-nowrap text-xs  bg-white text-black hover:bg-black hover:text-white focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg mx-2  px-4 py-1 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white  cursor-pointer"
                                            onClick={() => navigate(routes.login)}
                                        >
                                            Iniciar Sesión
                                        </button>
                                    )
                                }
                            </div>
                            <div className="mr-2 p-2 mb-1 cursor-pointer">
                                <ThemeProvider>
                                    <DMToggler/>
                                </ThemeProvider>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navigator;