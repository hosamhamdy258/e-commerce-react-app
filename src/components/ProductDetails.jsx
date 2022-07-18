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
                        src={item.images[2]}
                        className="my-3"
                      />
                      {/* <Card.Text>
                        <b>Description: </b>
                        {item.description}
                      </Card.Text>
                        {obj.description}
                      </Card.Text> */}
                      <hr></hr>
                      <blockquote className="blockquote mb-0">
                        <p>
                          {" "}
                          <b>Description: </b>
                          {item.description}{" "}
                        </p>
                      </blockquote>
                    </td>
                    <td>
                      <Card.Img src={item.images[2]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={item.images[3]} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card.Img src={item.images[4]} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </th>
            <th style={{ width: "40%" }}>
              <Card.Body>
                <Card.Title>Product Name: {item.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
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
