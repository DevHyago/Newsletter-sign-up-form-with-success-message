const SHOW_ERROR_MESSAGES = 'invalid-input';

const formContent = document.querySelector('#form-content');
const form = document.querySelector('#submit-newsletter');
const successContent = document.querySelector('#success-content');
const successButton = successContent.querySelector('button');

successButton.addEventListener('click', () => {
  hiddenSuccessScreen(formContent, successContent);
})

const email = form.querySelector('#email');
email.addEventListener('input', () => hiddenErrorMessage(email))

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(isValidEmail(email.value)){
    showSuccessScreen(formContent, successContent, email.value);
  }else{
    showErrorMessage(email, 'Valid email required');
  }
})

function showErrorMessage(input, message) {
  const label = input.previousElementSibling;
  const errorMessage = label.querySelector('span');
  errorMessage.innerText = message;
  input.classList.add(SHOW_ERROR_MESSAGES);
}

function hiddenErrorMessage(input){
  const label = input.previousElementSibling;
  const errorMessage = label.querySelector('span');
  errorMessage.innerText = '';
  input.classList.remove(SHOW_ERROR_MESSAGES);
}

function isValidEmail(email){
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regexEmail.test(email);
}

function showSuccessScreen(divFormContent, divSuccessContent, email){
  divFormContent.style.display = 'none';
  divSuccessContent.querySelector('.registered-email').innerText = email;
  divSuccessContent.style.display = 'block';
}

function hiddenSuccessScreen(divFormContent, divSuccessContent){
  divFormContent.style.display = 'flex';
  divSuccessContent.style.display = 'none';
}
