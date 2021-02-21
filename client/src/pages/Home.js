import React from "react";
import Header from "../components/Header/Header";
import { Container } from "react-bootstrap";
import SideNavbar from "../components/Nav/SideNavbar";
import HomeDashboard from "../components/HomeDashboard/HomeDashboard";
import Footer from "../components/Footer/Footer";

const styles = {
  margin: {
    margin: "20px",
  },
};
const Home = () => {
  return (
    <div>
      <SideNavbar />
      <Header />
      {/* <main className="main"> */}
        {/* <Container> */}
          <div className="container">
            <div className="row">
              {/* <div className="col-md-2">
                <SideNavbar />
              </div> */}
              <div className="col-md-10" style={styles.margin}>
                <HomeDashboard />
              </div>
            </div>
          </div>
        {/* </Container> */}
        {/* <Footer /> */}
      {/* </main> */}
    </div>
  );
};

export default Home;

{
  /* <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          
    </Router> */
}
