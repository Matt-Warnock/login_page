function verifiyPassword(hash) {
  checkpw("12345678", hash, displayResult, null);
  return;
}

function displayResult(result) {
  const output = document.getElementById('validation');
  
  return result ? output.textContent = 'Welcome Back!' :
  output.textContent = 'Invalid password';
}


document.getElementById('submit').addEventListener('click', function() {

  let password = document.getElementById('password_field').value;
  let salt = gensalt(5);


  hashpw(password, salt, verifiyPassword, null);


});
