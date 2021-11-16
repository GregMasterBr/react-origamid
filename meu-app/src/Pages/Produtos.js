import React from 'react';
import Compras from '../Components/Compras';

function handleClick(event) {
    alert("Comprou: " + event.target.innerText);
    console.log(event);
    console.log(event.target);
    event.target.classList.add('aberto');

  }

const Produtos= () =>{
    return (
        <div>
            <h2>Produtos</h2>
            <button onClick={handleClick}>Camisa</button>
            <button onClick={handleClick}>Bermuda</button>
            <h3>[TESTANDO] - Total lá do componente compras: {Compras.count}</h3>
        </div>
    )
}

export default Produtos;