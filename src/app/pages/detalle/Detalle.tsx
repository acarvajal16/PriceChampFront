import { useEffect, useState } from "react";
//import { Rating } from "@material-tailwind/react";

import Gallery from "./Gallery";
import { useLocation, useNavigate } from "react-router-dom";
//import { IProduct } from "../../../models/interfaces/IProduct";
//import axios from "axios";
//import Notification from "../../../components/Notification";
//import { useAuth } from "@/hooks/useAuth";
//import { Router } from "@/app/router/Router";

/*export const Detalle = () => {
    const location = useLocation();
    const user = useAuth((s) => s.user);
    const productId = new URLSearchParams(location.search).get("id");
    const [notificationMessage, setNotificationMessage] = useState("");
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);
    const [producto, setProducto] = useState<IProduct | null>(null);*/

   /* useEffect(() => {
        const obtenerProductoPorId = async (idProducto: string) => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/producto/obtenerProducto?idProducto=${idProducto}`
                );
                if (res.data && res.data[0]) {
                    setProducto(res.data[0]);
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        if (productId) {
            obtenerProductoPorId(productId);
        } else {
            setProducto(null);
        }
    }, [productId]);

    if (!producto) return <div>Cargando...</div>;

    const handleAddToCart = async () => {
        if (!user) {
            navigate(Router.login);
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:3000/carrito/agregar",
                {
                    idUsuario: user.id_usuario,
                    idProducto: producto.id_producto,
                    cantidad: quantity.toString(),
                },
                { headers: { "Content-Type": "application/json" } }
            );
            if (response.status === 201 || response.status === 200) {
                setNotificationMessage("Producto añadido al carrito correctamente");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const handleAddFavorites = async () => {
        if (!user) {
            navigate(Router.login);
            return;
        }
        try {
            await axios.post(
                "http://localhost:3000/producto/agregarDestacados",
                {
                    idProducto: producto.id_producto,
                    idUsuario: user.id_usuario,
                },
                { headers: { "Content-Type": "application/json" } }
            );
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const formatPrice = (price: number): string => {
        const formatter = new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        });
        return formatter.format(price).replace(",", ".");
    };

    const formatDiscount = (price: number, discount: string): string => {
        if (!discount || discount === "0" || discount === "0.00") return "";
        const discountValue = parseFloat(discount);
        const discountedPrice = price - price * (discountValue / 100);
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(discountedPrice);
    };*/

    function Detalle(){

    return (
        <div className="flex justify-center p-8">
            <div className="w-[960px] rounded-xl bg-white">
                <div className="container flex justify-center p-6">
                    <div className="m-1 h-[510px] w-[580px] rounded-lg bg-gray-200">
                        <Gallery /*productName={producto.nombre}*/ />
                    </div>

                    <div className="m-2 inline-flex w-[700px] flex-col">
                        <strong className="pb-2 text-xl">{producto.nombre}</strong>
                        <Rating />
                        <div className="inline-block py-4">
                            <strong>{formatPrice(producto.precio)}</strong>
                            <strong className="px-2 text-md justify-center text-gray-700 line-through">
                                {formatDiscount(producto.precio, producto.descuento)}
                            </strong>
                            <span className="bg-red-500 px-2 font-semibold text-white">
                                OFERTA
                            </span>
                        </div>
                        <div className="py-6">
                            <span className="text-md font-bold">Descripción:</span>
                            <p>{producto.descripcion}</p>
                        </div>

                        <div className="flex flex-col">
                            <div className="inline-block">
                                <span className="font-bold">Seleccione un color:</span>
                                <span className="px-1">{producto.color}</span>
                            </div>
                            <div className="pb-5">
                                <div className="mr-1 inline-flex size-5 rounded-full bg-gray-300 hover:cursor-pointer"></div>
                                <div className="inline-flex size-5 rounded-full bg-brown-500 hover:cursor-pointer"></div>
                            </div>
                            <span className="font-semibold text-primary-color">
                                {producto.stock} unidades disponibles
                            </span>
                        </div>

                        <div className="float-start py-3">
                            <NumberInput
                                value={quantity}
                                onChange={(newQuantity) => setQuantity(newQuantity)}
                            />
                        </div>

                        <div className="inline-block py-3">
                            <button
                                className="bg-ardilla p-2 font-semibold text-white rounded-lg"
                                onClick={handleAddToCart}
                            >
                                Agregar al carrito
                                <svg
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="15"
                                    className="inline-block pl-2"
                                >
                                    <circle cx="7" cy="22" r="2" />
                                    <circle cx="17" cy="22" r="2" />
                                    <path d="M22.984,6.018..." />
                                </svg>
                            </button>

                            <button
                                className="m-2 rounded-lg bg-gray-400 p-2 font-semibold"
                                onClick={handleAddFavorites}
                            >
                                Añadir a favoritos
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#FF5733"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="15"
                                    className="inline-block pl-2"
                                >
                                    <path d="M17.5,1.917..." />
                                </svg>
                            </button>

                            <Notification message={notificationMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalle;