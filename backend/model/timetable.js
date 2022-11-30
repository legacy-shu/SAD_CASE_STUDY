import Passcode from './passcode.js';
import { Schema, model, ObjectId } from 'mongoose';
import moment from 'moment/moment.js';

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
  try {
    return await timetable.find({});
  } catch (error) {
    console.error(error);
  }
}
export async function getSession(id) {
  try {
    return await timetable.findById(id);
  } catch (error) {
    console.error(error);
  }
}
export async function getOpenedSessions() {
  //const date = moment().format('YYYY-MM-DD');
  //for the test. It should be commented out and The above code have to be activated
  const date = "2022-12-01"
  try {
    return await timetable.find({ date: date, isOpened: true });
  } catch (error) {
    console.error(error);
  }
}
export async function getSessions(date) {
  //for the test. It should be commented out
  date = "2022-12-01"
  try {
    return await timetable.find({ date: date });
  } catch (error) {
    console.error(error);
  }
}
export async function openSession(id, openedSession) {
  try {
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
      session = await timetable.findByIdAndUpdate(
        id,
        {
          isOpened: false,
          passcode: null,
        },
        { new: true }
      );
    }
    return session;
  } catch (error) {
    console.error(error);
  }
}
export async function updateStudentAttendance(students, id) {
  try {
    const session = await timetable.findByIdAndUpdate(
      id,
      {
        students: students,
      },
      { new: true }
    );
    return session;
  } catch (error) {
    console.error(error);
  }
}
export async function registerAttendance(passcode, email) {
  try {
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
  } catch (error) {
    console.error(error);
  }
}
