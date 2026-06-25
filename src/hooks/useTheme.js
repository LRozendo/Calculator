import { useContext } from "react";
import { themeContext } from "../context/themeContext";

export function useTheme () {
    const context = useContext(themeContext)

    if (!context) {throw new Error("useTheme apenas deve ser usado dentro de um ThemeProvider!")}
    
    return context
}