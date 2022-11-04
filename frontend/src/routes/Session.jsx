import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import MUICard from '../components/Card';
import { Container } from '@mui/material';

const Session = () => {
  const { id } = useParams();
  const [session, setSession] = useState();
  const [passcode, setPasscode] = useState();

  const openSession = (data) => {
    setPasscode(data.passcode);
  };

  const getData = async () => {
    const data = await (await fetch(`/sessions/${id}`)).json();
    console.log(data);
    setSession(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed>
      <Nav></Nav>
      {session ? (
        <MUICard
          session={session}
          openedSession={true}
          openSession={openSession}
          passcode={passcode}
        ></MUICard>
      ) : null}
    </Container>
  );
};

export default Session;
