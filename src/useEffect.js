import React, { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let [display, setDisplay] = useState(count);

  useEffect(() => {
    console.log("inside jsx")
    setDisplay(count);
  }, [display]);

  console.log("before JSX");

  function handleClick() {
    console.log("inside function");
    // count - 0
    // display - 0
    setCount(count + 1); //-> Changing the count state to 0 + 1
    // count - 0
    // display - 0
    
  }

  return (
    <div>
      {console.log("JSX")}
      <button onClick={handleClick}>{count}</button>
      <h1>{display}</h1>
    </div>
  );
};

export default App;
