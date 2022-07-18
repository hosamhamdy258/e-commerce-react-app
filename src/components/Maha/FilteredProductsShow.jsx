import React from 'react'
import Header from './Header';
import Upper from './Upper';

const FilteredProductsShow = ({productList}) => {
  return (
<>
<div className="product-content  grid1">
        {productList.map((item) => {
          return (
              <div className="box ">
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
                      <button>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
</>
    )
}

export default FilteredProductsShow