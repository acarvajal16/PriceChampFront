
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
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
                className={`text-lg hover:text-blue-700 hover:cursor-pointer indent-10 bg-[length:1.5rem] bg-[10px] bg-no-repeat ${className}`}
                onClick={onClick}
            >
                <strong className='px-5'>{nombre}</strong>
            </div>
        )
    }


    return (

        <div className="m-5 mt-10 w-60 rounded-2xl h-[400px] bg-primary-color shadow-xl">
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
                    onClick={() => navigate("/historialCompra")} //ojo cambiar este nose cual
                />
            </div>
        </div>
    );
}


