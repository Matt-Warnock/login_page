(function () {
  let passwordChecker = {
    _passwords: ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'],
    isAMatch: [],

    get passwords() {
      return passwordChecker._passwords;
    },

    verifiyPassword(hash) {
      passwordChecker.isAMatch = [];
      let storeResults = result => passwordChecker.isAMatch.push(result);
      passwordChecker.passwords.forEach(password => checkpw(password, hash, storeResults, null));
    },

    userHash(enteredPassword) {
      const salt = gensalt(5);
      hashpw(enteredPassword, salt, passwordChecker.verifiyPassword, null);
    },

    checkResult() {
      return this.isAMatch.some(match => match);
    },
  };

  const ui = {
    _userPassword: document.getElementById('password_field'),
    _output: document.getElementById('validation'),

    get userPassword() {
      return this._userPassword.value;
    },

    displayResult(match) {
      match ? ui._output.textContent = 'Welcome Back!' :
              ui._output.textContent = 'Invalid password';
    },

    clickStart() {
      document.getElementById('submit').addEventListener('click', () => {
        passwordChecker.userHash(this.userPassword);
        setTimeout(() => this.displayResult(passwordChecker.checkResult()), 500);

      });
    }
  };

  ui.clickStart();

})();
