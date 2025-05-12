import { routes } from "@/app/router/routes";
import { ApiClient } from "@/services/ApiClient";
import { UserService } from "@/services/firebase/auth";
import useAuth from "@/shared/store/useAuth";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {

    const setUser = useAuth(s => s.setUser);
    const navigate = useNavigate();

    const [formData, setAddUser] = useState<{ [key: string]: string }>({
        nombre_usuario: '',
        apellido_usuario: '',
        //idUsuario: '',
        correo: '',
        //idRol: '2',
        password: '',
        confirmar_contraseña: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    useEffect(() => {
        // Verificar si las contraseñas coinciden
        setPasswordsMatch(formData.password === formData.confirmar_contraseña);
    }, [formData.password, formData.confirmar_contraseña]);

    // Función para manejar el cambio en la aceptación de términos
    const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTermsAccepted(e.target.checked);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validar que todos los campos obligatorios estén completos
        if (!formData.nombre_usuario || !formData.apellido_usuario || !formData.correo || !formData.password || !formData.confirmar_contraseña) {
            alert('Por favor complete todos los campos obligatorios');
            return;
        }

        // Verificar si las contraseñas coinciden
        if (!passwordsMatch) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const nombre = `${formData['nombre_usuario']} ${formData['apellido_usuario']}`
        ApiClient.register(nombre, formData['correo'], formData['password'])
            .then((res) => {
                if(res.token) {
                    setUser(res.token);
                }
            });
    };


    function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setAddUser(p => ({...p, [e.target.name]: e.target.value}));
    }

    return (
        <div className="w-screen h-screen bg-cover bg-sports flex justify-center items-center">
            <div className="relative flex flex-col w-[600px] min-h-[400px] rounded-3xl bg-white/80 px-10">
                <div className="pt-6">
                    <button
                        onClick={() => navigate(routes.login)}
                        className="cursor-pointer absolute top-6 left-2 w-6 h-6 pl-1"
                    >
                        <img className="w-full h-full" src="arrow left.svg" alt="Back to log in" />
                    </button>
                </div>
                <div className="cursor-pointer h-20 flex justify-center items-center">
                    <img onClick={()=> navigate(routes.home)} className="max-h-full" src="LogoTextoDark.svg" />
                </div>
                {/* Contenido del formulario */}
                <div className="">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-3 w-full">
                        <div className="flex flex-col pr-2">
                            <div className="flex flex-col pb-2">
                                <label htmlFor="nombre_usuario" className="mb-1 text-sm text-black"><strong>Nombres</strong></label>
                                <input
                                    type="text"
                                    name="nombre_usuario"
                                    id="nombre_usuario"
                                    value={formData.nombre_usuario}
                                    onChange={handleInputChange}
                                    className="indent-2.5 bg-white h-8 w-full rounded-md placeholder:text-gray shadow-gray-400 shadow-md"
                                    placeholder="Nombre(s)"
                                    //style={{ boxShadow: "-2px 2px 9px gray" }}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label htmlFor="apellido_usuario" className="mb-1 text-sm text-black"><strong>Apellidos</strong></label>
                                <input
                                    type="text"
                                    name="apellido_usuario"
                                    id="apellido_usuario"
                                    value={formData.apellido_usuario}
                                    onChange={handleInputChange}
                                    className="indent-2.5 bg-white h-8 w-full rounded-md placeholder:text-gray shadow-gray-400 shadow-md"
                                    placeholder="Apellido(s)"
                                    //style={{ boxShadow: "-2px 2px 9px gray" }}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label htmlFor="correo_electronico" className="mb-1 text-sm text-black"><strong>Correo Electrónico</strong></label>
                                <input
                                    type="email"
                                    name="correo"
                                    id="correo_electronico"
                                    value={formData.correo}
                                    onChange={handleInputChange}
                                    className="indent-2.5 bg-white h-8 w-full rounded-md placeholder:text-gray shadow-gray-400 shadow-md"
                                    placeholder="correo@ejemplo.com"
                                    //style={{ boxShadow: "-2px 2px 9px gray" }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pb-2">
                            <div className="flex flex-col pb-2">
                                <label htmlFor="contraseña" className="mb-1 text-sm text-black"><strong>Contraseña</strong></label>
                                <input
                                    type="password"
                                    name="password"
                                    id="contraseña"
                                    //isPasswordInput={true}
                                    //hasError={!passwordsMatch}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="indent-2.5 bg-white h-8 w-full rounded-md placeholder:text-gray shadow-gray-400 shadow-md"
                                    placeholder="Contraseña"
                                    //style={{ boxShadow: "-2px 2px 9px gray" }}
                                />
                            </div>
                            <div className="flex flex-col pb-2">
                                <label htmlFor="confirmar_contraseña" className="mb-1 text-sm text-black"><strong>Confirmar Contraseña</strong></label>
                                <input
                                    type="password"
                                    name="confirmar_contraseña"
                                    id="confirmar_contraseña"
                                    //isPasswordInput={true}
                                    //hasError={!passwordsMatch}
                                    value={formData.confirmar_contraseña}
                                    onChange={handleInputChange}
                                    className="indent-2.5 bg-white h-8 w-full rounded-md placeholder:text-gray shadow-gray-400 shadow-md"
                                    placeholder="Confirmar Contraseña"
                                    //style={{ boxShadow: "-2px 2px 9px gray" }}

                                />
                            </div>

                            {!passwordsMatch && (
                                <div className="text-red-600 text-xs mt-1 mb-4">Las contraseñas no coinciden</div>
                            )}

                            <div className="w-full h-10">
                                {/* Contenido adicional */}
                                <div className="col-span-2 flex text-[8px] mb-4">
                                    <div className="w-6 flex justify-center items-center">
                                        <input
                                            className="mr-2 scale-90"
                                            type="checkbox"
                                            checked={termsAccepted}
                                            onChange={handleTermsChange}
                                        />
                                    </div>
                                    <span className="text-primary-color">
                                        Acepto los <span className="text-black font-bold">Términos y Condiciones</span> y Autorizo el <span className="text-black font-bold">Tratamiento de mis Datos Personales</span> de PriceChamp S.A
                                    </span>
                                </div>
                            </div>


                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="w-full h-14 flex justify-center items-center">
                                <button
                                    type="submit"
                                    className={`w-28 h-8 pb-1 text-center text-[14px] bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-black rounded-xl text-white ${!termsAccepted && 'opacity-50 cursor-not-allowed'}`}
                                    style={{lineHeight: "0px"}}
                                    disabled={!termsAccepted || !passwordsMatch}
                                >
                                    <strong>Registrarme</strong>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
