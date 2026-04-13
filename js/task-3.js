const input = document.querySelector('#name-input');
let nameUser = document.querySelector('#name-output');
console.dir(nameUser);
console.dir(input);
console.log(onkeyup);

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    if (input.value !== '') {
      nameUser.innerHTML = input.value;
    } else {
      nameUser.innerHTML = 'Anonymous';
    }
  }
});
