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
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  isOpen,
  setIsOpen,
  attendanceService,
}) {
  const [students, setStudents] = React.useState([]);
  const [selectedIDs, setSelectedIDs] = React.useState([]);
  const [sessionId, setSessionId] = React.useState([]);

  const generateReport = () => {
    const selectedall = students.map((s) => {
      if (selectedIDs.has(s.id)) {
        s.attendance = true;
      }
      return s;
    });
  };
  
  //When close fullscreen, save student attendance selected
  const handleClose = () => {
    const selectedall = students.map((s) => {
      if (selectedIDs && selectedIDs.has(s.id)) {
        s.attendance = true;
      } else {
        s.attendance = false;
      }
      return s;
    });
    async function update() {
      const data = await attendanceService.updateStudentAttendance(
        selectedall,
        sessionId
      );
    }
    console.log(selectedIDs);
    console.log(selectedall);
    console.log(sessionId);

    update();
    setIsOpen(false);
  };

  //Recieve students data through getStudents function from Dropdown component
  const getStudents = (students, id) => {
    setStudents(students);
    setSessionId(id);
  };

  const getSelectedIDs = (selectedIDs) => {
    setSelectedIDs(selectedIDs);
  };

  //When Fullscreen close then reset students data
  React.useEffect(() => {
    return () => {
      setStudents([]);
    };
  }, [isOpen]);

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
                <IconButton onClick={generateReport} color="inherit">
                  <FileDownloadOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <DataTable
          students={students}
          getSelectedIDs={getSelectedIDs}
        ></DataTable>
      </Dialog>
    </div>
  );
}
