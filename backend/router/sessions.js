import express from 'express';
import * as sessionsController from '../controller/sessions.js';

const router = express.Router();

router.get('/', sessionsController.getSessions);

router.get('/:id', sessionsController.getSession);

router.put('/:id', sessionsController.openSession);

export default router;
