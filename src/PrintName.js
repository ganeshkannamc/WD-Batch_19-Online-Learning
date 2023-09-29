export default function PrintName({name}) {
  
    return (
      <div>
        <h1>Am from Print name componene</h1>
        {name.map((itm) => (
          <h1>{itm}</h1>
        ))}
      </div>
    );
  }