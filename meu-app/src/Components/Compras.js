import React, {useState} from 'react';

const Compras = () => {
    // useState é um Hook que define uma variável reativa
    //const [count, setCount] = React.useState(0);
    const [count, setCount] = useState(0);
  
    function handleClick2(e){
        console.log(e.target);
        //setCount(count + 1);
    }
    return (
      <div>
        <button onClick={() => setCount(count + 1)  }>Comprar: {count}</button>
        <p>Total: {count}</p>
        <p>Preço: R$ {count * 250}</p>
      </div>
    );
  };
  
export default Compras;