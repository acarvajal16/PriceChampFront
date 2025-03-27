import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./routes";
import useAuth from "@/shared/store/useAuth";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home";
import { Ventas } from "../pages/ventas/Ventas";
import Login from "../pages/login/Login";
import { Register } from "../pages/register/Register";

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
                            {/* las rutas de la app */}

                            <Route path={routes.ventas} element={<Ventas />} />

                            <Route path="*" element={<Navigate to={routes.home} />} />
                        </Route>
                    ) : (
                        <>
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