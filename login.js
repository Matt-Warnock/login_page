/*let isAMatch;

function verifiyPassword(hash) {
  const passwords = ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'];

  isAMatch = [];

  passwords.forEach(
    (item) => checkpw(item, hash, (result) => {return isAMatch.push(result);}, null));
}

function displayResult() {
  const output = document.getElementById('validation');

  return isAMatch.some(
           (match) => match === true) ?
            output.textContent = 'Welcome Back!' :
            output.textContent = 'Invalid password';
}


document.getElementById('submit').addEventListener('click', function() {

  let userPassword = document.getElementById('password_field').value;
  let salt = gensalt(5);

  hashpw(userPassword, salt, verifiyPassword, null);
  setTimeout(displayResult, 500);

});*/


(function () {
  let passwordChecker = {
    _passwords: ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'],
    isAMatch: [],

    verifiyPassword(hash) {
      this._passwords.forEach((item) => checkpw(item, hash, (result) => {return this.isAMatch.push(result);}, null));
    }
  };

const ui = {
  userPassword: document.getElementById('password_field').value,
  _output: document.getElementById('validation'),
  _salt: gensalt(5),

  displayResult() {
    return passwordChecker.isAMatch.some((match) => match === true) ?
           this._output.textContent = 'Welcome Back!' :
           this._output.textContent = 'Invalid password';
  },

  clickStart() {
    document.getElementById('submit').addEventListener('click', () => {

      hashpw(this.userPassword, this._salt, passwordChecker.verifiyPassword, null);
      setTimeout(this.displayResult, 500);

    });
  }
};
})();
