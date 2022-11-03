import React from 'react';
import Nav from '../components/Nav';
import LoginForm from '../components/LoginForm';
import { Container } from '@mui/material';

const Login = () => {
  return (
    <Container fixed>
      <Nav></Nav>
      <LoginForm></LoginForm>
    </Container>
  );
};

export default Login;
