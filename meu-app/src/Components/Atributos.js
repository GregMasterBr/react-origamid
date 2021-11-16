import React from 'react';


const Atributos = () => {

  const abre = 12;
  const agora = new Date().getHours();
  const fechado = 18;

    const estilo = {
      color: "red",
      fontSize: "18px",
      fontFamily: "Helvetica"
    };
  
    return (
      <div>
        <hr />
        <h2 style={estilo}>Atributos</h2>
        <div className="container">
            <p className={agora > abre ? "aberto" : "fechado"}>{abre} {agora} {fechado}Teste</p>
            <p style={{color:'red', fontSize:'30px',fontFamily:'monospace'}}>ADICIONANDO ESTILO INLINE COMO OBJETO</p>
        </div>
        <hr />
      </div>
    );
  };
  

export default Atributos;