import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container } from '@mui/material';
const Login = ({authService, login}) => {
  const requestLogin = async (data) => {
    const result = await authService.login(data.get('email'), data.get('password'));
    login(result);
  };
  return (
    <Container fixed>
      <LoginForm loginHandle={requestLogin}></LoginForm>
    </Container>
  );
};

export default Login;
