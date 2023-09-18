// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const addElement = document.querySelector('.keydown');
addElement.addEventListener('keydown', (event) => {
const li = document.createElement('li');
li.textContent = event.key;
document.querySelector('.addli').append(li);
})
// // Задание 2

// // Вставить в html тег input (просто предусмотреть в разметке).

// // Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
const item = document.querySelector('.keyup');
document.addEventListener('keyup', () => console.log(item.value))

// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const addimput = document.querySelector('.addform');
addimput.addEventListener('submit', (event) => {
event.preventDefault();
const aport = document.querySelector('.addnode')
const li = document.createElement('li');
li.innerText = aport.value;
aport.value = '';
document.querySelector('.list').append(li);
});


// Задание 4 Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if

// 2) решить с помощью evel

document.querySelector(".calc_form").addEventListener('submit', (event)=>{
    event.preventDefault();
    let first_value = Number(document.querySelector(".first_value").value);
    let second_value = Number(document.querySelector(".second_value").value);
    let arithmetic_sign = document.querySelector(".calc").value;
    let result;

    if(arithmetic_sign == 'plus') {
        result = first_value + second_value;
    } else if(arithmetic_sign == 'minus') {
        result = first_value - second_value;
    } else if(arithmetic_sign == 'multiply') {
        result = first_value * second_value;
    } else {
        result = first_value / second_value;
    }

    document.querySelector(".result").textContent = result;

})


// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;}

    const payButton = document.querySelector('.pay');
    payButton.addEventListener('mouseover', () => {
    payButton.style.background = `rgb( ${getRandomInt(0, 255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;
   
})

    payButton.addEventListener('mouseout', () => { 
    payButton.style.transform = `rotate(${getRandomInt(-180,180)}deg)`;
     
})


