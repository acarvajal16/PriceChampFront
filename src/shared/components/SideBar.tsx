
import { useNavigate } from 'react-router-dom';
import useAuth from '../store/useAuth';

export default function Sidebar() {

    const clearUser = useAuth(s => s.clearUser);

    const navigate = useNavigate();

    const Opcion = ({
        nombre,
        className,
        onClick
    }: {
        nombre: string,
        className?: string,
        onClick?: () => void
    }) => {
        return (
            <div
                className={`text-lg hover:bg-blue-800 rounded-lg p-1.5 hover:cursor-pointer indent-10 bg-[length:1.5rem] bg-[10px] bg-no-repeat ${className}`}
                onClick={onClick}
            >
                <strong className='px-5'>{nombre}</strong>
            </div>
        )
    }


    return (

        <div className="m-5 mt-5 w-60 rounded-2xl h-[400px] bg-primary-color shadow-xl">
            <div className="grid grid-cols-1 gap-6 p-6 text-white">
                <Opcion
                    nombre="Cuenta"
                    className="bg-user"
                    onClick={() => navigate("/user-cuenta")}
                />

                <Opcion
                    nombre="Favoritos"
                    className="bg-fav"
                    onClick={() => navigate("/user-favoritos")}
                />
                <Opcion
                    nombre="Historial"
                    className="bg-historial"
                    onClick={() => navigate("/historialCompra")}
                />

                <Opcion
                    nombre="Salir"
                    className="bg-signout"
                    onClick={() => clearUser()} //ojo cambiar este nose cual
                />
            </div>
        </div>
    );
}


