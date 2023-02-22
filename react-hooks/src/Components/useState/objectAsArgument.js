import React, { useState } from "react";

function ObjectAsArgument() {
  const [state, setState] = useState({ count: 9, theme: "blue" }); // object as the argument
  const count = state.count; // all states returned under a common name
  const theme = state.theme;
  function decrementCount() {
    setState((prevState) => {
      console.log("rendered");
      return { count: prevState.count - 1 }; // when changing a value the other parameters are not spread using spread operator
    });
  }
  function incrementCount() {
    setState((prevState) => {
      console.log("rendered");
      return { ...prevState, count: prevState.count + 1 }; // when changing a value the other parameters are spread using spread operator
    });
  }

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrementCount} className="decColor">
        -
      </button>
    </div>
  );
}

export default ObjectAsArgument;
