const yearField = document.querySelector('#year');
const calcBtn = document.querySelector('#calc');
const messageElement = document.querySelector('#message');

calcBtn.addEventListener('click', function() {
    messageElement.textContent = (yearField.value >= 18) ? 'Добро пожаловать!' : 'Вход воспрещен!';

    yearField.value = '';
});
