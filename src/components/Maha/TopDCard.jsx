import React from "react";
import "./main.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";

const TopDCard = ({ productList }) => {
  const dispatch = useDispatch();

  const addButton = (item) => {
    dispatch(addProduct(item));
    // dispatch(getCart());
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        focusOnSelect={true}
        pauseOnHover={true}
        rewind={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {productList.map((item) => {
          return (
            <div className="box">
              <div className="product mtop ">
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
      </Carousel>
    </>
  );
};

export default TopDCard;
