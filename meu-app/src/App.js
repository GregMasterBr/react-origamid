import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Listas from "./Components/Listas";
import Pessoa from "./Pages/Pessoa";
const App = () =>{
  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu App - Greg
        </p>
      </nav>
      <Header />
      <Home />
      <Produtos />
      <Listas />
      <Pessoa />
    </div>
  );
}

export default App;
