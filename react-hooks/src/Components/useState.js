import React, { useState } from "react";

/*

>>> To use useState() hook we first import it.
    While using useState follow the following rules:-
>>  can only be used in functional components and not in class based components.
>>  Hooks if used multiple times must be excecuted in same order.
>>  Hooks must not be put inside loops if checks and functions.

*/
// the useState hook
function UseState() {
  // function argumentToUseState() {
  //   return 0;
  // }
  const [count, setCount] = useState(0); // if single constant argument pass directly
  // useState(()=>argumentToUseState())  else if complex computaions required use function renderers.

  function decrementCount() {
    setCount((prevCount) => prevCount - 1); // use concept of previous values
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
/*
    useState function accepts an argument as current state.
    it return a array of 2 values first being the current state the later being the function to manipulate the state.
*/
  return (
    <div>
      <button onClick={incrementCount}>
        +
      </button>
      <span>{count}</span>
      <button onClick={decrementCount} className="decColor">
        -
      </button>
    </div>
  );
}

export default UseState;

