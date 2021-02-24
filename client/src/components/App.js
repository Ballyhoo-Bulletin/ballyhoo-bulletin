import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Dashboard/Profile";
import Home from "../pages/Home";
import TradePostFormPage from "../pages/TradePostFormPage";
import Signup from "./signup";
import Login from "./Login";
import "./App.css";
import TransHistory from "./History/TransHistory";

function App() {
  return (
    <Container fluid="sm"
      className="justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row xs={2}>
        <Col> 1 of 1</Col>

      
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute
                exact
                path="/tradepost"
                component={TradePostFormPage}
              />
              <PrivateRoute exact path="/transhistory" component={TransHistory} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      
      </Row>
    </Container>
  );
}

export default App;

