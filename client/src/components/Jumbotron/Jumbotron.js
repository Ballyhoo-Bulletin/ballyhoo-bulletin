import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron imgJum" style={{ borderRadius: "15px" }}>
        <h1 className="display-4 text-center myText">The Ballyhoo Bulletin</h1>
        <br></br>
        <h2 className="text-center myText">
          The app that can help you obtain items and services you need without
          spending a dime and while lowering your carbon footprint. Create an
          account today and start shopping for what you need.
        </h2>
      </div>
    </div>
  );
}

export default Jumbotron;
