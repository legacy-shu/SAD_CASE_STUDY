import * as timetable from '../model/timetable.js';

export async function getOpenedSessions(req, res, next) {
  const data = await timetable.getOpenedSessions();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function getOpenedSessionById(req, res, next) {
  const id = req.params.id;
  const data = await timetable.getSession(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function updateStudentAttendance(req, res, next) {
  const { students, id } = req.body;
  const data = await timetable.updateStudentAttendance(students, id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}

export async function registerAttendance(req, res, next) {
  const { passcode, email } = req.body;
  const data = await timetable.registerAttendance(passcode, email);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Something went wrong' });
  }
}
