import express from 'express';
import * as sessionsController from '../controller/sessions.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/all', isAuth, sessionsController.getAllSessions);

router.get('/', isAuth, sessionsController.getSessions);

router.get('/:id', isAuth, sessionsController.getSession);

router.put('/:id', isAuth, sessionsController.openSession);

export default router;
