import React, { Fragment } from "react";
import Mycard from "./Mycard";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { addProduct } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";


export default function Mycarousel({ productList }) {
  console.log(productList);
  const dispatch = useDispatch();

  const addButton = (item) => {
    dispatch(addProduct(item));
    // dispatch(getCart());
  };
  return (
    <>
      <Carousel className="bg-dark my-3">
        <Carousel.Item>
          <div className="container">
            {productList.slice(1, 3).map((item) => {
              return (
              <Fragment>
                <Mycard />
                <span className="text-danger">hey</span>               
                <span className="text-danger">allo</span>
                <span className="text-danger">allo</span>

              </Fragment>)  
            })} 
          </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="container">
                  <div><span className="text-danger">allo</span></div>
                  <span className="text-danger">allo</span>
                  <span className="text-danger">allo</span>
                </div>
        </Carousel.Item>
        <Carousel.Item>
                <span className="text-danger">allo</span>               
                <span className="text-danger">allo</span>
                <span className="text-danger">allo</span>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
