import Sidebar from "@/shared/components/SideBar";
import useAuth from "@/shared/store/useAuth";


function Favoritos() {

    const { favoritos } = useAuth();

    return (

        <div className="container max-w-full flex p-4 dark:bg-gray-600">
            <div>
                <Sidebar />
            </div>
            <div className="m-5 w-full  rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="px-8 pt-6">
                    <h2 className="text-2xl font-bold font-radio dark:text-white">Favoritos</h2>
                    <div className=" h-0.5 w-full bg-blue-900 dark:bg-blue-500">

                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col ml-2">
                        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 px-4 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">#</th>
                                                <th scope="col" className="px-6 py-4">Favorito</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(favoritos).map((registro, i) => (
                                                <tr
                                                    key={i}
                                                    className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {i}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{registro}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Favoritos;