
import React, { useState } from "react";
import ProdutosLista from "./ProdutosLista";
import ProdutosPuxar from "./ProdutosPuxar";
import "./produtos.css"; // O webpack faz a mágica.

const Produtos4 = () => {
  const [produtos, setProdutos] = useState([]);
 
  const primaryButton = {
    backgroundColor: "tomato",
    color: "white",
    fontSize: "20px",
    padding: "10px"
  };

  const secondaryButton = {
    backgroundColor: "#CCC",
    fontSize: "20px",
    padding: "10px"
  };

   return (
    <div className="prod-4">
      <h1>Produtos - Isolo o componente de Puxar o Elemento</h1>
      <ProdutosPuxar setProdutos={setProdutos} />
      {produtos.length > 0 ? (
        <ProdutosLista produtos={produtos} />
      ) : (
        "Carregando..."
      )}      
        <div>
            <button style={primaryButton}>Botão Primário</button>
            <button style={secondaryButton}>Botão Secundário</button>
        </div>
    </div>
  );
};

export default Produtos4;
