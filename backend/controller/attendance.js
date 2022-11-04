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

export async function registerAttendance(req, res, next) {
  const { passcode, id } = req.body;
  const data = await timetable.getSessions(moment().format('YYYY-MM-DD'));
  const index = data.findIndex((d) => d.passcode === passcode && d.isOpened);
  if (index !== -1) {
    const studentIndex = data[index].students.findIndex((s) => s.id === id);
    data[index].students[studentIndex].attendance = true;
    res.status(200).json(data[index]);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}
