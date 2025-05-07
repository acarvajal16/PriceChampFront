function Footer() {
    return (
        <div className="flex justify-between bg-gris p-6 w-full h-[80px]">
            <div className=" items-center">
                <img src="LogoAlt.svg" alt="Logo" className=" pb-1 w-[140px] h-[35px]" />
            </div>
            <div className="flex items-center font-lato font-bold text-white text-xs">
                <p>© 2025 PriceChamp. Todos los derechos reservados</p>
            </div>
            <div className="flex items-center font-lato font-bold text-white text-xs pr-10">
                <p>Contacto</p>
            </div>
        </div>
    )
}

export default Footer;