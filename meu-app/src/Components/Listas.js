import React from "react";

const Listas = () => {
    const produtos = ["Notebook", "Smartphone", "Tablet"];
    const produtosMap = produtos.map(function(item){
      return <li key={item}>{item.toUpperCase()}</li>
    });
    const produtosMapMelhorado = produtos.map(item=><li key={item.toLowerCase()}>{item.toLowerCase()}</li>);    
    const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];
    const livros = [
      { nome: "A Clash of Kings", ano: 1996 },
      { nome: "A Game of Thrones", ano: 1999 },
      { nome: "A Storm of Swords", ano: 2000 }
    ];
    const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
  
    return (
      <div>
        <p>{produtos}</p>
        <br/>
        <ul>{produtosMap}</ul>
        <br/>
        <br/>
        <ul>{produtosMapMelhorado}</ul>
        <br/>        
        <ul>{empresas}</ul>
        <ul>
          {filmes.map(filme => (
            <li key={filme}>{filme}</li>
          ))}
        </ul>
        <ul>
          {livros
            .filter(livro => livro.ano > 1998)
            .map(livro => (
              <li key={livro.nome}>
                {livro.nome}, {livro.ano}
              </li>
            ))}
        </ul>
      </div>
  );
};

export default Listas;