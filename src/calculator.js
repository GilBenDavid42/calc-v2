import {create, all} from 'mathjs'
import {useState} from "react";
import "./style.css"

const math = create(all)

function Calculator() {
    const [mathInput, setMathInput] = useState("");
    const [resultText, setResultText] = useState("");

    const createMathButton = (innerHTML) => {
        return <button name="calculator-math-button" onClick={mathButtonClicked}>{innerHTML}</button>
    };

    const equalsClicked = (e) => {
        try {
            setResultText(math.evaluate(mathInput));
        } catch (SyntaxError) {
            setResultText("Invalid expression");
        }
        setMathInput("");
    }


    const mathButtonClicked = (e) => {
        // Adding the button text to the input
        setMathInput(mathInput + e.target.innerText);
    }

    return (
        <div className="calculator">
            <div className="row">
                <h1>{resultText}</h1>
            </div>

            <div className="row">
                <input id="calculator-input" type="text" contentEditable="false" value={mathInput}/>

            </div>

            <div className="row">
                {createMathButton(1)}
                {createMathButton(2)}
                {createMathButton(3)}
            </div>

            <div className="row">
                {createMathButton(4)}
                {createMathButton(5)}
                {createMathButton(6)}
            </div>

            <div className="row">
                {createMathButton(7)}
                {createMathButton(8)}
                {createMathButton(9)}
            </div>

            <div className="row">
                {createMathButton(0)}
                {createMathButton('.')}
            </div>

            <div className="row">
                {createMathButton('+')}
                {createMathButton('-')}
                {createMathButton('*')}
                {createMathButton('/')}
            </div>


            <div className="row">
                <button id="calculator-equals" onClick={equalsClicked}>=</button>
            </div>

        </div>
    );
}


export default Calculator;
