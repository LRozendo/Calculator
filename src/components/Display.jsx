import LineOp from "./LineOp";

export default function Display ({ value, prev, operator }) {
    return (<div className="display">
        <LineOp>
            {prev}{operator}
        </LineOp>
        {value}
        </div>)
}