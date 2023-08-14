import React, { useState } from "react";
import CalculatorTitle from "./Components/CalculatorTitle";
import "./style.css";
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (err) {
      setResult("error");
    }
  };

  return (
    <div className="frame">
      <CalculatorTitle value="CALCULATOR" />
      <div className="cal">
        <div>
          <input className="input" value={input} readOnly></input>
          <br />
          <input className="result" value={result} readOnly></input>
          <div className="buttons">
            <div className="button-row">
              <button onClick={() => handleClick("1")}>1</button>
              <button onClick={() => handleClick("2")}>2</button>
              <button onClick={() => handleClick("3")}>3</button>
              <button onClick={() => handleClick("+")}>+</button>
            </div>
            <div className="button-row">
              <button onClick={() => handleClick("4")}>4</button>
              <button onClick={() => handleClick("5")}>5</button>
              <button onClick={() => handleClick("6")}>6</button>
              <button onClick={() => handleClick("-")}>-</button>
            </div>
            <div className="button-row">
              <button onClick={() => handleClick("7")}>7</button>
              <button onClick={() => handleClick("8")}>8</button>
              <button onClick={() => handleClick("9")}>9</button>
              <button onClick={() => handleClick("*")}>*</button>
            </div>
            <div className="button-row">
              <button onClick={() => handleClick("0")}>0</button>
              <button onClick={() => handleClick(".")}>.</button>
              <button onClick={calculate}>=</button>
              <button onClick={() => handleClick("/")}>/</button>
            </div>
            <div className="button-row">
              <button className="c-button" onClick={() => setInput("")}>
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
