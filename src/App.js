import "bootstrap/dist/css/bootstrap.min.css";
import ItemListCont from "./components/NavBar/ItemListCont";
import NavBar from "./components/NavBar/NavBar";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/NavBar/navbar.css';
import { ItemDetailCont } from "./components/ItemDetailCont/ItemDetailCont";




;
function App() {
  return (
<BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path="/" element= { <ItemListCont greeting="Bienvenidos a tienda shop"/> } />
        <Route path="/category/:categoryId" element={ <ItemListCont/> } />
        <Route path="/item/:id" element={ <ItemDetailCont/> } />
        <Route path="*" element= { <NotFound/> } />
      </Routes>

      </BrowserRouter>
  );
}

export default App;

