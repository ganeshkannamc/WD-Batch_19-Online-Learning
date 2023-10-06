import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  let [color, setColor] = useState("red");

  let [hide, setHide] = useState(true);

  let [nameList, setNameList] = useState([]);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  function handleColorChange(eve) {
    setColor(eve.target.value);
  }

  function handleAddColor() {
    setNameList((curVal) => [...curVal, color]);
  }

  return (
    <div>
      <button onClick={handleDec}>-</button>
      <h1>{count}</h1>
      <button onClick={handleInc}>+</button>
      <input type="text" value={color} onChange={handleColorChange} />
      <h1
        style={{
          border: "1px solid black",
          backgroundColor: color,
        }}
      >
        {color}
      </h1>
      <button onClick={handleAddColor}>Add color to the list</button>
      {/* <h1 style={{ display: hide ? "block" : "none" }}>Personal info</h1> */}
      {hide && nameList.map((itm) => <h1>{itm}</h1>)}

      {/* {hide && (
        <button
          onClick={() => {
            setHide(false);
          }}
        >
          Hide
        </button>
      )}

      {!hide && (
        <button
          onClick={() => {
            setHide(true);
          }}
        >
          Unhide
        </button>
      )} */}

      <button
        onClick={() => {
          setHide(!hide);
        }}
      >
        {hide ? "Hide" : "Unhide"}
      </button>
    </div>
  );
};

export default App;
