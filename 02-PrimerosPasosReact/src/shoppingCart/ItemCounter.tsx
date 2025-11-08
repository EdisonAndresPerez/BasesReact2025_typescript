import { useState } from "react";

interface Props {
  name: string;
  quantity?: number;
  availableQuantity: number;
  isActive: boolean;
}

export default function ItemCounter({
  name,
  quantity,
  availableQuantity,
  isActive,
}: Props) {

  const [count, setCount] = useState(5)



function handleAdd() {
  setCount( count  + 1)
} 

function handleSubtract() {
  if (count === 1){
    return
  }
  setCount( count -1 )
}



  function handleClick() {
    console.log(`click en ${name}`)
  }


  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 200,
          border: "solid 1px black",
          padding: "10px",
        }}
      >
        Nombre del producto <br /> 
        <strong style={{color: isActive ? "green" : "red"  }}>
          {name}
          </strong>
        <p>
          <strong>
            Estado: <br />
            <span style={{ color: isActive ? "green" : "red" }}>
              {isActive ? "DISPONIBLE" : "NO DISPONIBLE"}
            </span>
          </strong>
        </p>
        <p>
          cantidad Disponible: <strong>{availableQuantity}</strong>
        </p>
      </span>
      
    
      <button
      onMouseEnter={() => console.log(`pasaste por encima de ${name}`)}
      onClick={handleSubtract}
      >-1</button>


      <span data-testid="valor">{count}</span>
      
      <button
        onMouseEnter={() => console.log(`pasaste por encima de ${name}`)}
        onClick={handleAdd}
      >
        +1
      </button>
    </section>
  );
}
