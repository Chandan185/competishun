import { Form, Container, Button, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginclearErrors, RegisterUser } from "../store/Actions/UserActions";
import { useAlert } from "react-alert";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isauthenticated, error } = useSelector((state) => state.login);
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(LoginclearErrors());
    }
    if (isauthenticated) {
      navigate("/");
    }
  }, [isauthenticated, navigate, alert, error,dispatch]);
  const RegisterHandler = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(username, email, password));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={RegisterHandler}>
        <Form.Group>
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="Email">Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Row className="m-auto ">
          <Button type="submit" className="mt-3">
            Register
          </Button>
        </Row>
        <Row className="m-auto ">
          <NavLink to="/login" className='mt-1 text-center '>login here</NavLink>
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterPage;
