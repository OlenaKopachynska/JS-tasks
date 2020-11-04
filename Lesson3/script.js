// // ***TASK 1**** створити об'єкт (не меньше 5ти властивостей) який описує собаку/людину/автомобіль/квартиру/книгу

// let dog = {
//     name: "Ralf",
//     age: 5,
//     isTrained: true,
//     height: 45,
//     breed: "cockapoo"
// }


// let human = {
//     name: "Anatoliy",
//     age: 40,
//     isWorking: true,
//     height: 170,
//     location: "Lviv",
// }

// let car = {
//     model: "Tesla",
//     yearOFProduction: 2015,
//     mileage: 115000,
//     color: "black",
//     location: "Warsaw",
// }

// let apartament = {
//     floor: 3,
//     pricePerMeter: 18000,
//     forSaleByAgent: false,
//     NumOFRooms: 3,
//     location: "Lviv",
// }

// let book = {
//     name: "The Da Vinci Code",
//     author: "Den Braun",
//     bookType: "fiction",
//     numOfPages: 300,
//     isAvailable: false,
// }

// ***TASK 2****Створити масив та вивести його в консоль: з 5 собак/3 5 людей / з 5 автомобілів

// let dogForSale = [{
//         name: 'Cha-cha',
//         age: 2,
//         isTrained: true,
//         height: 45,
//         breed: "cockapoo"

//     },
//     dog, dog, dog, dog

// ];
// console.log(dogForSale);

// let humanForSale = [];

// humanForSale[0] = {
//     name: "andrew",
//     age: 40,
//     isWorking: true,
//     height: 170,
//     location: "NewYork",
// }

// humanForSale[1] = {
//     name: "ann",
//     age: 40,
//     isWorking: true,
//     height: 170,
//     location: "NewYork",
// }

// humanForSale[2] = {
//     name: "Kate",
//     age: 40,
//     isWorking: false,
//     height: 170,
//     location: "Chicago",
// }
// humanForSale[3] = {
//     name: "Dan",
//     age: 40,
//     isWorking: false,
//     height: 170,
//     location: "Chicago",
// }
// humanForSale[4] = {
//     name: "Robin",
//     age: 40,
//     isWorking: false,
//     height: 170,
//     location: "Chicago",
// }

// console.log(humanForSale);

// let carForSale = [{model: "fffff"}, car, car, car, car ];
// console.log(carForSale);

// ***TASK 3****створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом будинок/водій /іграшку /стіл /сумky


// let building = {
//     numbersOfFloors: 100,
//     numbersOfFlats: 788,
//     adress: {
//         streetName: "Stryiska",
//         streetNumber: 34
//     },
//     height: 700,
//     famousFamiliesInTheHouse: ['java', 'js', 'html', 'mysql']
// };

// let taxiDriver = {
//     numbersOfCars: 3,
//     yearOld: 50,
//     adress: {
//         streetName: "Stryiska",
//         streetNumber: 34
//     },
//     height: 168,
//     modelsOfCars: ['Tesla', 'Peugeot', 'Nissan', 'chevrolet']

// }

// let favouriteToy = {
//     name: "Lion",
//     yearOld: 3,
//     material: {
//         outerMaterial: "Polyester",
//         innerMaterial: "Plastik"
//     },
//     height: 40,
//     modelsAvailableInTheShop: ['MagiCorn', 'Ruvas', 'Rainbow', 'Invisible']

// }

// let table = {
//     type: "square",
//     material: {
//         outerMaterial: "wood",
//         innerMaterial: "wood"
//     },
//     height: 140,
//     width: 40,
//     length: 150,
//     modelsAvailableInTheShop: ['round', 'oval', 'triangle']

// }

// let bag = {
//     type: "square",
//     material: {
//         outerMaterial: "rubber",
//         innerMaterial: "wool"
//     },
//     height: 40,
//     width: 20,
//     length: 30,
//     modelsAvailableInTheShop: ['round', 'oval', 'triangle']

// }


//***TASK 4 ***


// let users = [{
//         name: 'vasya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true
//     }
// ];

// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[users.length - 2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].name, users[4].age);
// console.log(users[5].age, users[5].status);

// ***TASK5***    Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -отримує текст з параграфа з id "content" 

// let text = document.getElementById("content").innerText;
// console.log(text);

//     отримує текст з блоку з id "rules" 

// let text1 = document.getElementById("rules").innerText;
// console.log(text1);

//     замініть текст параграфа з id 'content' на будь - який інший

// let newText = document.getElementById("content");
// newText.innerText = "Lets get started";

//     замініть текст параграфа з id 'rules' на будь - який інший

// let text1 = document.getElementById("rules").innerText = "Continue";

//     змініть кожному елементу колір фону на червоний 

// let tagP = document.getElementsByTagName("p");
// let tagDiv = document.getElementsByTagName("div");
// let tagUl = document.getElementsByTagName("ul");



// for (let i = 0; i < tagP.length && i < tagDiv.length && i < tagUl.length; i++) {
//     document.getElementsByTagName("p")[i].style.backgroundColor = "red";
//     document.getElementsByTagName("div")[i].style.backgroundColor = "red";
//     document.getElementsByTagName("ul")[i].style.backgroundColor = "red";
// }

//     змініть кожному елементу колір тексту на синій 

// let tagP = document.getElementsByTagName("p");
// let tagDiv = document.getElementsByTagName("div");
// let tagUl = document.getElementsByTagName("ul");

// for (let i = 0; i < tagP.length && i < tagDiv.length && i < tagUl.length; i++) {
//     tagP[i].style.color = "blue";
//     tagDiv[i].style.color = "blue";
//     tagUl[i].style.color = "blue";
// }

//     отримати весь список класів елемента з id = rules і вивести їх в console.log

// let get = document.getElementById('rules');

// console.log(get.classList);

//     отримати всі елементи з класом fc_rules 

// let getEl = document.getElementsByClassName("fc_rules");
// console.log(getEl);

//     поміняти колір тексту у всіх елементів fc_rules на червоний

// let getEl = document.getElementsByClassName("fc_rules");

// for (let i = 0; i < getEl.length; i++) {
//     getEl[i].style.color = "red";
// }


//=================class=================
 