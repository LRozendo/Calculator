export function calculate (a, b, operator) {
    switch (operator) {
        case "+": return parseFloat((a + b).toFixed(10)) // Resolver problema do Float Ponit
        case "-": return a - b
        case "x": return a * b
        case "÷":
             if (b === 0) return "Erro"
            return a / b
        default: return b
    }
}