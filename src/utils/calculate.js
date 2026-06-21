export function calculate (a, b, operator) {
    switch (operator) {
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        case "/":
             if (b === 0) return "Erro"
            return a / b
        default: return b
    }
}