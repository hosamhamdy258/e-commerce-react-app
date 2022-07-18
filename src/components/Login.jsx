import Button from "react-bootstrap/Button";
import React, { useRef, Fragment } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./../store/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const state = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(loginUser(data));
    console.log(data);
    email.current.value = null;
    password.current.value = null;
  };

  return (
    <Fragment>
      <div className="container-fluid my-md-5">
        <div className="row">
          <div className="col-md-6 mt-md-5">
            <br />
            <br />
            <br />
            <br />
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
                Welcome, please enter your info:
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
                Not a user? Signup <br />{" "}
                <Button variant="warning" className="my-2 btn-sm">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </Button>
              </Form.Text>
              {state.logmsg && <span>{state.logmsg}</span>}
              <Button
                variant="danger"
                type="submit"
                size="lg"
                className="btn btn-primary"
              >
                Login
              </Button>
              {state.isLogged && navigateHome()}
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
