//Task1
//Создать произвольный елемент с id = text.  
//Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let paragraph = document.createElement('p')

// paragraph.innerText = "Hello!!!"
// paragraph.id = "text"
// document.getElementById("container").appendChild(paragraph)

// let button1 = document.createElement('button')

// button1.innerText = "Click on me"
// button1.id = "btn_1"
// document.getElementById("container").appendChild(button1)

// document.getElementById("btn_1").onclick = () => {
//     document.getElementById("text").style.display = "none";
// }

//Task2
//Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button1 = document.createElement('button')

// button1.innerText = "Click on me"
// button1.id = "btn_1"
// document.getElementById("container").appendChild(button1)

// document.getElementById("btn_1").onclick = () => {
//     document.getElementById("btn_1").style.display = "none";
// }


//Task 3

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на 
//кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let task_3_input = document.createElement('input');

// task_3_input.innerText = "Enter something";
// task_3_input.type = "number";
// task_3_input.id = "task_3_input";
// document.getElementById("container").appendChild(task_3_input);

// let task_3_button = document.createElement('button')

// task_3_button.innerText = "OK";
// task_3_button.id = "task_3_button";
// task_3_button.type = "submit";
// document.getElementById("container").appendChild(task_3_button);

// task_3_button.onclick = () =>  {
//     let inputValue = task_3_input.value
//     if(inputValue < 18) {
//         alert("You are under 18 y.o")
//         return false;

//     } alert("HOOOOORAY!")
// }
//task 4
//Создайте меню, которое раскрывается/сворачивается при клике

//Create div that will show the heading of menu
// let divka = document.createElement('divka');
// divka.innerText = "Menu";
// divka.id = "nav_menu";

//create list of items 
// let menu = document.createElement('ul');
// menu.id = "main_ul"
// let li_1 = document.createElement('li');
// let li_2 = document.createElement('li');
// let li_3 = document.createElement('li');
// let li_4 = document.createElement('li');

//give inner text to items 

// li_1.innerText = "Item1"
// li_2.innerText = "Item2"
// li_3.innerText = "Item3"
// li_4.innerText = "Item4"

// add elem to the body
// document.getElementById("container").appendChild(divka);
// document.getElementById("container").appendChild(menu);
// document.getElementById("main_ul").appendChild(li_1);
// document.getElementById("main_ul").appendChild(li_2);
// document.getElementById("main_ul").appendChild(li_3);
// document.getElementById("main_ul").appendChild(li_4);


//onclick function on menu that hides and shows items in the menu

// let firstClick = true;
// let mainUl = document.getElementById("main_ul")

// nav_menu.onclick = () => {
//         mainUl.classList.toggle("show");
// }

//task 5

// -Создать список комментариев, пример объекта коментария - {title: 'lorem',body: 'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// let childNodes = document.body.childNodes;

// for (let i = 0; i < childNodes.length; i++) {
//     let e = childNodes[i];
//     if(e.nodeType === 8) {
//         let divka = document.createElement("div");
//         divka.innerText = e.nodeValue;
//         document.getElementById("container").appendChild(divka);
//     }
// }

//Task 6

// -створити 2 форми по 2 інпути в кожній.ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2 х форм.
// Кнопка повинна лежати за межами форм(Щоб ьуникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.


// document.getElementById("btn_1").onclick = () => {
//     console.log(document.forms.myForm1.someText1.value);
//     console.log(document.forms.myForm1.someText2.value);
// }

// document.getElementById("btn_2").onclick = () => {
//     console.log(document.forms.myForm2.someText1.value);
//     console.log(document.forms.myForm2.someText2.value);

// Task 7 
//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function CreateTable(rowNum, cellNum, el) {

//     let element = document.getElementById(el);
//     console.log(element);
//     let table = document.createElement("table");

//     for (let i = 0; i < rowNum; i++) {
//         let row = document.createElement("tr");
//         table.appendChild(row);
//         for (let i = 0; i < cellNum; i++) {
//             let cells = document.createElement("td");
//             row.appendChild(cells);
//         }
//     }

//     element.appendChild(table)

// }

// CreateTable(2, 6, "container");
//Task 8
// -Створити 3 инпута та кнопку.Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)

// document.getElementById("btn").onclick = function () { CreateTable() };

// function CreateTable() {

//     let element = document.getElementById("container");
//     let table = document.createElement("table");

//     let rows = document.getElementById("rowsNumber");
//     let rowNum = rows.value;

//     let cell = document.getElementById("cellsNumber");
//     let cellNum = cell.value;

//     let data = document.getElementById("data");
//     let dataInfo = data.value;


//     for (let i = 0; i < rowNum; i++) {
//         let row = document.createElement("tr");
//         table.appendChild(row);
//         for (let i = 0; i < cellNum; i++) {
//             let cells = document.createElement("td");
//             cells.innerText = dataInfo;
//             row.appendChild(cells);
//         }
//     }
//     element.appendChild(table)

// }
//Task 9
//Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//Task 10
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let obsceneWords = ["fuck", "asshole", "bitch", "jerk", "whore", "fool", "sucker", "freak"]

// let checkForObsceneWord = document.getElementById("btn");
// let inputWord = document.getElementById("inputWord");

// checkForObsceneWord.onclick = function () {
//     FindObscene()
// };

// function FindObscene() {
//     for (let i = 0; i < obsceneWords.length; i++) {
//         if ((inputWord.value) === obsceneWords[i]) {
//             alert("You've entered bad word!!")
//         }
//     }
// }

//Task 11

// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку.

// let obsceneWords = ["fuck", "asshole", "bitch", "jerk", "whore", "fool", "sucker", "freak"]

// let checkForObsceneWord = document.getElementById("btn");
// let inputWord = document.getElementById("inputWord");

// checkForObsceneWord.onclick = function () {
//     FindObscene();
// };

// function FindObscene() {
//     for (let i = 0; i < obsceneWords.length; i++) {
//        if(inputWord.value.includes(obsceneWords[i])) {
//            alert("You've entered bad word!!");
//        }
//     }
// }

//Task 12 is done in  separate sheets rules.html and script2.js

//Task 13 

// Создать три чекбокса.Каждый из них активирует фильтр для вышеуказаного массива.Фильтры могут работать как вместе так и по отдельности.
// 1 й - отфильтровывает пользователей со статусом false(осталяет со статусом false)
// 2 й - оставляет старше 29 лет включительно
// 3 й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 1
//         }
//     },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 121
//         }
//     },
//     {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 90
//         }
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 115
//         }
//     },
//     {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 2
//         }
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 22
//         }
//     },
//     {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 43
//         }
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 12
//         }
//     },
//     {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 121
//         }
//     }
// ];
// //clone array of users
// let clonedusersWithAddress = JSON.parse(JSON.stringify(usersWithAddress));
// //make function FilterArray() on button click
// let filterArr = document.getElementById("btn");
// filterArr.onclick = function () {
//     FilterArray();
// };


// //function FilterArray() 
// function FilterArray() {
//     let fil1 = document.getElementById("filter1");
//     let fil2 = document.getElementById("filter2");
//     let fil3 = document.getElementById("filter3");

//     //filter1 filters users with status false
//     if (fil1.checked) {
//         let a = clonedusersWithAddress.filter(function (el) {
//             if (el.status == false) {
//                 document.write(el.name + "  ");
//                 return el;
//             }
//         })
//         document.write("<br>");

//     }
//     //filter2 filters users with age >=29
//     if (fil2.checked) {

//         let a = clonedusersWithAddress.filter(function (el) {
//             if (el.age >= 29) {
//                 document.write(el.name + "  ");
//                 return el;
//             }
//         })
//         document.write("<br>");
//     }

//     //filter3 filters users with city  Kyiv
//     if (fil3.checked) {
        
//         let a = clonedusersWithAddress.filter(function (el) {
//             if (el.address.city == "Kyiv") {
//                 document.write(el.name + "  ");
//                 return el;
//             }
//         })
//     }
// }