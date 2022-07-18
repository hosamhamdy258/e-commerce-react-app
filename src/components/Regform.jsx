import React, { Fragment, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/authSlice";
import { NavLink } from "react-router-dom";


export default function Regform() {
  const state = useSelector((state) => state.authSlice);

  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(registerUser(data));
    console.log(data);
    email.current.value = null;
    password.current.value = null;
  };
  return (
    <Fragment>
      <div className="container-fluid my-md-5">
        <div className="row">
          <div id='slogan' className="col-md-6 mt-md-5 d-none d-md-block">
            <span className="display-1 mt-5"> Easy Shop</span>
            <span className="text-danger"> A shop that cares about you</span>
          </div>
          <div className="col-md-4 my-5 container-fluid">
            {/* <div className="mb-2">
                <Button variant="danger" size="lg" >
                Login
                </Button>{' '}
                <Button variant="secondary" size="lg" >
                Register
                </Button>
              </div> */}
            <Form
              onSubmit={handlesubmit}
              className="my-md-5 d-grid gap-2 p-3 bg-light"
            >
              <Form.Text className="text-muted mb-3">
                Welcome, please register your info:
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={password}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <Form.Text className="text-muted mb-2">
                Already a user? Sign in <br />{" "}
                <Button variant="warning" className="btn-sm">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </Button>
              </Form.Text>
                {state.regmsg && <span>{state.regmsg}</span>}
              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="btn btn-primary "
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
