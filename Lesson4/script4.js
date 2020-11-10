//    створити функцію яка виводить масив

// let arr = [];
// let out = function(arr) {
//     console.log(arr);
// };

//     створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попвередню функцію. 

// function OutputArray(arr, numberOfElem) {

//     for (let i = 0; i < numberOfElem; i++) {
//          arr[i] = Math.round(Math.random() * (10 - 0) + 0);
//     }
//     out(arr);
// };

// let a = [];

// OutputArray(a, 8);

//     створити функцію яка приймає три числа та виводить та повертає найменьше. 

// function ReturnTheLowest(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return a;
//     } else if (b < a && b < c) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;

//     }
// };

// ReturnTheLowest(3333, 2, 3);

//     створити функцію яка приймає три числа та виводить та повертає найбільше. 

// function ReturnTheBiggest(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     } else if (b > a && b > c) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;

//     }
// };

// ReturnTheBiggest(1, 2, 3);

//     створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше 

// let arr = [177, 555, 555, 6676, 2545, 7, 6, 1, 6];

// function ReturnMinOutputMax(arr) {
//     let minimalValueOfArray = Math.min.apply(null, arr);
//     let maximalValueOfArray = Math.max.apply(null, arr);
//     console.log(maximalValueOfArray);

//     return minimalValueOfArray;

// }

// console.log(ReturnMinOutputMax(arr));

//     створити функцію яка виводить масив 

// let array = [34, "gnghkjhn", 556];

// function ArrOut() {
//     console.log(array);
// }
// ArrOut(array);

//     створити функцію яка повертає найбільше число з масиву 

// let arr = [177, 2545, 35555];
// let max = arr.reduce(function (a, b) {
//     return Math.max(a, b);
// });

// console.log(max)

//     створити функцію яка повертає найменьше число з масиву 

// let arr = [177, 555, 555, 6676, 2545, 7, 6, 1, 6];

// function Min(arr) {
//     let minimalValueOfArray = Math.min.apply(null, arr)
//     return minimalValueOfArray;
// }
// console.log(Min(arr));

//     створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його. 


// let arr = [177, 555, 555, 6676, 2545, 7, 6, 1, 6];

// function PutTogether(arr) {

//     let createArray = arr.join("");
//     return createArray;

// }
// console.log(PutTogether(arr));

//     створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. 

// let array = [1, 6, 6, 7];
// let sum = 0;
// let aver = 0;

// function GetAverage(array) {
//     for (i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//         aver = sum / array.length

//     }
//     return aver;

// }

//     Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об 'єктів в масиві 

// let array = [{
//         name: "sasha",
//         age: 22
//     },
//     {
//         breed: "british",
//         age: 9
//     }, {
//         breed: "british",
//         age: 9
//     }, {
//         breed: "british",
//         age: 9
//     }, {
//         breed: "british",
//         age: 9
//     }
// ];

// let sum = 0;
// let aver = 0;

// function GetNumbOfElements(array) {
//     for (i = 0; i < array.length; i++) {
//         sum = array.length;
//     };
//     return sum;
// }

// console.log(GetNumbOfElements(array));

//     Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них 

// let array = [{
//         name: "sasha",
//         sumOfFields: 66,
//         sumO: "686868",
//         age: 44
//     },
//     {
//         breed: "british",
//         age: 9,
//         aaa: 5
//     }, {
//         breed: "british",
//         age: 9
//     }, {
//         breed: "british",
//         age: 9,
//         go: "rytty",
//     }, {
//         fff: "british",
//         age: 9
//     }
// ];
// let number = 0

// function GetArray(array) {

//     for (const element of array) {
//         if (typeof element === "object") {
//             for (const key in element) {
//                 number++
//             }
//         }
//     }
//     return number;
// }

// let result = GetArray(array);
// console.log(result);

//     створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.

// function Add(arr1, arr2) {

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1.length === arr2.length) {
//             let element = arr1[i] + arr2[i];
//             console.log(element)
//         } else {
//             console.log("Arrays index are not equal")
//         }
//     }
// }
// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];

// Add(a, b);

//  приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr = [1, 2, 3, 4, 6, 7, 8, 9];

// function ChangePlaces(array, i) {
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//     return arr;
// };

// let arrToChange = ChangePlaces(arr, 6);
// console.log(arrToChange);

//*** створити функцію яка буде переносити елементи з значенням 0 у кінець маcuву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1, 0, 6, 0, 3] => [1, 6, 3, 0, 0]
// [0, 1, 2, 3, 4] => [1, 2, 3, 4, 0]
// [0, 0, 1, 0] => [1, 0, 0, 0]

// function NullToTheEnd(arr) {

//     let arrOFNulls = [];
//     let newArr = [];

//     for (const iterator of arr) {
//         if (iterator === 0) {
//             arrOFNulls.push(0);
//         } else {
//             newArr.push(iterator);
//         }
//     }
//     return newArr.concat(arrOFNulls);

// };

// console.log(NullToTheEnd([6,7,8,2,0,2,3,0,4,5,0,3,4]));


// Створити функцію яка :
// -Додає в боді блок з текстом "Hello owu" 

// var body = document.getElementsByTagName('body');
// let AddDivToBody = () => {
//     document.body.innerHTML = '<div>Hello owu</div>'
//     return document;
// }

// AddDivToBody();

// Додає в боді елемент з текстом.Тип елементу та текст отримати через аргументи 

// let body = document.getElementsByTagName('body');

// function AddElemToBody(elem, text) {
//     let addedElement = document.createElement(elem);
//     addedElement.innerText = text
//     document.body.appendChild(addedElement)
//     return document;
// };

// AddElemToBody("h1", "Hi");


//     приймає масив автомобілів(можна взяти з попередніх дз), та індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let arrayOfAutos = [{

//         car: "Toyota",
//         model: "Camry",
//         yearOfProduction: 2015,
//         km: 140000,
//     },
//     {
//         car: "Renault",
//         model: "Logan",
//         yearOfProduction: 2018,
//         km: 60000,
//     },
//     {
//         car: "Audi",
//         model: "Jetta",
//         yearOfProduction: 2017,
//         km: 150000,
//     },
//     {
//         car: "Mercedes",
//         yearOfProduction: 2017,
//         km: 150000,

//     }
// ]

// function AddElemToBody(arrayOfAutos, idTag) {

//     let block = document.getElementById(idTag);
//     let ul = document.createElement('ul')

//     for (let i = 0; i < arrayOfAutos.length; i++) {
//         const auto = arrayOfAutos[i];

//         let li = document.createElement("li");
//         li.innerHTML = `${auto.car}`

//         ul.appendChild(li);
//     }
//     block.appendChild(ul);
// };

// AddElemToBody(arrayOfAutos, "listOfAutos");

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.Всі властивості авто в обному блоці 

// function AddDivElementToBody(arrayOfAutos, idTag) {

//     let block = document.getElementById(idTag);

//     for (let i = 0; i < arrayOfAutos.length; i++) {
//         const auto = arrayOfAutos[i];
//         let divElement = document.createElement("div");
//         divElement.innerHTML = `${auto.car + "-" + auto.model + "-"+ auto.yearOfProduction + "-" + auto.km}`
//         block.appendChild(divElement)
//     }
//     ;
// };

// AddDivElementToBody(arrayOfAutos, "listOfAutos");

// приймає масив автомобілів(можна взяти з попередніх дз), та індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function AddDivElementToBody(arrayOfAutos, idTag) {

//     let block = document.getElementById(idTag);

//     for (let i = 0; i < arrayOfAutos.length; i++) {
//         const auto = arrayOfAutos[i];
//         let divElement = document.createElement("div");
//         divElement.innerHTML = `<div>${auto.car}</div>` + `<div>${auto.model}</div>` + `<div>${auto.yearOfProduction}</div>` + `<div>${auto.km}</div>` + '</br>';
//         block.appendChild(divElement)

//     };
// };

// AddDivElementToBody(arrayOfAutos, "listOfAutos");


//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",


// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// }];

// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// }, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// }, {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// }, ];



// function Connect(arrOFUsers, arrOFCities) {

//     let users = JSON.parse(JSON.stringify(arrOFUsers));
//     let cities = JSON.parse(JSON.stringify(arrOFCities));

//     for (const user of users) {
//         for (const city of cities) {

//             if (user.id  === city.user_id) {
//                 user.adress = city
//             }
            
//         }
        
//     }

//     return users;
// };


// let conncet = Connect(usersWithId, citiesWithId);

// console.log(conncet)
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [];



// function AddDivElementToBody(numbOfTheRule, title, bodyOfRule) {
//     for (let i = 0; i < 1; i++) {
//         const rule = rules[i];
//         let divElement = document.createElement("div");
//         divElement.innerHTML = `<div>${numbOfTheRule}</div>` + `<div>${title}</div>` + `<div>${bodyOfRule}</div>` + `</br>`
//         document.body.appendChild(divElement);
//     };
// };

// AddDivElementToBody(1, "Первое правило Бойцовского клуба.", "Никому не рассказывать о Бойцовском клубе.");
// AddDivElementToBody(2, "Второе правило Бойцовского клуба.", "Никогда никому не рассказывать о Бойцовском клубе.");