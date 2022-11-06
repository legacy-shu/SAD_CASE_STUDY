import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MuiSwitch = ({ openSession, attendanceService }) => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const getData = async () => {
    const data = await attendanceService.openSession(id, !checked)
    openSession(data);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    getData();
  };
  return (
    <Box>
      <FormControlLabel
        label="Open a session"
        control={<Switch checked={checked} onChange={handleChange}></Switch>}
      ></FormControlLabel>
    </Box>
  );
};

export default MuiSwitch;
