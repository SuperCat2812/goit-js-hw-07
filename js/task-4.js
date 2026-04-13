const emailUser = document.querySelector('input[type=email]');
const passwordUser = document.querySelector('input[type=password]');
const buttonForm = document.querySelector('button');
const loginForm = document.querySelector('.login-form');
console.log(emailUser);

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailUser.value.trim();
  const password = passwordUser.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  console.log({ email, password });

  loginForm.reset();
});
