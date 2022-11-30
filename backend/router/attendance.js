import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as attendanceController from '../controller/attendance.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateRegister = [
  body('passcode')
    .trim()
    .isLength({ min: 4, max: 4 })
    .withMessage('The code must be 4 characters'),
  validate,
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  validate,
];

router.get('/',isAuth, attendanceController.getOpenedSessions);
router.get('/:id',isAuth, attendanceController.getOpenedSessionById);
router.put('/',isAuth, attendanceController.updateStudentAttendance);
router.post('/',isAuth, validateRegister, attendanceController.registerAttendance);

export default router;
