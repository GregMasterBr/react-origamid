import React from 'react';


const Pessoa= () =>{
    const nome = "Gregorio";
    const idade = 30;

    return (
        <section>
            <time>{Date.now()}</time>
            <h3>{nome}</h3>
            <p>{idade >= 18 ? "Pode dirigir" : "Não pode dirigir"}</p>
        </section>
    )
}

export default Pessoa;