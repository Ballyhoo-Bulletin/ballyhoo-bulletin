import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <div className="sidenav">
      <ul className="nav flex-column">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Dashboard<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/tradepost">
            Trade Post
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/login">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;

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
