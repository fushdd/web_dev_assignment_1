import { useState } from "react";

export default function Calculator() {
    // states
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operation, setOperation] = useState('+')
    const [result, setResult] = useState(0)

    const handleCalculate = () => {
        // calculate based on current operation (state)
        switch (operation) {
            case '+':
                setResult(number1 + number2);
                break;
            case '-':
                setResult(number1 - number2);
                break;
            case '*':
                setResult(number1 * number2);
                break;
            case '/':
                setResult(number1 / number2);
                break;
            default:
                break;
        }
    }

    return (
        <div id="calculator">
            {/* first number */}
            <input 
                type="number"
                onChange={(event) => setNumber1(Number(event.target.value))}/>
            {/* operation */}
            <select
                onChange={(event) => setOperation(event.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            {/* second number */}
            <input 
                type="number" 
                onChange={(event) => setNumber2(Number(event.target.value))}/>
            <button onClick={handleCalculate}>Calculate</button>
            <h2>Result: {result}</h2>
        </div>
    );
}