import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as attendanceController from '../controller/attendance.js';

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

router.get('/', attendanceController.getOpenedSession);

router.post('/', validateRegister, attendanceController.registerAttendance);

export default router;
