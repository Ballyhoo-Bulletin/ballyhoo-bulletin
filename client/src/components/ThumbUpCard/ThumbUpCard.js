import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
// import API from "../../utils/API";

function ThumbUpCard({ postId = "no post id yet", like = 0, dislike = 0 }) {
  const [count, setCount] = useState({ like, dislike });
  const handleClick = (action) => {
    API.likeDislike(postId, action).then((res) => {
      setCount({ ...count, [action]: count[action] + 1 });
    });
  };
  return (
    <>
      <Button onClick={() => handleClick("dislike")}>
        <i className="far fa-thumbs-down">{count.dislike}</i>
      </Button>
      <Button onClick={() => handleClick("like")}>
        <i className="far fa-thumbs-up">{count.like}</i>
      </Button>
    </>
  );
}

export default ThumbUpCard;
