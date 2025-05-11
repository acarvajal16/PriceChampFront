import { useDarkMode } from "@/context/ThemeContext";

const DMToggler = () => {

    const {darkMode, setDarkMode} = useDarkMode();

    return(
        <button onClick={() => setDarkMode(!darkMode)} className=" size-5 transition-all cursor-pointer hover:scale-110">
            { darkMode ? (
                <img src="sun-light.svg" alt="Claro" className="size-7" />
            ):(
                <img src="moon-light.svg" alt="Oscuro" className="size-7" />
            )}

        </button>
    )

}

export default DMToggler;