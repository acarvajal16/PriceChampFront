import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./routes";
import useAuth from "@/shared/store/useAuth";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home";
import { Ventas } from "../pages/ventas/Ventas";
import Login from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import Busqueda from "../pages/busqueda/Busqueda";
import Favoritos from "../pages/favoritos/Favoritos";
import Historial from "../pages/historial/Historial";

const baseurl = import.meta.env.BASE_URL;

function AppRoutes() {

    const { user } = useAuth();

    return (
        <BrowserRouter basename={baseurl}>
            <Routes>
                {
                    (user) ? (
                        <Route element={<Layout />}>
                            <Route path={routes.home} element={<Home />} />
                            <Route path={routes.profile} element={<Profile />} />
                            <Route path={routes.favoritos} element={<Favoritos />} />

                            <Route path={routes.ventas} element={<Ventas />} />
                            <Route path={routes.busqueda} element={<Busqueda />} />
                            <Route path={routes.historial} element={<Historial />} />

                            <Route path="*" element={<Navigate to={routes.home} />} />
                        </Route>
                    ) : (
                        <>
                            <Route element={<Layout />}>
                                <Route path={routes.home} element={<Home />} />
                                
                                
                                <Route path={routes.busqueda} element={<Busqueda />} />
                            </Route>
                            <Route path={routes.login} element={<Login />} />
                            <Route path={routes.register} element={<Register />} />
                            <Route path="*" element={<Navigate to={routes.login} />} />
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

/**

                    


*/