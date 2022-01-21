import React,{useState, useEffect} from 'react';
import teste from './services/api/teste.json';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './Routes/AppRoutes';
function App() {
  const productItems = teste;
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <Router>
      <Header/>
      <AppRoutes productItems={productItems}/>
      </Router>
    </div>
  );
}

export default App;
