let isAMatch;

function verifiyPassword(hash) {
  const passwords = ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'];

  isAMatch = [];

  passwords.forEach(
    (item) => checkpw(item, hash,
    (result) => {return isAMatch.push(result);}, null));
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

});
