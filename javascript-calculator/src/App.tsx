import { useState } from "react";
import "./App.scss";
import Display from "./components/Display/Display";
import NumericKeyboard from "./components/NumericKeyboard/NumericKeyboard";

const buttons = [
  {
    id: "clear",
    value: "AC",
    type: "danger one clear",
  },
  {
    id: "divide",
    value: "/",
    type: "operation two",
  },
  {
    id: "multiply",
    value: "*",
    type: "operation three",
  },
  {
    id: "seven",
    value: 7,
    type: "number four",
  },
  {
    id: "eight",
    value: 8,
    type: "number five",
  },
  {
    id: "nine",
    value: 9,
    type: "number six",
  },
  {
    id: "subtract",
    value: "-",
    type: "operation seven",
  },
  {
    id: "four",
    value: 4,
    type: "number eight",
  },
  {
    id: "five",
    value: 5,
    type: "number nine",
  },
  {
    id: "six",
    value: 6,
    type: "number ten",
  },
  {
    id: "add",
    value: "+",
    type: "operation eleven",
  },
  {
    id: "one",
    value: 1,
    type: "number twelve",
  },
  {
    id: "two",
    value: 2,
    type: "number thirteen",
  },
  {
    id: "three",
    value: 3,
    type: "number fourteen",
  },
  {
    id: "equals",
    value: "=",
    type: "primary fifteen equals",
  },
  {
    id: "zero",
    value: 0,
    type: "number seventeen",
  },
  {
    id: "decimal",
    value: ".",
    type: "decimal eighteen",
  },
];

function App() {
  /**
   * State
   */
  const [value, setValue] = useState('')
  const [type, setType]= useState('')
  
  return (
    <div className="App">
      <Display value={value} type={type} />
      <NumericKeyboard 
        button={buttons}
        setValue={setValue}
        setType={setType} />
    </div>
  );
}

export default App;
