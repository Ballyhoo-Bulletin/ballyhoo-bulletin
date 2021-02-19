import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Signup from "../components/signup";
import Login from "../components/Login";
import Jumbotron from "../components/Jumbotron/Jumbotron";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Nav/Navbar";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Jumbotron />
      </Container>
      {isLogin ? (
        <Login signup={() => setIsLogin(false)} />
      ) : (
        <Signup login={() => setIsLogin(true)} />
      )}
    </>
  );
}
