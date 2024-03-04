import { Header } from "../Header/header";
import { ItemListContainer } from "../ItemListContainer/itemListContainer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer text="¡Bienvenido a nuestra página!"/>
    </div>
  );
}

export default App;
