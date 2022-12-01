import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TokenStorage from './service/token';
import HttpClient from './network/http';
import AttendanceService from './service/attendance';
import AuthService from './service/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient('http://localhost:8000');
const attendanceService = new AttendanceService(httpClient, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

root.render(
  <App attendanceService={attendanceService} authService={authService} />
);
