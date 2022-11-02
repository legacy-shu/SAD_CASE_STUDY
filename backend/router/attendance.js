import express from 'express';
import * as attendanceController from '../controller/attendance.js';

const router = express.Router();

//GET
//router.get('/', attendanceController.getAllSessions);

//GET /:date
router.get('/', attendanceController.getSessions);

//GET /session/:id
router.get('/:id', attendanceController.openSession);

// //PUT /:date
// router.put('/:date', attendanceController.updateSession);

export default router;
