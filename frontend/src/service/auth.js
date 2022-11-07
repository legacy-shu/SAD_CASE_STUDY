export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  async login(email, password) {
    const data = await this.http.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }
  async me() {
    const token = this.tokenStorage.getToken();
    return this.http.fetch('/auth/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  async logout() {
    this.tokenStorage.clearToken();
  }
}