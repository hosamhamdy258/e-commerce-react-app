import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

export default function ProductDetails({ productList }) {
  const { id } = useParams();
  // console.log(id);
  console.log(productList);
  const item = productList.find((element) => {
    return element.id == id;
  });

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
                        src={item.thumbnail}
                        className="my-3"
                      />
                      <hr></hr>
                      <Card.Text>
                        <b>Description: </b>
                        {item.description}
                      </Card.Text>
                    </td>
                    <td>
                      <Card.Img src={item.images[1]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={item.images[2]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={item.images[3]} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </th>
            <th style={{ width: "40%" }}>
              <ListGroup className="list-group-flush p-5">
                <ListGroup.Item className="card-subtitle mb-2 text-muted">
                  <b>Product Name: </b>
                  {item.title}
                </ListGroup.Item>
                <ListGroup.Item className="card-subtitle mb-2 text-muted">
                  <b>category: </b>
                  {item.category}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Brand: </b>
                  {item.brand}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Rating: </b>
                  {item.rating}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Price: </b>
                  {item.price}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <b>Stock: </b>
                  {item.stock}
                </ListGroup.Item>
                <ListGroup.Item className="card-text my-1">
                  <Button variant="primary">Add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </th>
          </tr>
        </Table>
      </Card>
    </>
  );
}
