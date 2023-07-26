const input = document.querySelector('.input-mail');
const subscribeBtn = document.querySelector('.btn-subscribe');
const errorMessage = document.querySelector('.error-message');
const successBox = document.querySelector('.success-box');
const container = document.querySelector('.container');

subscribeBtn.addEventListener('click', function() {
  const email = input.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    // Do something when email is correct
    successBox.style.display = 'flex';
    container.style.display = 'none';

    // Reset error styles if previously set
    input.style.borderColor = '#ccc';
    input.style.backgroundColor = 'white';
    input.style.color = 'black';

    const inputValueElement = document.querySelector('.input-value');
    inputValueElement.textContent = `${email}`;

  } else {
    // Do something when email is incorrect
    errorMessage.style.display = 'flex';
    input.style.borderColor = 'red';
    input.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    input.style.color = 'red';

    // Set focus to the input field
    input.focus();
  }
});

function tamTersi() {
  const displayNone = document.querySelector(".container");
  displayNone.style.display = "flex";

  const displayShow = document.querySelector(".success-box");
  displayShow.style.display = "none";
}