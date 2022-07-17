import React, { useRef, Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

export default function Login() {

  const email = useRef(null)
  const password = useRef(null)


  const dispatch = useDispatch();

  const handlesubmit = (e) =>{
    e.preventDefault();
    // const data = {
    //   email: email.current.value,
    //   password: password.current.value
    // };
    // dispatch()
    console.log(email.current.value);
    email.current.value = null;
    password.current.value = null;
  }

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
          <Form onSubmit={handlesubmit} className="my-md-5 d-grid gap-2 p-3 bg-light">
          <Form.Text className="text-muted mb-3">
                Welcome, please enter your info:
              </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={password}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            <Button variant="danger" type="submit" size="lg" className="btn btn-primary ">
              Register
            </Button>
          </Form>
        </div>
      </div>
      </div>
            
    </Fragment>
  )
}
