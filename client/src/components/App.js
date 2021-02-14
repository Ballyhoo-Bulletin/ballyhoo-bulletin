import React, { Component } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import "./App.css";

// function App() {
//   return (
//     <Container
//       className="d-flex align-ites-center justify-content-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-100" style={{ maxWidth: "400px" }}>
//         <Router>
//           <AuthProvider>
//             <Switch>
//               <PrivateRoute exact path="/" component={Dashboard} />
//               <Route path="/signup" component={Signup} />
//               <Route path="/login" component={Login} />
//             </Switch>
//           </AuthProvider>
//         </Router>
//       </div>
//     </Container>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="application">
        <main className="main">
          {/* <div className="wrapper"> */}
          <Container>
            <Jumbotron />
          </Container>
          <Container>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
            {/* </div> */}
          </Container>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
