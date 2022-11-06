export default class AttendanceService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
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
      method: 'GET',
      headers: this.getHeaders(),
    });
  }
  async registerAttendance(email, sessionId) {
    return this.http.fetch(`/sessions`)
  }
  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
