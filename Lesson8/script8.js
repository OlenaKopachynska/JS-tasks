//Task 1
// -Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textar = document.getElementById("tXt");

// let lclStorage = localStorage.getItem("textar");

// if (localStorage) {
//     textar.value = lclStorage;
// };

// textar.oninput = () => {
//     localStorage.setItem("txtArea", textar.value);
// };

// localStorage.setItem("text", textar);

//Task 2

// -Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие - то данные и закрывает страницу(не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let name = document.getElementById("name");
// let mail = document.getElementById("mail");
// let msg = document.getElementById("msg");
// let male = document.getElementById("male");
// let female = document.getElementById("female");
// let car = document.getElementById("car");


// //func on name input
// name.oninput = () => {
//     localStorage.setItem("name", name.value);
// }

// let getName = localStorage.getItem("name");

// if (getName) {
//     name.value = getName;
// }

// //func on mail input
// mail.oninput = () => {
//     localStorage.setItem("mail", mail.value);
// }

// let getMail = localStorage.getItem("mail");

// if (getMail) {
//     mail.value = getMail;
// }

// //func on msg input
// msg.oninput = () => {
//     localStorage.setItem("msg", msg.value);
// }

// let getMsg = localStorage.getItem("msg");

// if (getMsg) {
//     msg.value = getMsg;
// }

// //male  oninput

// male.onclick = () => {
//     localStorage.setItem("male", "true");
// }

// let getMale = localStorage.getItem("male");
// if (getMale) {
//     male.checked = getMale;
// }

// //female  oninput

// female.onclick = () => {
//     localStorage.setItem("female", "true");
// }

// let getFemale = localStorage.getItem("female");
// if (getFemale) {
//     female.checked = getFemale;
// }

// //func on select input
// car.onchange = () => {
//     localStorage.setItem("car", car.value);
// }

// let getCar = localStorage.getItem("car");

// if (getCar) {
//     car.value = getCar;
// }


//Task3

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и 
//они "фикисруются" (в хранилище), затем поредактировать их, 
//затем еще поредактировать и возможно еще.....
// Требование: хранить историю своих изменений(даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно 
//перемещаться по истории(не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let save_button = document.getElementById("save_button");
// let txtarea = document.getElementById("tXt");
// let left = document.getElementById("left");
// let right = document.getElementById("right");

// save_button.onclick = () => {
//     localStorage.setItem(localStorage.length+1, txtarea.value)
// };


// left.onclick = () => {
//     right.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === txtarea.value)
//                 index = key;
//         }
//     }
//     txtarea.value = localStorage.getItem(index - 1);
// }

// right.onclick = () => {
//     left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === txtarea.value)
//                 index = key;
//         }

//     }
//     if (index === localStorage.length.toString()) {
//         right.style.visibility = 'hidden';
//         return;
//     }
//     txtarea.value = localStorage.getItem(+index + 1);
// }

//Task4 

// Реализуйте записную книгу, хранящую данные в локальном хранилище.
//Данные которые надо сохранять: ФИО, номер, почта, фирма, отдел, день рождения
//Данные вводить через соответсвующую форму.
//-Каждому контакту добавить кнопку для удаления контакта.
///-Каждому контакту добавить кнопку редактироваиня.При нажати на нее появляется форма, в которой есть все необходимые 
//инпуты для редактирования, которые уже заполнены данными объекта

// let name = document.getElementById("name");
// let phone = document.getElementById("phone");
// let email = document.getElementById("email");
// let department = document.getElementById("department");
// let birthday = document.getElementById("birthday");

// let save_btn = document.getElementById("save_btn");

// let user = document.getElementById("user");

// //function on save button 
// save_btn.onclick = () => {

//     //set data to local storage
//     localStorage.setItem("name", name.value);
//     localStorage.setItem("phone", phone.value);
//     localStorage.setItem("email", email.value);
//     localStorage.setItem("department", department.value);
//     localStorage.setItem("birthday", birthday.value);

//     //create div for each data
//     let user_container_name = document.createElement("div");
//     let user_container_phone = document.createElement("div");
//     let user_container_email = document.createElement("div");
//     let user_container_department = document.createElement("div");
//     let user_container_birthday = document.createElement("div");

//     //take from local storage data and put it into div
//     user_container_name.innerText = localStorage.getItem("name");
//     user_container_phone.innerText = localStorage.getItem("phone");
//     user_container_email.innerText = localStorage.getItem("email");
//     user_container_department.innerText = localStorage.getItem("department");
//     user_container_birthday.innerText = localStorage.getItem("birthday");

// let user_container = document.createElement("div");

//     for (let i = 0; i < 10; i++) {

//         user_container.appendChild(user_container_name);
//         user_container.appendChild(user_container_phone);
//         user_container.appendChild(user_container_email);
//         user_container.appendChild(user_container_department);
//         user_container.appendChild(user_container_birthday);

//         user.appendChild(user_container);
//     }

//     user_container.classList.add("user_container");

//     let get_user_container = document.getElementsByClassName("user_container");
//     //create delete btn
//     let delete_btn = document.createElement("input")
//     delete_btn.setAttribute("type", "button")
//     delete_btn.setAttribute("value", "delete")

//     //create edit btn
//     let edit_btn = document.createElement("input")
//     edit_btn.setAttribute("type", "button")
//     edit_btn.setAttribute("value", "edit")

//     for (let i = 0; i < get_user_container.length; i++) {
//         get_user_container[i].appendChild(delete_btn)
//         get_user_container[i].appendChild(edit_btn)

//         delete_btn.onclick = () => {
//             get_user_container[i].style.visibility = "hidden" //змінити щоб не ховало а видаляло дом елемент

//             console.log(get_user_container[i]);
//         }

//         edit_btn.onclick = () => {

//             name.value = get_user_container[i].children[0].innerText
//             phone.value = get_user_container[i].children[1].innerText
//             email.value = get_user_container[i].children[2].innerText
//             department.value = get_user_container[i].children[3].innerText
//             birthday.value = get_user_container[i].children[4].innerText

//             save_btn.onclick = () => {

//                 localStorage.setItem("name", name.value);
//                 localStorage.setItem("phone", phone.value);
//                 localStorage.setItem("email", email.value);
//                 localStorage.setItem("department", department.value);
//                 localStorage.setItem("birthday", birthday.value);

//                 get_user_container[i].children[0].innerText = localStorage.getItem("name");
//                 get_user_container[i].children[1].innerText = localStorage.getItem("phone");
//                 get_user_container[i].children[2].innerText = localStorage.getItem("email");
//                 get_user_container[i].children[3].innerText = localStorage.getItem("department");
//                 get_user_container[i].children[4].innerText = localStorage.getItem("birthday");
//             }
//         };
//     }
// }