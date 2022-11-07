import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  TextField,
  Box,
  Button,
} from '@mui/material';
import { useEffect } from 'react';

const Register = ({ attendanceService, user }) => {
  const [session, setSession] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const registered = await attendanceService.registerAttendance(
      data.get('passcode'),
      user.email
    );
    if (registered) {
      setSession(registered);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await attendanceService.getCurrentSession();
      setSession(data);
    }
    fetchData();
  }, []);

  return (
    <Container fixed>
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
        <Typography variant="h5" component="div">
          {`${
            session?.students?.filter((s) => s.email === user.email)?.[0]?.name
          } has been registered!`}
        </Typography>
      )}
      {session ? (
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={`https://picsum.photos/200/300?random=${session?._id}`}
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {session?.date}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {session?.activity_name}
            </Typography>
            <Typography gutterBottom variant="body" component="div">
              {session?.time}
            </Typography>
            <Typography gutterBottom variant="body" component="div">
              {session?.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {session?.staff_members?.[0]?.name}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {session?.isOpened}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </Container>
  );
};

export default Register;
