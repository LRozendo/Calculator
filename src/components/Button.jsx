export default function Button ({ label = "a", onClick, variant = "n" }) {
    return <button className={`btn ${variant}`} onClick={() => {onClick(label)} } >{label}</button>
}