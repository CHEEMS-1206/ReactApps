import "./App.css";
import React from "react";
import UseState from "./Components/useState/useState";
import ObjectAsArgument from "./Components/useState/objectAsArgument";
import UseEffect from "./Components/useEffect/useEffect"
import Memo from "./Components/memo/useMemo";

function App() {
  return (
    <div className="app">
      <UseState></UseState>
      <ObjectAsArgument />
      <UseEffect/>
      <Memo></Memo>
    </div>
  );
}

export default App;
