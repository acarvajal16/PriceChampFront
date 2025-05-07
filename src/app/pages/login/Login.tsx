//import { Button } from "@/components/ui/button";
import useAuth from "@/shared/store/useAuth";
import Logo from "/LogoTextoDark.svg"
import { routes } from "@/app/router/routes";
import { useState } from "react";
import { UserService } from "@/services/firebase/auth";
import Footer from "@/app/layout/footer/Footer";

export const Login = () => {

    //este
    const [user, setAddUser] = useState({
        email: "",
        password: ""
    });
    const { setUser } = useAuth();

    const handleLogin = async () => {
        UserService.Login(user.email, user.password)
            .then((email) => {
                console.log(email);
                if (email) {
                    setUser(email);
                }
            });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAddUser(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    return (
        <div>
            <div className="w-screen h-screen bg-cover bg-sports flex justify-center items-center">
                <div className="relative flex flex-col w-80 h-[350px] rounded-3xl bg-white/80 px-10" >
                    <div className=" h-20 pt-6 flex justify-center items-center relative ">
                        <div>
                            <img className="w-5 h-5 absolute left-0 top-1/2 transform -translate-y-1/2" src="arrow left.svg" alt="Previous" />
                        </div>
                        <img className=" w-40 " src={Logo} alt="Logo" />
                    </div>
                    <div className="w-full h-20 flex justify-center items-center">
                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="text-primary-color"><strong>Usuario</strong></label>
                            <input name="email" className="bg-white indent-2.5 h-10 rounded-md placeholder:text-gray" placeholder="Correo electrónico" style={{ boxShadow: "-1px 1px 7px gray" }} type="email" onChange={handleInputChange} />
                        </div> { /* el de arriba */}
                    </div>
                    <div className="w-full h-18">
                        <div className="w-full flex flex-col">
                            <label htmlFor="password" className="text-primary-color"><strong>Contraseña</strong></label>
                            <input name="password" className="bg-white indent-2.5 h-10 rounded-md placeholder:text-gray" placeholder="Contraseña" style={{ boxShadow: "-1px 1px 7px gray" }} type="password" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="w-full h-28">
                        <strong>
                            <a className="underline text-[12px] text-primary-color" href="">Olvidé mi contraseña</a>
                        </strong>
                        <div className="flex justify-center items-center py-3">
                            <button className="px-4 py-1 text-[14px] rounded-3xl bg-primary-color text-white hover:bg-blue-800" style={{ boxShadow: "-2px 2px 2px gray" }} onClick={handleLogin}>
                                Iniciar sesión
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <strong>
                                <a className="underline text-[12px] text-primary-color" href={routes.register}>¿No tienes cuenta? Regístrate aquí</a>
                            </strong>
                        </div>
                    </div>

                </div>
            </div>
            <div className="-mt-4 w-screen">
                <Footer></Footer>
            </div>
        </div>

    )
}



export default Login;