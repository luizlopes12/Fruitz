import React, {useState} from 'react';
import {Link} from 'react-router-dom' 
import Collapse from 'react-bootstrap/Collapse';
const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClear, handleRemoveTotalProducts}) => {
    const [open, setOpen] = useState({});
    const handleClick = (id) =>{
    setOpen((open => ({...open, [id]: !open[id]})))
    } 
  return (
      <div className='container'>
          {cartItems.length === 0 &&
          <div className='text-center mt-5'>No items added to cart <br />
          <Link to='/' className='btn btn-success'>See items to add</Link>
          </div>
          }
          <div>
              {cartItems.length >= 1 &&
              <div className="row d-flex justify-content-end">
                <div className="col-sm-2 d-flex justify-content-end">
                <button className='btn btn-success mt-1 mb-3' onClick={()=>handleCartClear()}>Clear cart</button>
                </div>
              </div>
              }
          </div>
          <div className="row d-flex justify-content-start">
          {cartItems.map((item, key)=>(
              <div key={key} className="col-lg-3 col-md-4 col-12 text-center">
                <div className="card my-3">
                <div className="example-img">Item image</div>
                <div className="card-body">
                    <button className="remove-btn btn btn-outline-danger position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-0 fs-2" 
                    onClick={()=>handleRemoveTotalProducts(item)}>
                        <i class="bi bi-x"></i>
                    </button>
                  <h5 className="card-title fs-6">{item.name}</h5>
                  <button className="showinfo-btn" onClick={()=>handleClick(item.id)}>More info<i className="bi bi-caret-down-fill"></i></button>
                  <Collapse in={open[item.id]}>
                  <div key={item.id} id="example-collapse-text" className="collapsedText">
                  <ul className="list-group list-group-flush nutri-info">
                    <li className="list-group-item text-start py-1 px-2">
                      carbohydrates: {item.nutritions.carbohydrates}
                    </li>
                    <li className="list-group-item text-start py-1 px-2">
                      protein: {item.nutritions.protein}
                    </li>
                    <li className="list-group-item text-start py-1 px-2">
                      fat: {item.nutritions.fat}
                    </li>
                    <li className="list-group-item text-start py-1 px-2">
                      calories: {item.nutritions.calories}
                    </li>
                    <li className="list-group-item text-start py-1 px-2">
                      sugar: {item.nutritions.sugar}
                    </li>
                  </ul>
                  </div>
                  </Collapse>
                </div>
                <div className='d-flex justify-content-center mb-4'>
                      <button className='btn btn-success fw-bolder px-3'  onClick={()=> handleAddProduct(item)}>+</button>
                      <div className='rounded border d-flex align-items-center px-4'>{item.quantity}</div>
                      <button className='btn btn-success fw-bolder px-3' onClick={()=> handleRemoveProduct(item)}>-</button>
                  </div>
              </div>
                  
              </div>

          ))}
          </div>
      </div>
  );
};

export default Cart;
