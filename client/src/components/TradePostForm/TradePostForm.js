import React, { useRef } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const TradePostForm = () => {
  // ref attached to Form.Control, where to call ReactDOM.findDOMNode(ref) ?
  const needRef = useRef();
  const descriptionRef = useRef();
  const tradeRef = useRef();
  const photoRef = useRef();

  // state management:
  // "../utils/GlobalState"
  // ../../utils/actions

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.saveTrade({
      need: needRef.current.value,
      trade: tradeRef.current.value,
      description: descriptionRef.current.value,
      photo: photoRef.current.value,
    })
      .then((result) => {
        //global store needs to be setup before doing anything with reducerHook
        console.log(result);
      })
      .catch((err) => console.log(err));

    needRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>What do you want to trade?</Form.Label>
          <Form.Control ref={needRef} type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="TradeGroups2">
          <Form.Label>Trade you for:</Form.Label>
          <Form.Control ref={tradeRef} as="select" multiple>
            <option>Cooking</option>
            <option>Cleaning</option>
            <option>Childcare</option>
            <option>Education</option>
            <option>Landscaping</option>
            <option>Mechanical</option>
            <option>Petcare</option>
            <option>Technical</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control ref={descriptionRef} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
          <Form.File ref={photoRef} id="UploadPhoto" label="Upload Photo" />
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Post Trade</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default TradePostForm;
