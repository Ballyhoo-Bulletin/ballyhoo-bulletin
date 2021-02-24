import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const styles = {
  text: {
    textAlign: "center",
  },
};

export default function TradeCard(props) {
  const { currentUser } = useAuth();
  // console.log(props);
  return (
    <div>
      <Card style={{ width: "25rem", margin: "20px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={styles.text}>
          <Card.Title>User:  {props.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>I need: {props.need}</ListGroup.Item>
            <ListGroup.Item>
              And can trade you for: {props.trades}
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>
            Additional info:
            {`  ${props.description}`}
          </Card.Text>
          <Button {...props} variant="primary">Claim</Button>
        </Card.Body>
      </Card>
    </div>
  );
}






// import React, { useState, useEffect } from "react";
// import { Card, Button, ListGroup } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
// import axios from "axios";
// import UploadImage from "../UploadImage/UploadImage";

// import LikeDislikeBtnGroup from "../ThumbUpCard/ThumbUpCard";

// const styles = {
//   text: {
//     textAlign: "center",
//   },
// };

// export default function TradeCard(props) {
//   const { currentUser } = useAuth();

//   console.log(props);
//   return (
//     <div>
//       <Card style={{ width: "25rem", margin: "20px" }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body style={styles.text}>
//           <Card.Title>User:{}</Card.Title>
//           <ListGroup variant="flush">
//             <ListGroup.Item>I need: {props.need}</ListGroup.Item>
//             <ListGroup.Item>
//               And can trade you for: {props.trades}
//             </ListGroup.Item>
//           </ListGroup>
//           <Card.Text>
//             Additional info:
//             {props.description}
//           </Card.Text>
//           {/* <UpLoadImage></UpLoadImage> */}
//           <Button variant="primary">Claim</Button>

//           <LikeDislikeBtnGroup />
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

//===================================================================
