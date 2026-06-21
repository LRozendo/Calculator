import { useState } from "react";
import { calculate } from "../utils/calculate"

export function useCalculator () {
    const [state, setState] = useState(
    {
        currentValue: '0',
        previousValue: null,
        operator: null,
        waitingForOperand: false
    })

    const inputDigit = digit => {
        if (state.waitingForOperand) { // Se tiver uma operação em espera, inicia um novo número
            setState(p => ({...p, currentValue: String(digit), waitingForOperand: false}))
            return
        }

        setState(
            p => ({
                ...p,
                currentValue: p.currentValue === "0" ? String(digit) : p.currentValue + digit
            })
        )
    }

    const inputDecimal = () => {
        if (state.waitingForOperand) {
            setState(p => ({...p, currentValue: "0.", waitingForOperand: false}))
            return
        }

        if (state.currentValue.includes(".")) return // Se já tiver ".", não coloca

        setState(
            p => ({
                ...p,
                currentValue: p.currentValue + "."
            })
        )
    }

    const setOperator = op => {
        const {currentValue, previousValue, operator} = state
        const current = parseFloat(currentValue)

        // Verifica se já tem um operador antes
        const result = state.previousValue !== null && !state.waitingForOperand ? calculate(previousValue, current, operator) : current

        setState(
            {
                currentValue: String(result),
                previousValue: String(result),
                operator: op,
                waitingForOperand: true
            }
        )
    }

    const performEquals = () => {
        const {currentValue, previousValue, operator} = state
        if (operator === null || previousValue === null) return
        const previous = parseFloat(previousValue)
        const current = parseFloat(currentValue)

        const result = calculate(previous, current, operator)

        setState(
            {
                currentValue: String(result),
                previousValue: null,
                operator: null,
                waitingForOperand: true
            }
        )
    }

    const performClear = () => {
        setState(
            {
                currentValue: '0',
                previousValue: null,
                operator: null,
                waitingForOperand: false
            }
        )
    }

    return { state, inputDigit, inputDecimal, setOperator, performEquals, performClear}
}