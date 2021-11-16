
import React, { useState, useEffect } from "react";
import ProdutosLista from "./ProdutosLista";

const Produtos3 = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas")
      .then(response => response.json())
      .then(json => setProdutos(json));
  }, []);

  return (
    <div>
      <h1>Produtos - que veio como componente</h1>
      <ProdutosLista produtos={produtos} />
    </div>
  );
};

export default Produtos3;
