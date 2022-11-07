import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function StickyFooter({ user }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {user ? (
        <Box
          sx={{
            py: 4,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container>
            <Typography
              sx={{
                mr: 1,
              }}
              variant="h6"
            >{`\u2728 Hi ${user.name}, You are logged in as ${user.role}`}</Typography>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}
