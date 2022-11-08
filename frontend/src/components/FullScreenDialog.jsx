import * as React from 'react';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DataTable from './Datatable';
import DropDown from './DropDown';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  isOpen,
  setIsOpen,
  attendanceService,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [students, setStudents] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const getStudents = (students) => {
    setStudents(students);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Students
            </Typography>
            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <DropDown
                attendanceService={attendanceService}
                getStudents={getStudents}
              ></DropDown>
              <Tooltip title="Save">
                <IconButton onClick={handleClose} color="inherit">
                  <SaveOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <DataTable students={students}></DataTable>
      </Dialog>
    </div>
  );
}
