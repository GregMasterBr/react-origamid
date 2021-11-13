import React from "react";

const Home = () => {
    const nav =(
        <nav>
            <ul>
                <li>Teste de criação de componente JSX de forma externa</li>
            </ul>
        </nav>    
    );

    const nome = "Gregorio Queiroz";
    const idade = 30;

    function meuNome() {
        return "GregMaster";
    }
    
      function quadrado(x) {
        return x * x;
    }
    
      const Carro = {
        rodas: 4,
        marca: "Ford"
    };    

  return (
    <section>
        <h1>Home</h1>
        {nav}
        <br />
        <h2>{nome}</h2>
        <p>{idade >= 18 ? "Pode dirigir" : "Não pode dirigir"}</p>
        <hr />
        <br />
        <div>
            <p>{"MINHA EMPRESA".toLowerCase()}</p>
            <p>{30 * 2}</p>
            <p>{true}</p>
            <p>{undefined}</p>
            <p>{(() => "Função Executada")()}</p>
            <p>{meuNome()}</p>
            <p>{quadrado(2)}</p>
            <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p>
            <p>{Date.now()}</p>
            <p>{new Date().getFullYear()}</p>
            <p>
                Marca: {Carro.marca}, Rodas: {Carro.rodas}
            </p>
        </div>
        <hr />
        <br />        
    </section>
  );
};

export default Home;