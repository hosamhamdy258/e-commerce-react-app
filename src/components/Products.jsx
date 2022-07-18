// // import React from "react";
import Header from "./Maha/Header";
import FilteredProductsShow from "./Maha/FilteredProductsShow";
import Upper from "./Maha/Upper";
import "./Maha/Header.css";
import { addProduct } from "../store/cartSlice";

export default function Products({ productList }) {


  return (
    <>
      <Header />
      <Upper
        productList={productList.filter(function (item) {
          return item.discountPercentage > 13;
        })}
      />
      <h1 className="style_Pro">Our Products</h1>
      <FilteredProductsShow productList={productList} />
    </>
  );
}
