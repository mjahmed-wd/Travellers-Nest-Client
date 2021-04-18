import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../ProvideAuth/ProvideAuth";
// import { UserContext } from "../../App";
// import { handleSignOut } from "../Login/FirebaseRefectored";
import "./Header.css";

const Header = () => {
//   const [user, setUser] = useContext(UserContext);
const {currentUser,auth}=useContext(AuthContext)

  const handleLogOut = () => {
    auth.signout().then((res) => console.log("user singed out response"));
  };
  let history = useHistory();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-dark bg-dark"
        sticky="top"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Travellers Nest</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {currentUser===null && (
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    backgroundColor: "#EFA522",
                    borderRadius: "5px",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  Login
                </Link>
              )}

              {currentUser && (
                <NavDropdown title={currentUser?.displayName} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <img src={currentUser?.photoURL} className="img-fluid img-thumbnail" alt=""/>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="w-100">
                  <h6 onClick={currentUser?.role==="Admin"?()=>history.push('/manageOrders'):()=>history.push('/orders')}>DashBoard</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="w-100">
                      <h6 onClick={()=>history.push('/orders')}>
                      My Activity
                      </h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <button
                      onClick={() => handleLogOut()}
                      className="btn btn-warning"
                    >
                      Log Out
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;