import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import NotFound from './Pages/NotFound';
import Formulario from './Components/Formulario';
import Header from "./Pages/Header";


// Link: cria um link para a rota
// Route: define o que irá aparecer na tela, caso o path seja ígual ao URL
// Switch: garante que apenas um route seja ativado por vez
// BrowserRouter: necessário para fazer o router funcionar (deve envolver links e routes)

const App = () => {
  return (
    <div >
    <Header />
    <Router>
      <Routes>
        <Route  exact  path="/produtos" element={<Produtos />} />
        <Route  path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario/>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </Router>
    </div>
  );
};

export default App;
