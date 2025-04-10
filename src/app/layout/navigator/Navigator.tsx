import { routes } from "@/app/router/routes";
import { Button } from "@/shared/shadcn/ui/button";
import useAuth from "@/shared/store/useAuth";
import { useNavigate } from "react-router-dom";
import Logo from "/LogoTexto.svg"
import SearchBar from "./SearchBarMain";

function Navigator() {

    const navigate = useNavigate();
    
    const { user, clearUser } = useAuth();

    const handleLogOut = () => {
        clearUser();
    }
    
    return (
        <div className="w-full h-full bg-primary-color flex">
            <div className="flex justify-center items-center p-4">
                <img src={Logo} className="w-24 h-24" alt='mySvgImage' />
            </div>
            {
                user ? (
                    <>
                        <Button onClick={() => navigate(routes.home)}>Home</Button>
                        <Button onClick={() => navigate(routes.profile)}>Perfil</Button>
                        <Button onClick={() => navigate(routes.ventas)}>Ventas</Button>
                        <Button onClick={handleLogOut}>Logout</Button>
                    </>
                ) : (
                    <>
                        <div className="w-full flex justify-between p-4 text-white font-bold">
                            <div className="w-full h-full flex items-center">
                                <SearchBar/>
                            </div>
                            <div className="flex">
                                <div className="px-4">
                                    Categorías
                                </div>
                                <div className="pr-4">
                                    <img src="user.svg" alt="" className=" size-5" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navigator;