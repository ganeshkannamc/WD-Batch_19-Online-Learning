export default function PrintName({ name }) {
  return (
    <div>
      <h1>Am from Print name componene</h1>
      {name.map((itm) => (
        <h1>{itm}</h1>
      ))}
    </div>
  );
}

function Printage() {
  return <h1> Am printing age</h1>;
}

function Printjob() {
  return <h1> Am printing job</h1>;
}

export { Printage, Printjob };
