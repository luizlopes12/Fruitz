import React from 'react';

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div>
        {productItems.map((productItem, key)=>{
          return(
          <div key={key}>
                {productItem.name}
                <div>
                  <button onClick={()=>handleAddProduct(productItem)}> add to cart </button>
                </div>
            </div>
            
          )
            
        })}
    </div>

  );
};

export default Products;
