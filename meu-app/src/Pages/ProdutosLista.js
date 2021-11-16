import React from "react";

const ProdutosLista = (props) => {
    return (
        <div>
        <h3>Consome uma API - isolado a lógica em um "Componente"</h3>
        {props.produtos.map(produto => (
          <div key={produto.id}>
            <h1>{produto.titulo}</h1>
            <p>{produto.tipo}</p>
            <p>{produto.alias}</p>
          </div>
        ))}
      </div>
    )
};

export default ProdutosLista;

