import * as React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import { MUICard } from './components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'moment/moment.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  const [sessions, setSessions] = useState([]);
  const getData = async () => {
    const sessions = await (await fetch('/sessions')).json();
    setSessions(sessions);
  };
  const onSessionClick = (session) => {
    console.log(session);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Button variant="contained" onClick={getData}>
              Contained
            </Button>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Box sx={{ width: '100%' }}>
        <h1>{moment().format('YYYY-MM-DD')}</h1>
        <Grid container spacing={0.5}>
          {sessions.map((session, index) => (
            <MUICard
              activity_name={session.activity_name}
              time={session.time}
              location={session.location}
              staff={session['staff-members'][0].name}
              img={`https://picsum.photos/200/300?random=${index}`}
            ></MUICard>
          ))}
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
