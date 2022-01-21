import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Products from '../products/Products';
import Cart from '../cart/Cart';
const AppRoutes = ({productItems}) => {
  return <div>
      <Routes>
          <Route path='/' exact element={<Products productItems={productItems}/>}/>
          <Route path='/cart' exact element={<Cart productItems={productItems}/>}/>
      </Routes>
  </div>;
};

export default AppRoutes;
