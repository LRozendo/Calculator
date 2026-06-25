import { useEffect, useState } from "react";
import { themeContext } from "./themeContext";

const getInitialTheme = () => {
    const theme = localStorage.getItem("theme") ?? "light"

    return theme
}

export default function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState(
        () => getInitialTheme()
    )

    const performToggle = () => {setTheme(prev => prev === "light" ? "dark" : "light")}

    useEffect(
        () => {
            document.documentElement.classList.toggle("dark", theme === "dark")
            localStorage.setItem("theme", theme)
        },[theme]
    )

    return <themeContext.Provider value={ {theme, performToggle} }>{children}</themeContext.Provider>
}