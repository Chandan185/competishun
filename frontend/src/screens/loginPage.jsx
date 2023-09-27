import React, { useEffect, useState } from 'react';
import { Form ,Button, Container,Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {useAlert} from 'react-alert';
import { LoginclearErrors,LoginUser } from '../store/Actions/UserActions';
import Loader from '../Components/Loader';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isauthenticated, loading, error } = useSelector(
    (state) => state.login
  );
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const alert=useAlert();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(LoginclearErrors());
    }
    if (isauthenticated) {
      navigate("/");
    }
  }, [isauthenticated, navigate, alert, dispatch, error]);
  const LoginsubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
  };

  return (
    <Container className='d-flex justify-content-center align-items-center mt-5'>
      
    {loading ? (<Loader/>) :(
      <Form onSubmit={LoginsubmitHandler} className='p-4'>
      <Form.Group>
        <Form.Label htmlFor="Email">Email:</Form.Label>
        <Form.Control
          type="email"
          id="email"
          placeholder='Enter your email'
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
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Row className='m-auto '>
      <Button type="submit" className='mt-3'>Login</Button>
      </Row>
      <Row className='text-center mt-1'>
      <LinkContainer to='/register'>
      <NavLink to='/register'>register here</NavLink>
      </LinkContainer>
      </Row>
    </Form>
    )}
    </Container>
  );
}

export default LoginPage;
