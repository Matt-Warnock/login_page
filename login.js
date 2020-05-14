(function () {
  class PasswordChecker {
    constructor() {
      this._passwords = ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'];
      this.isAMatch = [];
    }
    get passwords() {
      return pwChecker._passwords;
    }

    verifiyPassword(hash) {
      pwChecker.isAMatch = [];
      let storeResults = result => pwChecker.isAMatch.push(result);
      pwChecker.passwords.forEach(password => checkpw(password, hash, storeResults, null));
    }

    userHash(enteredPassword) {
      const salt = gensalt(5);
      hashpw(enteredPassword, salt, pwChecker.verifiyPassword, null);
    }

    checkResult() {
      return this.isAMatch.some(match => match);
    }
  }

  class UserInterface {
    constructor(checkerObject) {
      this._userPassword = document.getElementById('password_field');
      this._output = document.getElementById('validation');
      this._passwordChecker = checkerObject;
    }
    get userPassword() {
      return this._userPassword.value;
    }

    displayResult(match) {
      match ? ui._output.textContent = 'Welcome Back!' :
      ui._output.textContent = 'Invalid password';
    }

    clickStart() {
      document.getElementById('submit').addEventListener('click', () => {
        this._passwordChecker.userHash(this.userPassword);
        setTimeout(() => this.displayResult(this._passwordChecker.checkResult()), 500);
      });
    }
  }

  const pwChecker = new PasswordChecker();
  const ui = new UserInterface(pwChecker);

  ui.clickStart();
})();
