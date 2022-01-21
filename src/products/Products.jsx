import React from 'react';

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div>
        { productItems.map((item, key)=>{
          return(
          <div key={key}>
                {item.name}
                <div>
                  <button onClick={()=>handleAddProduct(item)}> add to cart </button>
                </div>
            </div>
            
          )
            
        })
      }
    </div>

  );
};

export default Products;
