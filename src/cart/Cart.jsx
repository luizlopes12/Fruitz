import React from 'react';

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClear}) => {
  return (
      <div>
          {cartItems.length === 0 &&
          <div>No items added to cart</div>
          }
          <div>
              {cartItems.length >= 1 &&
              <button onClick={()=>handleCartClear()}>Clear cart</button>
              }
          </div>
          {cartItems.map((item, key)=>(
              <div key={key}>
                  <div>
                    {item.name}
                  </div>
                  <div>
                      <button onClick={()=> handleAddProduct(item)}>+</button>
                      <div>{item.quantity}</div>
                      <button onClick={()=> handleRemoveProduct(item)}>-</button>
                  </div>
              </div>

          ))}
      </div>
  );
};

export default Cart;
