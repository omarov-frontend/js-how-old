const yearField = document.querySelector('#year');
const calcBtn = document.querySelector('#calc');
const messageElement = document.querySelector('#message');
const date = new Date();
const currentYear = date.getFullYear();

calcBtn.addEventListener('click', function() {
    const diff = currentYear - yearField.value;

    messageElement.textContent = (diff >= 16) ? 'Добро пожаловать!' : 'Вход воспрещен!';

    yearField.value = '';
});
