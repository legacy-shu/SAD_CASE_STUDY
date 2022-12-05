import React from 'react';
import LoginForm from '../LoginForm';
import { Container } from '@mui/material';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
const Login = ({ authService, login }) => {
  const [error, setError] = useState();
  const requestLogin = async (data) => {
    const res = await authService.login(
      data.get('email'),
      data.get('password')
    );
    if (res.token) {
      login(res);
    } else {
      if (typeof res.message === 'string') {
        setError(res.message);
      }
      if (typeof res.message === 'object') {
        setError(res.message[0].msg);
      }
    }
  };
  return (
    <Container fixed>
      {error ? (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        </Stack>
      ) : null}
      <LoginForm loginHandle={requestLogin}></LoginForm>
    </Container>
  );
};

export default Login;
