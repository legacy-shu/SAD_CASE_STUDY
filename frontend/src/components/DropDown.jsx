import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo({ attendanceService, getStudents }) {
  const [sessions, setSessions] = useState([]);
  const [id, setId] = useState();

  const handleChange = (event) => {
    const id = event.target.value;
    setId(id);
  };
  useEffect(() => {
    async function fetchData() {
      const data = await attendanceService.getAllSessions();
      setSessions(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await attendanceService.getSession(id);
      getStudents(data.students, id);
    }
    fetchData();
  }, [id]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: 'inherit',
          }}
          variant="standard"
        >
          Select session
        </InputLabel>
        <NativeSelect
          onChange={handleChange}
          sx={{
            color: 'inherit',
          }}
        >
          <option aria-label="None" value="" />

          {sessions.map((session) => (
            <option key={session._id} value={`${session._id}`}>
              {`${session.date} ${session.time} ${session.activity_name}`}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
