import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MUICard from '../Card';
import { Container } from '@mui/material';

const Session = ({ attendanceService }) => {
  const { id } = useParams();
  const [session, setSession] = useState();

  const openSession = (data) => {
    setSession(data);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await attendanceService.getSession(id);
      setSession(data);
    }
    fetchData();
  }, []);
  

  return (
    <Container fixed>
      {session ? (
        <MUICard
          session={session}
          openedSession={true}
          openSession={openSession}
          attendanceService={attendanceService}
        ></MUICard>
      ) : null}
    </Container>
  );
};

export default Session;
