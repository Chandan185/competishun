import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Logout } from "../store/Actions/UserActions";
import { useAlert } from "react-alert";
const Header = () => {
  const { user, loading } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const alert = useAlert();
  const LogoutHandler = async () => {
    dispatch(Logout());
    alert.success("Logged out successfully");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MyList</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <Button onClick={LogoutHandler}>Logout</Button>
              ) : (
                !loading && (
                  <LinkContainer to="/login">
                    <Nav.Link href="/login">
                      <Button>Login</Button>
                    </Nav.Link>
                  </LinkContainer>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
