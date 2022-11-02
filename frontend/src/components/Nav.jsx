import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function Nav() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UoPS Attendace
            </Typography>
          </Toolbar>
        </AppBar>
        <img src={localStorage.getItem('photo')} alt=""></img>
      </Box>
    </ThemeProvider>
  );
}

export default Nav;
