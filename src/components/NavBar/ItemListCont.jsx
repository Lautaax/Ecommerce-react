import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemDetailCont/ItemList";
import { useParams } from "react-router-dom";
import { allProducts, productsByCategory } from "../../services/firebase";
import { Loader } from "../Loader/Loader";


const ItemListCont = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    allProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
    productsByCategory(categoryId).then((res) => setCategory(res));
  }, [categoryId]);

  return (
    <div className="container">
      {loading ? <Loader /> :
        <div className="row gap-2">
          {categoryId
            ? category.map((prod) => <ItemList key={prod.id} prod={prod} />)
            : products.map((prod) => <ItemList key={prod.id} prod={prod} />)}
        </div>}
    </div>
  );
};

export default ItemListCont;
