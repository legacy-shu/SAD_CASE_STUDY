import * as timetable from '../model/timetable.js';
import moment from 'moment/moment.js';

export async function getAllSessions(req, res, next) {
  const data = await timetable.getAllSessions();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function getSessions(req, res, next) {
  const data = await timetable.getSessions(moment().format('YYYY-MM-DD'));
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function getSession(req, res, next) {
  const id = req.params.id;
  const data = await timetable.getSession(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function openSession(req, res, next) {
  const id = req.params.id;
  const openedSession = req.query.openSession === 'true';
  const data = await timetable.openSession(id, openedSession);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}


