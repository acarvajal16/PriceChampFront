import Sidebar from "@/shared/components/SideBar";

function Profile() {
    return (
        <div className="container max-w-full flex p-4">
            <div>
                <Sidebar />
            </div>
            <div className="m-5 w-full  rounded-2xl bg-white shadow-xl">
                <div className="px-8 pt-6">
                    <h2 className="text-2xl font-bold font-radio">Mi Cuenta</h2>
                    <div
                        className="my-1 h-0.5 w-full bg-blue-900">
                    </div>
                </div>
                <div className="">

                    <div className="mt-7 ml-7">
                        <span className="font-bold text-marron cursor-pointer">Nombre completo</span>
                    </div>
                    <div className="ml-7 my-3">
                        <input type="text" placeholder="Nombre completo" className="outline-slate-400" /*value={usuario?.nombre}*/ />
                    </div>
                    <div className="ml-7">
                        <span className="font-bold text-marron cursor-pointer">Correo</span>
                    </div>
                    <div className="ml-7 my-3">
                        <input type="text" placeholder="maria@example.com" className="outline-slate-400" /*value={usuario?.correo_electronico}*/ />
                    </div>
                    <div className="ml-7">
                        <span className="font-bold text-marron cursor-pointer">Teléfono</span>
                    </div>
                    <div className="ml-7 my-3">
                        <input type="text" placeholder="+57 300 0000000" className="outline-slate-400" /*value={usuario?.telefono}*/ />
                    </div>
                    
                </div>
                <div className=" flex font-semibold hover:cursor-pointer">
                    <div className=" m-5 px-3 py-1 bg-black text-white font-bold rounded-lg hover:bg-gray-700 ">Editar</div>

                </div>
            </div>
        </div>
    )
}

export default Profile;