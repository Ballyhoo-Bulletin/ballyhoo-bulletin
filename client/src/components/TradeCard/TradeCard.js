import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
<<<<<<< HEAD
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
=======

const styles = {
  text: {
    textAlign: "center",
  },
};

export default function TradeCard(props) {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={styles.text}>
          <Card.Title>{props.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>I need: {props.need}</ListGroup.Item>
            <ListGroup.Item>
              And can trade you for: {props.children}
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>
            Additional info:
            {props.description}
          </Card.Text>
          <Button variant="primary">Claim</Button>
>>>>>>> develop
        </Card.Body>
      </Card>
    </div>
  );
}
