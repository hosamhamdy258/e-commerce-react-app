
import React from "react";
import { Table } from "react-bootstrap";

export default function Cart({ productList }) {
  console.log(productList);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productList &&
            productList.map((item) => {
              return (
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-excel"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z" />
                      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    </svg>
                  </td>
                  <td>
                    <img src={item.images[0]} alt="img" width="20px" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.title}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <br />
      <section
        id="cart-add"
        className="div1 row bg-light p-2 mx-2 align-content-center justify-content-between"
      >
        <div id="coupon" className="col-12 col-md-6 p-2">
          <h3 className="bg-info text-light p-2">Apply Coupon</h3>
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter your coupon"
            />
            <div className="d-grid gap-2 p-3">
              <button className="btn btn-info" type="button">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div id="subtotal" className="col-12 col-md-6 p-2">
          <h3 className="bg-info text-light p-2">Cart total</h3>
          <table className="table">
            <tr>
              <td>Cart Subtotal</td>
              <td id="total1">0 EGP</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>free</td>
            </tr>
            <td>
              <strong>Total</strong>
            </td>
            <td id="total2">0 EGP</td>
          </table>
          <div className="d-grid gap-2 p-3">
            <button className="btn btn-info" type="button">
              {" "}
              Proceed to check out{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
