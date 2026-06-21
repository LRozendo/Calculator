import Button from "./Button";

export default function ButtonGrid ({ onDigit, onDecimal, onOperator, onEquals, onClear }) {
    return (<div className="btn-grid">
        <Button label="C" variant="a" onClick={onClear}/>
        <Button label="÷" variant="a" onClick={onOperator}/>
        <Button label="x" variant="a" onClick={onOperator}/>
        <Button label="-" variant="a" onClick={onOperator}/>
        <Button label="7" onClick={onDigit}/>
        <Button label="8" onClick={onDigit}/>
        <Button label="9" onClick={onDigit}/>
        <Button label="+" variant="a" onClick={onOperator}/>
        <Button label="4" onClick={onDigit}/>
        <Button label="5" onClick={onDigit}/>
        <Button label="6" onClick={onDigit}/>
        <Button label="=" variant="e" onClick={onEquals}/>
        <Button label="1" onClick={onDigit}/>
        <Button label="2" onClick={onDigit}/>
        <Button label="3" onClick={onDigit}/>
        <Button label="." variant="a" onClick={onDecimal}/>
    </div>)
}