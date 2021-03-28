const submit = document.querySelector('#submitBtn');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');

submit.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (testLen(name, 1)) {
    nameError.classList.add('hide');
    nameError.classList.remove('show');
  } else {
    nameError.classList.add('show');
    nameError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  if (validatePassword(password)) {
    passwordError.classList.add('hide');
    passwordError.classList.remove('show');
  } else {
    passwordError.classList.add('show');
    passwordError.classList.remove('hide');
  }
};

function validateEmail(emailAddy) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}

function validatePassword(passAddy) {
  const passwordExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isPasswordValid = passwordExpression.test(passAddy);
  return isPasswordValid;
}

function testLen(elm, len) {
  if (elm.length > len) {
    return true;
  } else {
    return false;
  }
}
