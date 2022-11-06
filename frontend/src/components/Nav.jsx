import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/School';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

function ResponsiveAppBar({ authService, userRole }) {
  const handleLogout = async () => {
    console.log('logout');
    await authService.logout();
    window.location.href = '/';
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UoPS Attendance
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UoPS Attendance
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ p: 0 }}>
            {userRole?.role === 'admin' ? (
              <>
                <Tooltip title="Create Report">
                  <IconButton color="inherit">
                    <AssessmentOutlinedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit/Register Attendance">
                  <IconButton color="inherit">
                    <AppRegistrationOutlinedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </>
            ) : null}
            {userRole ? (
              <Tooltip title="Logout">
                <IconButton onClick={handleLogout} color="inherit">
                  <ExitToAppOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
