import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";
import { useHistory } from "react-router-dom";

const TradePostForm = () => {
  const [options, setOptions] = useState([]);
  const [need, setNeed] = useState({});
  const [description, setDescription] = useState({});
  const photoRef = useRef();
  const history = useHistory();

  function handleSelectChange(e) {
    e.preventDefault();

    // setOptions(e.target.value)
    if (options.includes(e.target.value)) {
      setOptions(options.filter((x) => x !== e.target.value));
    } else {
      setOptions([...options, e.target.value]);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.saveTrade({
      need: need,
      trades: options,
      description: description,
      // photo: photoRef.current.value,
    })
      .then((result) => {
        console.log(result);
        history.push("/");
      })
      .catch((err) => console.log(err));

    // setNeed("");
    // setdescription("");
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>What do you want to trade?</Form.Label>
          <Form.Control
            name="need"
            onChange={(e) =>
              setNeed({ ...need, need: e.target.value })
            }
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="TradeGroups2">
          <Form.Label>Trade you for:</Form.Label>
          <Form.Control
            value={options}
            onChange={handleSelectChange}
            as="select"
            multiple
          >
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
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onChange={(e) =>
              setDescription({ ...description, description: e.target.value })
            }
            as="textarea"
            rows={3}
          />
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
