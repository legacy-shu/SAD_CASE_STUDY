import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import MUICard from '../components/Card';
import { Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [sessions, setSessions] = useState([]);

  const getData = async () => {
    const data = await (await fetch('/sessions')).json();
    setSessions(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed>
      <Grid container>
        <Nav></Nav>
        {sessions.map((session) => (
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/sessions/${session._id.$oid}`}
              >
                <MUICard
                  key={session._id.$oid}
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

export default Home;
