const output = document.getElementById('validation');
const button = document.getElementById('submit');

button.addEventListener('click', function() {
  let password = document.getElementById('password_field').value;

  if (password === '12345678') {
    output.textContent = 'Welcome Back!';
  }
  else {
    output.textContent = 'Invalid password';
  }
});
