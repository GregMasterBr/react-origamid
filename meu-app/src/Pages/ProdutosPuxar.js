
import React, { useEffect } from "react";
const ProdutosPuxar = ({setProdutos}) => {

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas")
    .then(response => response.json())
    .then(json => setProdutos(json));
  }, []);

  return (
    <div>  </div>
  );
};

export default ProdutosPuxar;
