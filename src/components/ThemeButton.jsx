import { useTheme } from "../hooks/useTheme"

export default function ThemeButton () {
    const {theme, performToggle} = useTheme()

    return (
        <button type="button" onClick={performToggle} className="toggleBtn">
            {theme === "light" ? "dark 🌑" : "light ☀️"}
        </button>
    )
}