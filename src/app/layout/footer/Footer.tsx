function Footer() {
    return (
        <div className="flex justify-between bg-gris p-4 w-full h-14">
            <div className=" items-center">
                <img src="LogoAlt.svg" alt="Logo" className=" pb-1 w-[140px] h-[35px]" />
            </div>
            <div className=" font-lato font-bold text-white text-xs">
                <p>© 2025 PriceChamp. Todos los derechos reservados</p>
            </div>
            <div className=" font-lato font-bold text-white text-xs pr-3">
                <p>Contacto</p>
            </div>
        </div>
    )
}

export default Footer;