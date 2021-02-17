import React, { useRef } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const TradePostForm = () => {
  // ref attached to Form.Control, where to call ReactDOM.findDOMNode(ref) ?
  const groupRef = useRef();
  const bodyRef = useRef();
  const tradeRef = useRef();
  const photoRef = useRef();

  // state management:
  // "../utils/GlobalState"
  // ../../utils/actions

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePost({
      group: groupRef.current.value,
      body: bodyRef.current.value,
      trade: tradeRef.current.value,
      photo: photoRef.current.value,
    })
      .then((result) => {
        //global store needs to be setup before doing anything with reducerHook
        console.log(result);
      })
      .catch((err) => console.log(err));

    bodyRef.current.value = "";
  };

  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What do you want to trade?</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="TradeGroups1">
            <Form.Label>Select Trade Item</Form.Label>
            <Form.Control ref={groupRef} as="select">
              <option>Skills</option>
              <option>Item</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="TradeGroups2">
            <Form.Label>Example multiple select</Form.Label>
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
            <Form.Control ref={bodyRef} as="textarea" rows={3} />
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
      </Container>
    </div>
  );
};

export default TradePostForm;
