import React from 'react';

const Products = ({productItems}) => {
  return (
    <div>
        {productItems.map((productItem, key)=>{
          return(
          <div>
                {productItem.name}
                <div>
                  <button> add to cart </button>
                </div>
            </div>
            
          )
            
        })}
    </div>

  );
};

export default Products;
