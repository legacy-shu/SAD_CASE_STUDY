import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Box, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import MUICard from '../Card';

const StudentAttendance = ({ attendanceService, user }) => {
  const [session, setSession] = useState([]);
  const [error, setError] = useState();
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const registered = await attendanceService.registerAttendance(
      data.get('passcode'),
      user.email
    );
    setError(null);
    if (registered) {
      setSession(registered);
    }
    if (typeof registered.message === 'string') {
      setError(registered.message);
    }
    if (typeof registered.message === 'object') {
      setError(registered.message[0].msg);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await attendanceService.getOpenedSessionById(id);
      setSession(data);
    }
    fetchData();
  }, []);

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
      {!session?.students?.filter((s) => s.email === user.email)?.[0]
        ?.attendance ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ m: 5, flexDirection: 'column' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            name="passcode"
            autoFocus
            fullWidth
            label="Enter Passcode"
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
          />
          <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
            Register your attendance
          </Button>
        </Box>
      ) : (
        <Typography variant="h5" component="h2">
          {`🎉 Your attendance has been registered.`}
        </Typography>
      )}

      {session ? <MUICard session={session}></MUICard> : null}
    </Container>
  );
};
export default StudentAttendance;
