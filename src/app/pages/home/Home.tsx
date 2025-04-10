import { ProductCard } from "@/shared/components/ProductCard";



function Home() {
    return (
        <div className="bg-white h-full w-full">
            {/*  */}

            <div className="flex">
                <div className="w-1/2 py-10">
                    <img src="homesport.png" alt="" />
                </div>
                <div className="py-10 text-right">
                    <div className="pr-4">
                        <h1 className=" font-radiobold text-4xl">¿Pagando de más por ropa deportiva?</h1>
                    </div>
                    <div className="pr-4 font-lato text-2xl">
                        <p>Compra inteligente, compra fácil.</p>
                    </div>
                    <div className="pr-4">
                        <p className="text-balance font-extralight text-xl">Con Price Champ puedes comparar precios de las mejores marcas de ropa deportiva en un solo lugar. Encuentra las mejores ofertas y descuentos </p>
                    </div>
                </div>
            </div>

            <div className="flex h-16">
                <div className="flex-1 flex justify-left items-end text-2xl">
                    <strong className=" pl-8 font-radiobold">Buscar por categoría</strong>
                </div>
                <div className="flex-[2] flex items-end">
                    <img className="w-full " src="Horizontal blue deco.svg" alt="Blue lines deco" />
                </div>
            </div>

            <div className="pl-8 py-4">
                <h2 className=" font-lato text-xl">Equípate para cada desafío. Explora nuestras categorías
                    y descubre las mejores opciones</h2>
            </div>

            <div className="flex w-full h-auto max-h-[400px] py-4 justify-center">
                <div className="">
                    <img className="max-h-full" src="imagenes-home/RDCAT.png" alt="Ropa deportiva" />
                </div>
                <div className="ml-[-123px]">
                    <img className="max-h-full" src="imagenes-home/ACCAT.svg" alt="" />
                </div>
                <div className="ml-[-44px]">
                    <img className="max-h-full" src="imagenes-home/CALCAT.png" alt="" />
                </div>
                <div className="ml-[-115px]">
                    <img className="max-h-full" src="imagenes-home/EQCAT.png" alt="" />
                </div>
            </div>

            <div className="flex flex-col bg-cover bg-blur bg-center w-full h-[800px]">
                <div className="flex justify-center">
                    <h1 className="font-radiobold text-3xl p-10">Productos Destacados</h1>
                </div >
                <div className="w-full flex flex-nowrap overflow-x-auto scrollbar-hide scroll-smooth">
                    <div className="flex-1 flex justify-center items-center">
                        <ProductCard i={1} />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <ProductCard i={2} />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <ProductCard i={4} />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <ProductCard i={3} />
                    </div>
                </div>
            </div>
            <Test />
        </div>
    )
}

const Test = () => {
    return (
        <div>
            
        </div>
    )
}

export default Home;