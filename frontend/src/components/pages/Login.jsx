import React from 'react';
import LoginForm from '../LoginForm';
import { Container } from '@mui/material';
const Login = ({ authService, login }) => {
  const requestLogin = async (data) => {
    const res = await authService.login(
      data.get('email'),
      data.get('password')
    );
    login(res);
  };
  return (
    <Container fixed>
      <LoginForm loginHandle={requestLogin}></LoginForm>
    </Container>
  );
};

export default Login;
