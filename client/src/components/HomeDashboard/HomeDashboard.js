import React from "react";
import "./style.css";

import TradeCard from "../TradeCard/TradeCard";

const HomeDashboard = () => {
  return (
    <div className="container">
      <div>
        <p>Dashboard</p>
      </div>
      <div className="row">
        <div className="col-md-2">
          <p>thrumup with icon</p>
        </div>
        <div className="col-md-10">
          <TradeCard />
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
