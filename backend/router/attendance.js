import express from 'express';
import * as attendanceController from '../controller/attendance.js';

const router = express.Router();

//GET
//router.get('/', attendanceController.getAllSessions);

//GET /sessions/
router.get('/', attendanceController.getSessions);

//GET /sessions/:id
router.get('/:id', attendanceController.openSession);

//POST /sessions/
router.post('/', attendanceController.registerAttendance);

// //PUT /sessions/
// router.put('/', attendanceController.updateSession);

export default router;
