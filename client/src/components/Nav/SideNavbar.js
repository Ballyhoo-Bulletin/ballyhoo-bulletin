import React from "react";
import { Link } from "react-router-dom";
// import TradePostForm from “./TradePostForm”;
import { useAuth } from "../../contexts/AuthContext";

const styles = {
  sidenav: {
    height: "100%",
    width: "0",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundColor: "#111",
    // paddingTop: "20%",
  },
  a: {
    padding: "8px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "20px",
    color: "#818181",
    display: "block",
  },
};

export default function SideNavbar() {
  const { logout } = useAuth();
  return (
    <div style={styles.sidenav}>
      <Link className="nav-link" style={styles.a} to="/">
        {" "}
        Dashboard <span className="sr-only">(current)</span>
      </Link>
      <Link className="nav-link" style={styles.a} to="/profile">
        Profile{" "}
      </Link>
      <Link className="nav-link" style={styles.a} to="/tradepost">
        Trade{" "}
      </Link>
      <Link className="nav-link" style={styles.a} to="/transhistory">
        History{" "}
      </Link>
      {/* <Link style={styles.a} to=“/trade” component={TradePostForm}>Trade</Link> */}
      <Link className="nav-link" style={styles.a} to="/login">
        {logout}Logout
      </Link>
    </div>
    //   </div>
    // </div>
    // </div>
  );
}

// function SideNavbar() {
//   return (
//     <div className="sidenav">
//       <ul className="nav flex-column">
//         <li className="nav-item active">
//           <Link className="nav-link" to="/">
//             Dashboard<span className="sr-only">(current)</span>
//           </Link>
//         </li>
//         <li className="nav-item active">
//           <Link className="nav-link" to="/tradepost">
//             Trade Post
//           </Link>
//         </li>
//         <li className="nav-item active">
//           <Link className="nav-link" to="/auth">
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default SideNavbar;

// const instance = (
//   <div style={{ width: 250 }}>
//     <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
//       <Sidenav.Body>
//         <Nav>
//           <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
//             Trade Post
//           </Nav.Item>
//           <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
//             Logout
//           </Nav.Item>
//         </Nav>
//       </Sidenav.Body>
//     </Sidenav>
//   </div>
// );
