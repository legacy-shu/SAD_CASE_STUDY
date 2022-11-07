import * as timetable from '../model/timetable.js';

export async function getOpenedSession(req, res, next) {
  const data = await timetable.getOpenedSession();
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
