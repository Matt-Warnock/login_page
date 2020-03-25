let password = document.getElementById('password_field').value;
const output = document.getElementById('validation');

document.getElementById('submit')
.onclick = function (password) {
  if (password === '12345678') {
    output.textContent = 'Welcome Back!';
    return;

  } else {
    output.textContent = 'Invalid password';
  }
};
