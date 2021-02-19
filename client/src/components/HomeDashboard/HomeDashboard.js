import React from "react";
import "./style.css";

import TradeCard from "../TradeCard/TradeCard";

const HomeDashboard = () => {
  return (
    <div className="container">
      <div>
        <p>Dashboard</p>
      </div>
      <div className="col-md-6">
        <TradeCard />
      </div>
    </div>
  );
};

export default HomeDashboard;

{
  /* <Header />
    <div className="container">
  
      <main className="main">
        <Container>
          <div className="container">
            <div className="row">
                <div className="col-md-2">
                  
                <SideNavbar />
                </div>
                <div className="col-md-10">
        <p>Dashboard</p>
      </div>
      <div className="row">
        <div className="col-md-2">
          <p>thrumup with icon</p>
        </div>
        <div className="col-md-10">
          <TradeCard />
        </div>
      </div> */
}
