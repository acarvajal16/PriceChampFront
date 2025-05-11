import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ThemeProviderType = {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeProviderType>({
    darkMode: false,
    setDarkMode: () => {}
});

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect (()=> {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useDarkMode = () => useContext(ThemeContext)