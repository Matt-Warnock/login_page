(function () {
  let passwordChecker = {
    _passwords: ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'],
    _isAMatch: [],

    get isAMatch() {
      return this._isAMatch;
    },

    verifiyPassword(hash) {
      passwordChecker._isAMatch = [];
      let storeResults = (result) => {return passwordChecker._isAMatch.push(result);};
      passwordChecker._passwords.forEach((item) => checkpw(item, hash,storeResults , null));
    }
  };

  const ui = {
    _userPassword: document.getElementById('password_field'),
    _output: document.getElementById('validation'),
    _salt: gensalt(5),

    get userPassword() {
      return this._userPassword.value;
    },

    displayResult() {
      return passwordChecker.isAMatch.some((match) => match) ?
      ui._output.textContent = 'Welcome Back!' :
      ui._output.textContent = 'Invalid password';
    },

    clickStart() {
      document.getElementById('submit').addEventListener('click', () => {
        hashpw(this.userPassword, this._salt, passwordChecker.verifiyPassword, null);
        setTimeout(this.displayResult, 500);
      });
    }
  };

  ui.clickStart();

})();
