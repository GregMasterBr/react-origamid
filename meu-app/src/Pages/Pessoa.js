import React from "react";

const Pessoa  = () => {
    const nome = "João da Silva";
    const idade = 30;
  
    return (
      <section>
        <hr />
        <br />              
        <h1>{nome}</h1>
        <p>{idade >= 18 ? "Pode dirigir" : "Não pode dirigir"}</p>
        <hr />
        <br />            
      </section>
    );
};

export default Pessoa ;