import Calculator from "./Calculator";
import ThemeButton from "./ThemeButton";

export default function Container () {
    return (<div className="w-screen h-screen bg-(--bg) flex justify-center items-center transition-colors">
        <Calculator />
        <ThemeButton />
    </div>)
}