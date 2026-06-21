import ButtonGrid from "./ButtonGrid";
import Display from "./Display";
import { useCalculator } from "../hooks/useCalculator"

export default function Calculator () {
    const { state, inputDigit, inputDecimal, setOperator, performEquals, performClear } = useCalculator()

    return (<div className="calculator">
        <Display value={state.currentValue} prev={state.previousValue} operator={state.operator}/>
        <ButtonGrid
        onDigit={inputDigit}
        onDecimal={inputDecimal}
        onOperator={setOperator}
        onEquals={performEquals}
        onClear={performClear}
        />
    </div>)
}