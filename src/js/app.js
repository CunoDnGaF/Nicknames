export default class Validator {
  validateUsername(username) {
    return /^[a-zA-Z]+[A-Za-z0-9\-_]+[a-zA-Z]$/.test(username) && !/[0-9]{4}/.test(username);
  }
}