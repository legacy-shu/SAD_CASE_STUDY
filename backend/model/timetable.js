import Passcode from './passcode.js';
import { Schema, model, ObjectId } from 'mongoose';
const TimeTableSchema = new Schema(
  {
    _id: ObjectId,
    date: String,
    time: String,
    activity_name: String,
    module_code: String,
    module_description: String,
    location: String,
    isOpened: Boolean,
    passcode: String,
    staff_members: [
      {
        name: String,
        id: String,
        email: String,
      },
    ],
    students: [
      {
        name: String,
        id: String,
        email: String,
        attendance: Boolean,
      },
    ],
  },
  { collection: 'timetable' }
);
const timetable = model('timetable', TimeTableSchema);

export async function getAllSessions() {
  return await timetable.find({});
}
export async function getSession(id) {
  return await timetable.findById(id);
}
export async function getOpenedSession() {
  return await timetable.findOne({ isOpened: true });
}
export async function getSessions(date) {
  return await timetable.find({ date: date });
}
export async function openSession(id, openedSession) {
  let session;
  if (openedSession) {
    session = await timetable.findByIdAndUpdate(
      id,
      {
        isOpened: true,
        passcode: Passcode.generateCode(),
      },
      { new: true }
    );
  } else {
    session = await timetable.findOneAndUpdate(
      { isOpened: true },
      {
        isOpened: false,
        passcode: null,
      },
      { new: true }
    );
  }
  return session;
}
export async function registerAttendance(passcode, email) {
  const session = await timetable.findOneAndUpdate(
    { passcode: passcode, 'students.email': email },
    {
      $set: {
        'students.$.attendance': true,
      },
    },
    { new: true }
  );
  return session;
}
