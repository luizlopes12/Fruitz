import React from 'react';

const Cart = ({cartItems}) => {
  return (
      <div>
          {cartItems.map((item)=>{
              <div key={item.id}>
                  {item.name}
              </div>
          })}
      </div>
  );
};

export default Cart;
