import React from 'react';
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Pessoa from "./Pages/Pessoa";
import Listas from './Components/Listas';
import Empresa from './Components/Empresa';
import Atributos from './Components/Atributos';
import Linha from './Components/hr';
import Compras from './Components/Compras';
import Colors from './Components/Colors';
import Listas2 from './Components/Listas2';
import Produtos2 from "./Pages/Produtos2";
import Produtos3 from "./Pages/Produtos3";
import Produtos4 from "./Pages/Produtos4";
import Usuario from './Pages/Usuario';
const App= () =>{
    return (
        <div>
            <Header />
            <Usuario />
            <Home />
            <Linha />
            <Linha />
            <Produtos />
            <Pessoa />
            <Listas/>
            <Linha />
            <Empresa/>
            <Atributos />
            <Compras />
            <Linha />
            <Colors /> 
            <Linha />
            <Listas2/>
            <Linha />            
            <Produtos2 />
            <Linha />   
            <Produtos3 />
            <Linha />   
            <Produtos4 />
            <Linha />   

        </div>
    )
}

export default App;