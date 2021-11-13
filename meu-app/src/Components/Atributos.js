import React from "react";

const Atributos = () => {
    const abre = 8;
    const agora = new Date().getHours();
    console.log(agora);
  return (
    <div>
        <h3 className={agora > abre ? "aberto" : "fechado"}>ATRIBUTOS</h3>

    </div>
  );
};

export default Atributos;