import React from "react";
import { connect } from "react-redux";
import { Button, Form, Row, Col } from 'react-bootstrap';

export const TradePostForm = ({ toTrade, name,id, createTradePost}) => (
  <>
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>What do you want to trade?</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="TradeGroups1">
    <Form.Label>Select Trade Item</Form.Label>
    <Form.Control as="select">
      <option>Skills</option>
      <option>Item</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="TradeGroups2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
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
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="UploadPhoto" label="Upload Photo" />
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={ () => createTradePost(id)} type="submit">Post Trade</Button>
    </Col>
  </Form.Group>
</Form>
  </>
);

const mapStateToProps = (state, ownProps) =>{
    let groupID = ownProps.id;
    return{
        name: ownProps.name,
        id: groupID,
        toTrade: state.toTrade.filter(trade => trade.group === groupID)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTradePost(id) {
            console.log("Creating new trade post", id);
        }
    }
}




export const ConnectedTradePostForm = connect(mapStateToProps, mapDispatchToProps)(TradePostForm);