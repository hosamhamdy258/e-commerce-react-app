
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function ProductDetails() {
  const obj = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],
  };
  return (
    <>
      <Card className="p-3 bg-light">
        <Table bordered hover className="p-2">
          <tr>
            <th style={{ width: "45%" }}>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <td colSpan={3} rowSpan={3} style={{ width: "67%" }}>
                      <Card.Img
                        variant="bottom"
                        src={obj.images[2]}
                        className="my-3"
                      />
                      <Card.Text>
                        <b>Description: </b>
                        {obj.description}
                      </Card.Text>
                    </td>
                    <td>
                      <Card.Img src={obj.images[2]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={obj.images[3]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={obj.images[4]} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </th>
            <th style={{ width: "40%" }}>
              <Card.Body>
                <Card.Title>Product Name: {obj.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="card-subtitle mb-2 text-muted">
                  <b>category: </b>
                  {obj.category}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Brand: </b>
                  {obj.brand}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Rating: </b>
                  {obj.rating}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Price: </b>
                  {obj.price}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Stock: </b>
                  {obj.stock}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </th>
          </tr>
        </Table>
      </Card>
    </>
  );
}

