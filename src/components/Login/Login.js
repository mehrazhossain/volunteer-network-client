import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-md-center align-items-center vh-100">
        <Form className="border">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h2 className="text-center p-5">Login with</h2>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
