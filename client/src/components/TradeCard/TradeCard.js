import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

import LikeDislikeBtnGroup from "../ThumbUpCard/ThumbUpCard";

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

          <LikeDislikeBtnGroup />
        </Card.Body>
      </Card>
    </div>
  );
}
