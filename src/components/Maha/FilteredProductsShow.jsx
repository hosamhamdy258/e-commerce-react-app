import React from "react";
import { addProduct } from "../../store/cartSlice";
// import Header from './Header';
// import Upper from './Upper';
import { useDispatch } from 'react-redux';

const FilteredProductsShow = ({ productList }) => {
  const dispatch = useDispatch();

  const addButton = (item) => {
    dispatch(addProduct(item));
    // dispatch(getCart());
  };
  return (
    <>
      {/* <div className="product-content  grid1"> */}
      <div className="container mt-5">
        <div className="row">
          {productList.map((item) => {
            return (
              <div className="col-3 card p-2">
                <div className="product">
                  <div className="img">
                    <span className="discount">
                      {item.discountPercentage} % Off
                    </span>
                    <img
                      width="180px"
                      height="180px"
                      src={item.images[0]}
                      alt=""
                    />
                    <div className="product-likes">
                      <label>0</label>
                      <br />
                      <i className="fa fa-heart"></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h6>{item.title}</h6>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h6>{item.price} $</h6>
                      <button onClick={() => addButton(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilteredProductsShow;
