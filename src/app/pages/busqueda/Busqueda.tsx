import { ProductCard } from "@/shared/components/ProductCard";

function Busqueda() {
    return (
        <div className="flex  justify-center items-center w-screen h-full">
            <div className="bg-white m-4 h-96 w-[160px] text-center rounded-lg">
                Filtros
            </div>
            <div className="flex-1 h-full py-10 flex flex-col gap-2">
                <div className="h-10 bg-red-50">

                </div>
                <div className="p-4 h-full grid grid-cols-4 gap-y-6 bg-gray-100 rounded-md mr-4">
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                    <div>
                        <ProductCard i={3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Busqueda;