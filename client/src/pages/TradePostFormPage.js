import React from "react";
import Header from "../components/Header/Header";
import TradePostForm from "../components/TradePostForm/TradePostForm";
import { Container } from "react-bootstrap";

const TradePostFormPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Container>
          <h2>Trade Post Form</h2>
          <TradePostForm />
        </Container>
      </main>
    </div>
  );
};

export default TradePostFormPage;
