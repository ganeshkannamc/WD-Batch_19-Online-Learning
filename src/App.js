import PrintName from './PrintName'

function App() {
  let person = { name: "ganeh", last: "kanna", age: 21, mobile: 78654367 };
  let color = ["red", "blue", "black", "green","balck","white"];

  let fullName = () => {
    return person.name + person.last;
  };
  // First class function -> if a functionn take one or more function as argument
  // JSX - JavaScript XML
  return (
    <div className="App">
      <h1>
        {person.name == "ganesh"
          ? `the name is ${person.name}`
          : "the naem is som thing"}{" "}
      </h1>
      <p> {person.age} </p>
      <p> {person.mobile} </p>
      <p> {fullName()} </p>
      {/* {color.map((itm) => (
        <h1>{itm}</h1>
      ))} */}
      <PrintName name={color} />
      <PrintName name={color} />
      <PrintName name={color} />
      <PrintName name={color} />
      <PrintName name={color} />
      <PrintName name={color} />
    </div>
  );
}


export default App;