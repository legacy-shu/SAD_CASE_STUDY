import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import MUICard from '../components/Card';
import { Container, Grid } from '@mui/material';
import moment from 'moment';

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
      <Nav></Nav>
      <h1>{moment().format('YYYY-MM-DD')}</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {sessions.map((session) => (
          <MUICard
            key={session._id.$oid}
            session={session}
            link={`/sessions/${session._id.$oid}`}
            size={'470px'}
          ></MUICard>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
