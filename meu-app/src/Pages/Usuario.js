import React from "react";

const Usuario = () => {
    const logado = true;
    let saudacao;
    if (logado) {
      saudacao = <h1>Bem vindo meu parceiro.</h1>;
    } else {
      saudacao = <h1>Logue para acesso os cursos</h1>;
    }
  
    return (
      <div>
        <h1>{saudacao}</h1>
      </div>
    );
  };
  
  export default Usuario;
