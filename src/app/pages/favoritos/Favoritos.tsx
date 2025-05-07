import Sidebar from "@/shared/components/SideBar";


function Favoritos() {
    return (
        
            <div className="container max-w-full flex p-4">
                <div>
                    <Sidebar />
                </div>
                <div className="m-5 w-full  rounded-2xl bg-white shadow-xl">
                    <div className="px-8 pt-6">
                        <h2 className="text-2xl font-bold font-radio">Favoritos</h2>
                        <div className=" h-0.5 w-full bg-blue-900">
                            
                        </div>
                    </div>
                    <div className="p-6">

                    </div>
                </div>
            </div>

    )
}

export default Favoritos;