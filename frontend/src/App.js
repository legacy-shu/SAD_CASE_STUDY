import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { signInWithGoogle } from './Auth';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UoPS Attendace
            </Typography>
            <Button onClick={signInWithGoogle} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <h1>{localStorage.getItem('name')}</h1>
        <h1>{localStorage.getItem('email')}</h1>
        <img src={localStorage.getItem('photo')} alt=""></img>
      </Box>
    </ThemeProvider>
  );
}

export default App;
