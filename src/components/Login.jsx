import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <Fragment>
      <div className="container-fluid my-5">
      <div className="row">
      <div className="col-6 mt-5">
          <br />
          <br />
          <br />
          <br />
          <span className="display-1 mt-5"> Easy Shop</span>
          <span className="text-danger"> A shop that cares about you</span>
        </div>
        <div className="col-4 my-5 container-fluid">
          <Form className="my-5">
          <Form.Text className="text-muted mb-3">
                Welcome, please enter your info:
              </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            <Button variant="danger" type="submit" size="lg" className="btn btn-primary">
              Register
            </Button>
          </Form>
        </div>
      </div>
      </div>

    </Fragment>
  )
}
