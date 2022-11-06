import React, { useState, useEffect } from 'react';
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
const Register = () => {
  const [session, setSession] = useState();
  const getData = async () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed>
      <Box
        sx={{ m: 5, flexDirection: 'column' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          fullWidth
          label="Enter Passcode"
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
        />
        <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Register your attendance
        </Button>
      </Box>
      {session ? (
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={`https://picsum.photos/200/300?random=${session._id.$oid}`}
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {session.date}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {session.activity_name}
            </Typography>
            <Typography gutterBottom variant="body" component="div">
              {session.time}
            </Typography>
            <Typography gutterBottom variant="body" component="div">
              {session.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {session.staff_members[0].name}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {session.isOpened}
            </Typography>
          </CardContent>{' '}
        </Card>
      ) : null}
    </Container>
  );
};

export default Register;
