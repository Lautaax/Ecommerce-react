import "bootstrap/dist/css/bootstrap.min.css";
import ItemListCont from "./components/NavBar/ItemListCont";
import NavBar from "./components/NavBar/NavBar";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/NavBar/navbar.css";
import { ItemDetail } from "./components/ItemDetailCont/ItemDetail";
import GlobalProvider from "./context/GlobalProvider";
import { Cart } from "./components/cart/Cart";
import Check from "./components/Cheking/Check";

function App() {
    return (
      <BrowserRouter>
        <GlobalProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListCont greeting="Bienvenidos a tienda shop" />}
            />
            <Route path="/category/:categoryId" element={<ItemListCont />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Check" element={<Check />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    );
  }


export default App;
