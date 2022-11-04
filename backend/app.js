import express from 'express';
import attendanceRouter from './router/attendance.js';

const app = express();
app.use(express.json());
app.use('/sessions', attendanceRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
