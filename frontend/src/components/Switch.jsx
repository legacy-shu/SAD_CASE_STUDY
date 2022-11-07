import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MuiSwitch = ({ openSession, attendanceService, passcode }) => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);

  const startSession = async () => {
    const data = await attendanceService.openSession(id, !checked);
    openSession(data);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    startSession();
  };
  useEffect(() => {
    if (passcode) {
      setChecked(true);
    }
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <FormControlLabel
        label="Open session"
        control={<Switch checked={checked} onChange={handleChange}></Switch>}
      ></FormControlLabel>
    </Box>
  );
};

export default MuiSwitch;
