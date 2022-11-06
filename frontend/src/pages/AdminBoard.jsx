import React, { useState, useEffect } from 'react';
import MUICard from '../components/Card';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';

const AdminBoard = ({ attendanceService }) => {
  const [sessions, setSessions] = useState([]);

  const getSessions = async () => {
    const data = await attendanceService.getSessions();
    data.map((s) => console.log(s._id));

    setSessions(data);
  };

  useEffect(() => {
    getSessions();
  }, []);

  return (
    <Container fixed>
      <Grid container>
        {sessions.map((session) => (
          <Grid item xs={12} sm={6} key={session._id}>
            <Box p={1}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/sessions/${session._id}`}
              >
                <MUICard
                  key={session._id}
                  session={session}
                  size={'470px'}
                ></MUICard>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminBoard;
