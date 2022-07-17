import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/cartSlice";

export default function Home({ productList }) {
  // console.log(productList);

  const dispatch = useDispatch();

  const addButton = (item) => {
    dispatch(addProduct(item));
    // dispatch(getCart());
  };
  const removeButton = (item) => {
    dispatch(removeProduct(item));
    // dispatch(getCart());
  };
  return (
    <div>
      {productList &&
        productList.map((item) => {
          return (
            <li key={item.id}>
              <Button
                className="btn-info m-1"
                onClick={() => removeButton(item)}
              >
                remove
              </Button>
              <button className="btn-info m-1" onClick={() => addButton(item)}>
                {item.title}
              </button>
            </li>
          );
        })}
    </div>
  );
}
