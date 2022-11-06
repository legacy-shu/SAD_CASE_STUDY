import express from 'express';
import { body } from 'express-validator';
import * as attendanceController from '../controller/attendance.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

//validation
//sanitization
//Contract Testing : Client-Server
const validateRegister = [
  body('passcode')
    .trim()
    .isLength({ min: 4, max: 4 })
    .withMessage('The code must be 4 characters'),
  validate,
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  validate,
];

router.get('/all', attendanceController.getAllSessions);

router.get('/', attendanceController.getSessions);

router.get('/:id', attendanceController.openSession);

router.post('/', validateRegister, attendanceController.registerAttendance);

// router.put('/', attendanceController.updateSession);

export default router;
