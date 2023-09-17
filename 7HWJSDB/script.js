// // Задание 1. Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// // Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// // Выведите в консоль строку:

// // На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// // (необходимые значения добавьте с помощью BOM)


console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);

// // Задание 2 В файле html есть разметка (добавьте ее в свой файл html):

{/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */}

// // 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// // 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
{ <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> }
const customItem = document.querySelectorAll('#list li');
customItem.forEach(element => console.log(element.textContent));
for(i = 0; i < customItem.length; i++) {
customItem[i].textContent = i;
};

// // Задание 3

// // Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
const classForRem = document.getElementsByClassName('forRemove');

for(let item of classForRem){
    item.remove()
}
// // Задание 4

// // Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу
const paragraph = document.createElement('p');
paragraph.textContent = 'Healthy man - happy man. Good health lets us be active, purposeful and cheerful. Everybody wants to feel well, but sometimes our body doesn’t reciprocate our wish. Diseases appear. Some of them are temporary (for example: cold, cough, running nose, sore throat) diseases, and some are chronic ones.';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight ='bold';

document.querySelector('main').append(paragraph);

// // Задание 5
// // Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

const getTagColCont = (nametag, namecol, cont) => {
    const elen = document.createElement(nametag);
    elen.style.color = namecol;
    elen.textContent = cont;
   return elen;

}
document.body.append(getTagColCont('p', 'red', 'text'));


// // Задание 6
// // Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

let selectlist = document.getElementById('select_year');
for(let i = 1960; i < 2021; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectlist.append(option);
}

console.log(selectlist)


// // Задание 8 Есть массив ссылок:

// // let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// // Вам нужно:

// // 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// // 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// // c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// // При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// // 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const div = document.createElement('div');
// div.classList.sdd('custom-div')
div.style.background = 'green';
div.style.padding = '10px, 20px';

// linksArr.forEach(item => {
//     const link = document.createElement('a');
//     link.href = item;
//     link.innerHTML = item;
//     link.setAttribute('target', '_blank');
//     div.append(link)
// } )
linksArr.forEach(item => {
    div += `<a href = "${item}" target = "_blank">${item}</a>`
})
document.body.append(div)

// // Задание 9*
// // Есть массив объектов с полями name, age. Например:

// // const users = [
// // {name: 'Mark', age: 12},
// // {name: 'Olga', age: 30},
// // {name:'Tom', age: 25},

// // {name:'Den', age: 43}
// // ]

// // Создать в html таблицу (table).C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// // ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]



let table = document.querySelector('.object');
users.forEach(element => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    cellName.textContent = element.name;
    cellName.style.color = 'red';
    row.append(cellName);


    const cellAge = document.createElement('td');
    cellAge.textContent = element.age;
    cellAge.style.color = 'blue';
    row.append(cellAge);
    
    table.append(row);    
});
