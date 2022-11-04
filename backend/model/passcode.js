export default class Passcode {
  static generateCode() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    const string_length = 4;
    let code = '';
    for (let i = 0; i < string_length; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      code += chars.substring(rnum, rnum + 1);
    }
    return code;
  }
}
