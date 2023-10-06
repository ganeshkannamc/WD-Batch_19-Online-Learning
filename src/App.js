import React from "react";
import Test from "./Test";
import Child from "./Child";

const App = () => {
  return (
    <div>
      <Test>
        <Child />
      </Test>
    </div>
  );
};

export default App;
