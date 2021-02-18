import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import AuthPage from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Signup from "./Signup";

import Footer from "../components/Footer/Footer";
import Auth from "../pages/Auth";

import TradePostFormPage from "../pages/TradePostFormPage";
import "./App.css";
// import Home from "../pages/Home";
import HomeDashboard from "./HomeDashboard/HomeDashboard";
import SideNavbar from "./Nav/SideNavbar";

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
      <div className="application">
        <main className="main">
          <Container>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/auth" component={AuthPage} />
                <PrivateRoute
                  exact
                  path="/tradepost"
                  component={TradePostFormPage}
                />
                <Route exact path="/auth" component={AuthPage} />
              </Switch>
            </AuthProvider>
          </Container>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
