import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React</h1>
      <p>{counter}</p>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        Increase counter
      </button>
      <button className="button" onClick={() => setCounter(counter - counter)}>
        Reset counter
      </button>
    </div>
  );
}

export default App;
