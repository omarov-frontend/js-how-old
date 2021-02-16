const year = document.querySelector('#year');
const calcBtn = document.querySelector('#calc');
const message = document.querySelector('#message');
const currentYear = 2021;

calcBtn.addEventListener('click', () => {
    let result = currentYear - year.value;

    if(result >= 16) {
        message.textContent = 'Добро пожаловать!';
    } else {
        message.textContent = 'Вход воспрещен!';
    }

    year.value = '';
})
