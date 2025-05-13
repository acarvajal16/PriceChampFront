import { UserProfile } from "@/interfaces/Api";
import { ApiClient } from "@/services/ApiClient";
import Sidebar from "@/shared/components/SideBar";
import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState<UserProfile>();

    useEffect(() => {
        ApiClient.getProfile()
            .then(res => {
                setUser(res);
            });
    }, []);

    const handleInputChange = (_: React.ChangeEvent<HTMLInputElement>) => {
        //setUser(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    return (
        <div className="container max-w-full flex p-4 dark:bg-gray-600">
            <div>
                <Sidebar />
            </div>
            <div className="m-5 w-full  rounded-2xl bg-white shadow-xl dark:bg-gray-800">
                <div className="px-8 pt-6">
                    <h2 className="text-2xl font-bold font-radio dark:text-white">Mi Cuenta</h2>
                    <div
                        className="my-1 h-0.5 w-full bg-blue-900 dark:bg-blue-400">
                    </div>
                </div>
                <div className="">
                    <div className="mt-7 ml-7">
                        <span className="font-bold text-marron cursor-pointer dark:text-white ">Nombre completo</span>
                    </div>
                    <div className="ml-7 my-3">
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Nombre completo"
                            className="outline-slate-400 rounded-lg dark:bg-gray-500 dark:placeholder:text-white"
                            value={user?.displayName ?? ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="ml-7">
                        <span className="font-bold text-marron cursor-pointer dark:text-white ">Correo</span>
                    </div>
                    <div className="ml-7 my-3">
                        <input
                            type="text"
                            name="email"
                            placeholder="maria@example.com"
                            className="outline-slate-400 rounded-lg dark:bg-gray-500 dark:placeholder:text-white"
                            value={user?.email ?? ""}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className=" flex font-semibold hover:cursor-pointer">
                    <div className=" my-6 ml-7 px-3 py-1 bg-black text-white font-bold rounded-lg hover:bg-gray-700 dark:bg-blue-700 dark:hover:bg-blue-800 ">Editar</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;