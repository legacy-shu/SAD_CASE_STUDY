export default class AttendanceService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  async getAllSessions() {
    return this.http.fetch('/sessions/all', {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async getSessions() {
    return this.http.fetch('/sessions', {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async getSession(sessionId) {
    return this.http.fetch(`/sessions/${sessionId}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async openSession(sessionId, switched) {
    return this.http.fetch(`/sessions/${sessionId}?openSession=${switched}`, {
      method: 'PUT',
      headers: this.getHeaders(),
    });
  }
  async getOpenedSessions() {
    return this.http.fetch('/attendance', {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async getOpenedSessionById(sessionId) {
    return this.http.fetch(`/attendance/${sessionId}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async updateStudentAttendance(students, id) {
    return this.http.fetch(`/attendance`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({ students, id }),
    });
  }
  async registerAttendance(passcode, email) {
    return this.http.fetch(`/attendance`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ passcode, email }),
    });
  }
  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
