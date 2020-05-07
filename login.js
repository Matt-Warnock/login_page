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
      let passwordMatched = this.isAMatch.some(match => match);
      ui.displayResult = passwordMatched;
    },
  };

  const ui = {
    _userPassword: document.getElementById('password_field'),
    _output: document.getElementById('validation'),

    get userPassword() {
      return this._userPassword.value;
    },

    set displayResult(match) {
      if(typeof match === 'boolean')
      match ? ui._output.textContent = 'Welcome Back!' :
              ui._output.textContent = 'Invalid password';
    },

    clickStart() {
      document.getElementById('submit').addEventListener('click', () => {
        passwordChecker.userHash(this.userPassword);
        setTimeout(() => passwordChecker.checkResult(), 500);

      });
    }
  };

  ui.clickStart();

})();
