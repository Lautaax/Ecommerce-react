import "bootstrap/dist/css/bootstrap.min.css";
import ItemListCont from "./components/NavBar/ItemListCont";
import NavBar from "./components/NavBar/NavBar";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/NavBar/navbar.css";
import { ItemDetailCont } from "./components/ItemDetailCont/ItemDetailCont";
import GlobalProvider from "./context/GlobalProvider";
import { Cart } from "./components/cart/Cart";
import {
  allProducts,
  productsById,
  productsByCategory,
} from "./services/firebase";
import Check from "./components/Cheking/Check";
import { useEffect, useState } from "react";
import { Oval } from  'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()  =>{
setTimeout(()=>{
setLoading(false);
},2000);
  },[])


  const loader = () => {
    return (
      <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <NavBar />
<div>
<h1>Cargando espere por favor.....   <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/></h1>
</div>
          
        </GlobalProvider>
      </BrowserRouter>
    </div>
    );
  };

  if (loading) {
    return loader();
  } else {
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
            <Route path="/item/:id" element={<ItemDetailCont />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Check" element={<Check />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    );
  }
}

export default App;
