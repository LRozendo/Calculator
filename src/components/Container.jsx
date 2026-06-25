import Calculator from "./Calculator";

export default function Container () {
    return (<div className="w-screen h-screen bg-(--bg) flex justify-center items-center transition-colors">
        <Calculator />
    </div>)
}