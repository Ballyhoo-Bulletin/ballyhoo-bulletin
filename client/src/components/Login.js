import React, { useRef, useState, Component } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import Home from "../pages/Home";

// can check current user by {currentUser && CurrentUser.email or .whatever}

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Login failed!");
    }

    setLoading(false);
  }

  return (
    <div>
      <Card ClassName="card">
        <Card.Body>
          <h2 className="text-center mb-4">login</h2>
          {/* {currentUser.email} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              login
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center-mt-2">
        Need an account?{" "}
        <span
          onClick={props.signup}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
}
