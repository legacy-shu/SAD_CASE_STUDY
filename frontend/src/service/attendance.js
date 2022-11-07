export default class AttendanceService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.sessionId = null;
  }
  async getSessions() {
    return this.http.fetch('/sessions', {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async getSession(sessionId) {
    this.sessionId = sessionId;
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
  async getCurrentSession() {
    return this.http.fetch('/attendance', {
      method: 'GET',
      headers: this.getHeaders(),
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
