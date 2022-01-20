import React from 'react';
import teste from './services/api/teste.json'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  const {productItems} = teste;
  console.log(productItems)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
