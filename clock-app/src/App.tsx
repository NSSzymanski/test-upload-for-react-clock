import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import ClockDisplay from "./components/ClockDisplay";
import Settings from "./components/settings";

function App() {
  return (
    <div className="App">
      <h1>Clock App</h1>
      <Settings></Settings>
    </div>
  );
}

export default App;
