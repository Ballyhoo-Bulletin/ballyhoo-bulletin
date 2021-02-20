import React from "react";
import Header from "../components/Header/Header";
import { Container } from "react-bootstrap";
import SideNavbar from "../components/Nav/SideNavbar";
import HomeDashboard from "../components/HomeDashboard/HomeDashboard";

const Home = () => {
  return (
    <div>
      <SideNavbar />
      <Header />
      <main className="main">
        <Container>
          <div className="container">
            <div className="row">
             
              <div className="col-md-10">
                <HomeDashboard />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;


