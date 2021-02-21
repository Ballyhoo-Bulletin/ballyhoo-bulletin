import React, { useRef, useState, Component } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

// can check current user by {currentUser && CurrentUser.email or .whatever}

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
<<<<<<< HEAD
      const CFUser = login(emailRef.current.value, passwordRef.current.value);
      console.log("I''m a uid" + CFUser.user.uid);
=======
      await login(emailRef.current.value, passwordRef.current.value);
      // console.log("I''m a uid" + CFUser.user.uid);
>>>>>>> develop
      history.push("/");
    } catch {
      setError("Login failed!");
    }

    setLoading(false);
  }

  return (
    <div className="justify-content-center">
      <Card ClassName="card">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {/* {currentUser && currentUser.email} */}

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="justify-content-center linkMargin text-white">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
