import React, { useState, useEffect } from "react";
import Api from "./services/api/api";
import localData from "./services/api/localData.json";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/Footer";
function App() {
  const [data, setData] = useState(localData);
  /*
  //////////////////
  Não consegui entrar na api por erro de CORS, então peguei os dados pelo postman e coloquei no localData.json
  /////////////////
  */
    useEffect(() => {
    Api.get("/api/fruit/all")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  data.length === 0 && setData(localData);


  const productItems = localData;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    productExists
      ? setCartItems(
          cartItems.map((item, key) =>
            item.id === product.id
              ? { ...productExists, quantity: productExists.quantity + 1 }
              : item
          )
        )
      : setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };
  const handleRemoveProduct = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    productExists.quantity === 1
      ? setCartItems(cartItems.filter((item) => item.id !== product.id))
      : setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExists, quantity: productExists.quantity - 1 }
              : item
          )
        );
  };
  const handleRemoveTotalProducts = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    productExists.quantity >= 0 &&
      setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <AppRoutes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleRemoveTotalProducts={handleRemoveTotalProducts}
          handleCartClear={handleCartClear}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
