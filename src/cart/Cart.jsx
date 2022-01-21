import React from 'react';

const Cart = ({cartItems, handleAddProduct}) => {
  return (
      <div>
          {cartItems.map((item, key)=>(
              <div key={key}>
                  <div>
                    {item.name}
                  </div>
                  <div>
                      <button onClick={()=> handleAddProduct(item)}>+</button>
                      <button onClick={()=> handleRemoveProduct(item)}>-</button>
                  </div>
              </div>

          ))}
      </div>
  );
};

export default Cart;
