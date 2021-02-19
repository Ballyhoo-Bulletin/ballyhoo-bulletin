import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import LikeDislikeBtnGroup from "../ThumbUpCard/ThumbUpCard";
export default function TradeCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Skills or Item</ListGroup.Item>
            <ListGroup.Item>What's being traded?</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            Maybe the description or meeting place or whatever goes here?
          </Card.Text>
          <Button variant="primary">Claim</Button>
          <LikeDislikeBtnGroup />
        </Card.Body>
      </Card>
    </div>
  );
}
