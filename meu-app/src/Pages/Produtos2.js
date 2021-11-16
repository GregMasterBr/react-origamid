import React, {useEffect,useState} from 'react';

const Produtos2 = () => {
    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      fetch("https://servicodados.ibge.gov.br/api/v1/produtos/geociencias")
        .then(response => response.json())
        .then(json => setProdutos(json));
    }, []);
  
    return (
      <div>
        <h3>Consome uma API</h3>
        {produtos.map(produto => (
          <div key={produto.id}>
            <h1>{produto.titulo}</h1>
            <p>{produto.tipo}</p>
            <p>{produto.alias}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Produtos2;