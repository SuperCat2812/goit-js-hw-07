const input = document.querySelector('#name-input');
let nameUser = document.querySelector('#name-output');

input.addEventListener('input', () => {
  if (input.value !== '') {
    nameUser.textContent = input.value;
  } else {
    nameUser.textContent = 'Anonymous';
  }
});
