import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MUICard from '../components/Card';
import { Container } from '@mui/material';

const Session = ({ attendanceService }) => {
  const { id } = useParams();
  const [session, setSession] = useState();
  const [passcode, setPasscode] = useState();

  const openSession = (data) => {
    setPasscode(data.passcode);
    console.log(data);
  };

  const getData = async () => {
    const data = await attendanceService.getSession(id);
    setSession(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed>
      {session ? (
        <MUICard
          session={session}
          openedSession={true}
          openSession={openSession}
          passcode={passcode}
          attendanceService={attendanceService}
        ></MUICard>
      ) : null}
    </Container>
  );
};

export default Session;
