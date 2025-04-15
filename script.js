// File: login.js
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  const storedUser = JSON.parse(localStorage.getItem('amuUser'));

  if (!storedUser) {
    alert('No account found. Please sign up first.');
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert(`Welcome back, ${storedUser.firstName}!`);
    window.location.href = 'https://bugpen.github.io/all-in-one/#';
  } else {
    alert('Incorrect email or password.');
  }
});