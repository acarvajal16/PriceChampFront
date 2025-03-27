//import { Button } from "@/components/ui/button";
import useAuth from "@/shared/store/useAuth";
import Logo from "/LogoTextoDark.svg"
import { routes } from "@/app/router/routes";
import { useState } from "react";
import { UserService } from "@/services/UserService"

export const Login = () => {

    //este
    const [user, setAddUser] = useState({
        email: "",
        password: ""
    });
    const { setUser } = useAuth();

    const handleLogin = async () => {
        console.log(user)

        const token = await UserService.Login(user.email, user.password);

        setUser(token)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setAddUser(p => ({...p, [e.target.name]: e.target.value}));
    }

    return (
        <div className="w-screen h-screen bg-cover bg-sports flex justify-center items-center">

            <form className="relative flex flex-col w   -96 h-[380px] rounded-3xl bg-white bg-opacity-80 px-10" style={{ boxShadow: "-2px 2px 5px gray" }}>
                <div className="flex-1 ">
                    <img className=" w-24 h-24 " src={Logo} alt="Logo" />
                </div>
                <div className="w-full h-24 flex justify-center items-center">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className="text-primary-color"><strong>Usuario</strong></label>
                        <input name="email" className="indent-2.5 bg-[length:1.5rem] bg-[10px] bg-user bg-no-repeat h-12 rounded-md placeholder:text-primary-color" placeholder="Correo electrónico" style={{ boxShadow: "-2px 2px 2px gray" }} type="email" onChange={handleInputChange} />
                    </div> { /* el de arriba */}
                </div>
                <div className="w-full h-24">
                    <div className="w-full flex flex-col">
                        <label htmlFor="password" className="text-primary-color"><strong>Contraseña</strong></label>
                        <input name="password" className="indent-2.5 bg-[length:1.5rem] bg-[10px] bg-lock bg-no-repeat h-12 rounded-md placeholder:text-primary-color" placeholder="Contraseña" style={{ boxShadow: "-2px 2px 2px gray" }} type="password" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="w-full h-28  ">
                    <strong>
                        <a className="underline text-[12px] text-primary-color" href="">Olvidé mi contraseña</a>
                    </strong>
                    <div className="flex justify-center items-center">
                        <button className="w-28 h-8 text-[14px] rounded-3xl bg-primary-color text-white" style={{ boxShadow: "-2px 2px 2px gray" }} onClick={handleLogin}>
                            Iniciar sesión
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <strong>
                            <a className="underline text-[12px] text-primary-color" href={routes.register}>¿No tienes cuenta? Regístrate aquí</a>
                        </strong>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default Login;