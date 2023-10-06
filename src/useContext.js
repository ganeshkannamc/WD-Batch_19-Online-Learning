import React, { createContext, useContext, useState } from "react";

// useContext -> create, provide, subcribe
let MyContext = createContext();

const App = () => {
  let [name, setName] = useState("");
  // props drilling
  return (
    <div>
      App
      <input type="text" value={name} onChange={(eve => setName(eve.target.value))} />
      <MyContext.Provider value={{name,setName}}>
        <CompA />
      </MyContext.Provider>
    </div>
  );
};

const CompA = () => {
    
  return (
    <div>
      CompA - value
      <CompB />
    </div>
  );
};

const CompB = () => {
    let {name,setName} = useContext(MyContext)
  return (
    <div>
      CompB - value
      <input type="text" value={name} onChange={(eve => setName(eve.target.value))} />
      <CompC />
    </div>
  );
};

const CompC = () => {
  return (
    <div>
      CompC - value - 
      <CompD />
    </div>
  );
};

const CompD = () => {
    let {name} = useContext(MyContext)
    
  return <div>CompD - value - {name}</div>;
};

export default App;
