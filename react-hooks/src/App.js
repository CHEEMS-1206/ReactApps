import "./App.css";
import React from "react";
import UseState from "./Components/useState/useState";
import ObjectAsArgument from "./Components/useState/objectAsArgument";
import UseEffect from "./Components/useEffect/useEffect"

function App() {
  return (
    <div className="app">
      <UseState></UseState>
      <ObjectAsArgument />
      <UseEffect/>
    </div>
  );
}

export default App;
