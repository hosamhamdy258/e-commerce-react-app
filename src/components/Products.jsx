
import React from "react";
import Header from "./Maha/Header";
import "./Maha/main.css";
import Upper from "./Maha/Upper";
import FilteredProductsShow from './Maha/FilteredProductsShow';

export default function Products({ productList }) {
  return (
    <>
      <Header />
      <Upper
        productList={productList.filter(function (item) {
          return item.discountPercentage > 13;
        })}
      />
      <h1 className="style_Pro">Products</h1>
      <FilteredProductsShow productList={productList}/>
     
    </>
  );
}
