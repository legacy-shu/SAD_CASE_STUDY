import * as React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import BasicCard from './components/Card';
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
        <Grid container spacing={2}>
          {sessions.map((session) => (
            <BasicCard
              activity_name={session.activity_name}
              time={session.time}
              location={session.location}
              staff={session['staff-members'][0].name}
            ></BasicCard>
          ))}
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
