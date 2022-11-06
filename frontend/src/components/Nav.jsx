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

function ResponsiveAppBar({ attendanceService, authService, user }) {
  const handleLogout = async () => {
    console.log('logout');
    await authService.logout();
    //await attendanceService.openSesion();
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
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              color: '',
            }}
          >
            UoPS Attendance
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user ? (
              <Typography
                sx={{
                  mr: 1,
                }}
                variant="h6"
              >{`Hi, ${user.email}  <${user.role}>`}</Typography>
            ) : null}
          </Box>
          <Box sx={{ p: 0 }}>
            {user?.role === 'admin' ? (
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
            {user ? (
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
