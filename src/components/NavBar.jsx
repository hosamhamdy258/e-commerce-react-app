import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { loginUser, logoutUser } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  // console.log(state.products);

  const state = useSelector((state) => state.authSlice);
  const state2 = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();
  const myinfo = {
    email: "hosam@gmail.com",
    password: "pass",
  };
  let cartCount = 0;
  state2.cart.forEach((element) => {
    cartCount += element.count;
  });
  ////////////////////
  const login_handler = () => {
    dispatch(loginUser(myinfo));
  };
  const logout_handler = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Button onClick={() => login_handler()}>login</Button>
              </Nav.Link>
              <Nav.Link href="#home">
                <Button onClick={() => logout_handler()}>logout</Button>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
                {state.isLogged ? (
                  <Button>Welcome {state.user.email}</Button>
                ) : (
                  <Button>login</Button>
                )}
              </Nav.Link>
              <Nav.Link href="#link">{cartCount}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
