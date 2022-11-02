import * as React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'moment/moment.js';
import { Link } from 'react-router-dom';

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
      <div>
        <h1>{moment().format('YYYY-MM-DD')}</h1>
        <ul>
          {sessions.map((session) => (
            <li key={session._id.$oid}>
              <h2>
                <Link to={`/session/${session._id.$oid}`}>
                  {session.activity_name}
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
