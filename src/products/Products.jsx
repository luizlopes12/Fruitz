import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const Products = ({ productItems, handleAddProduct }) => {
  const [open, setOpen] = useState({});
  const handleClick = (id) => {
    setOpen((open) => ({ ...open, [id]: !open[id] }));
  };
  return (
    <div className="container mb-5 products-container">
      <div className="row d-flex justify-content-center">
        {productItems.map((item) => {
          return (
            <div key={item.id} className="col-lg-3 col-md-4 col-12 text-center">
              <div className="card my-3">
                <div className="example-img">Item image</div>
                <div className="card-body">
                  <h5 className="card-title fs-6">{item.name}</h5>
                  <button
                    className="showinfo-btn"
                    onClick={() => handleClick(item.id)}
                  >
                    More info<i className="bi bi-caret-down-fill"></i>
                  </button>
                  <Collapse in={open[item.id]}>
                    <div
                      key={item.id}
                      id="example-collapse-text"
                      className="collapsedText"
                    >
                      <ul className="list-group list-group-flush nutri-info">
                        <li className="list-group-item text-start d-flex justify-content-between py-1 px-2">
                          carbohydrates:
                          <span>{item.nutritions.carbohydrates}</span>
                        </li>
                        <li className="list-group-item text-start d-flex justify-content-between py-1 px-2">
                          protein: <span>{item.nutritions.protein}</span>
                        </li>
                        <li className="list-group-item text-start d-flex justify-content-between py-1 px-2">
                          fat: <span>{item.nutritions.fat}</span>
                        </li>
                        <li className="list-group-item text-start d-flex justify-content-between py-1 px-2">
                          calories: <span>{item.nutritions.calories}</span>
                        </li>
                        <li className="list-group-item text-start d-flex justify-content-between py-1 px-2">
                          sugar: <span>{item.nutritions.sugar}</span>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                  <p className="mt-2">
                    <button
                      onClick={() => handleAddProduct(item)}
                      className="btn btn-success"
                    >
                      Add to cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /* {item.name}
                <div>
                  <> add to cart </>
                </div> */
}
export default Products;
