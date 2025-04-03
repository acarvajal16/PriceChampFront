function Home() {
    return (
        <div className="bg-white h-screen w-screen ">
            <div className="flex">
                <div className="w-1/2 py-10">
                    <img src="homesport.png" alt="" />
                </div>
                <div className="py-10 text-right">
                    <div className="pr-4">
                        <h1 className=" font-montserrat">¿Pagando de más por ropa deportiva?</h1>
                    </div>
                    <div className="pr-4">
                        <p>Compra inteligente, compra fácil.</p>
                    </div>
                    <div className="pr-4">
                        <p className="text-balance">Con Price Champ puedes comparar precios de las mejores marcas de ropa deportiva en un solo lugar. Encuentra las mejores ofertas y descuentos </p>
                    </div>
                    <div className="py-2">
                        <img src="Horizontal blue deco.svg" alt="Blue lines deco" />
                    </div>
                    <div className="text-left">
                        <strong>Buscar por categoría</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;