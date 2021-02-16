const year = document.querySelector('#year');
const calcBtn = document.querySelector('#calc');
const currentYear = 2021;

calcBtn.addEventListener('click', () => {
    let result = currentYear - year.value;

    if(result >= 16) {
        alert('Добро пожаловать!');
    } else {
        alert('Вход воспрещен!');
    }
})
