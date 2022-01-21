import React,{useState, useEffect} from 'react';
import teste from './services/api/teste.json';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './Routes/AppRoutes';
function App() {
  const productItems = teste;
  const [cartItems, setCartItems] = useState([])
  const handleAddProduct = (product) =>{
    const productExists = cartItems.find((item) => item.id === product.id)

    productExists ?
      setCartItems(cartItems.map((item, key) => (item.id === product.id ?
      {...productExists, quantity: productExists.quantity + 1}: item)))
    :
      setCartItems([...cartItems, {...product, quantity: 1}])
  }
  const handleRemoveProduct = (product) =>{
    const productExists = cartItems.find((item) => item.id === product.id)

  }
  return (
    <div className="App">
      <Router>
      <Header/>
      <AppRoutes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router>
    </div>
  );
}

export default App;
