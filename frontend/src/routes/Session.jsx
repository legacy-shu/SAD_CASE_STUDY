import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import MUICard from '../components/Card';
import moment from 'moment';
import { Container, Box, Grid } from '@mui/material';

const Session = () => {
  const { id } = useParams();
  const [session, setSession] = useState([]);
  const getData = async () => {
    const data = await (await fetch(`/sessions/${id}`)).json();
    setSession(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container fixed>
      <Nav></Nav>
      <Box display="flex" sx={{ width: '100%' }}>
        <Box m="auto">
          <h1>{moment().format('YYYY-MM-DD')}</h1>
          <Grid container spacing={0.5}>
            {session.map((s) => (
              <MUICard session={s} link={null} size={'1000px'}></MUICard>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Session;
