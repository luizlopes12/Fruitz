import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../products/Products";
import Cart from "../cart/Cart";
const AppRoutes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClear
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
