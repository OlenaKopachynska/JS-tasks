//**********************Task 1*******************************

function DescribeTagName(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
};

let a = new DescribeTagName("a", "Каждый элемент <area> определяет активные области изображения, которые являются ссылками", [{name: "accesskey", actionOfAttr: "Переход к области с помощью комбинации клавиш."}, {name: "alt", actionOfAttr: "Альтернативный текст для области изображения."}]);
let div = new DescribeTagName("div", "Элемент <div> является блочным элементом и предназначен для выделения ...", [{name: "align", actionOfAttr: "Задает выравнивание содержимого тега <div>."} , {name: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."}]);
let h1 = new DescribeTagName("h1", "тег <h1> представляет собой наиболее важный заголовок первого уровня ...", [{name: "align", actionOfAttr: "Определяет выравнивание заголовка."}, {name: "accesskey", actionOfAttr: "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."}]);
let span = new DescribeTagName("span", "Тег <span> предназначен для определения строчных элементов документа ...", [{name: "spellcheck", actionOfAttr: "Указывает браузеру проверять или нет правописание и грамматику в тексте."},{name: "title", actionOfAttr:"Описывает содержимое элемента в виде всплывающей подсказки."}]);
let input = new DescribeTagName("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем ...", [{name: "accept", actionOfAttr: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."}, {name: "border", actionOfAttr: "Толщина рамки вокруг изображения."}]);
let form = new DescribeTagName("form", "Тег <form> устанавливает форму на веб-странице. ...", [{name: "action", actionOfAttr: "Адрес программы или документа, который обрабатывает данные формы."}, {name: "target", actionOfAttr: "Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат."}]);
let option = new DescribeTagName("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ...", [{name: "disabled", actionOfAttr: "Заблокировать для доступа элемент списка."}, {name:"value", actionOfAttr: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}]);
let select = new DescribeTagName("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка ...",[{name: "disabled", actionOfAttr: "Блокирует доступ и изменение элемента."}, {name:"multiple", actionOfAttr:"Позволяет одновременно выбирать сразу несколько элементов списка."}]);

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);

//**********************Task 2*******************************

// -Створити об 'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let drivers = {
//     name: "andrew",
//     age: 45
// };

// let car = {
//     model: 'cx3',
//     manufacturer: "mazda",
//     yearOFProduction: 2015,
//     maxSpeed: 200000,
//     capacity: 3.0,

//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     },
//     info: function () {

//         if(this.shafer) {
//             console.log(` 
//             model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             yearOFProduction: ${this.yearOFProduction}, 
//             maxSpeed: ${this.maxSpeed},
//             capacity: ${this.capacity},
//             shafer: ${this.shafer.name}, ${this.shafer.age} years old
//             `);

//         } else {
//               console.log(` 
//             model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             yearOFProduction: ${this.yearOFProduction}, 
//             maxSpeed: ${this.maxSpeed},
//             capacity: ${this.capacity},
//             `);
//         }

//     },
//     increaseMaxSpeed: function (newSpeed) {
//         console.log(this.maxSpeed + newSpeed);
//     },
//     changeYear: function (newValue) {
//         this.yearOFProduction = newValue;
//         console.log(this.yearOFProduction);
//     },
//     addDriver: function (driver) {
//         this.shafer = driver;

//     }
// };



// car.drive();
// car.increaseMaxSpeed(500);
// car.changeYear(2030);
// car.addDriver(drivers);
// car.info();

//**********************Task 3*******************************

//  Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//      --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//      --info() - яка виводить всю інформацію про автомобіль
//      --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      --changeYear(newValue) - змінює рік випуску на значення newValue
//      --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, manufacturer, yearOFProduction, maxSpeed, capacity) {
//     this.model = model,
//         this.manufacturer = manufacturer,
//         this.yearOFProduction = yearOFProduction,
//         this.maxSpeed = maxSpeed,
//         this.capacity = capacity,

//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//         },
//         this.info = function () {

//             if (this.shafer) {
//                 console.log(` 
//             model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             yearOFProduction: ${this.yearOFProduction}, 
//             maxSpeed: ${this.maxSpeed},
//             capacity: ${this.capacity},
//             shafer: ${this.shafer.name}, ${this.shafer.age} years old
//             `);

//             } else {
//                 console.log(` 
//             model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             yearOFProduction: ${this.yearOFProduction}, 
//             maxSpeed: ${this.maxSpeed},
//             capacity: ${this.capacity},
//             `);
//             }

//         },
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(this.maxSpeed + newSpeed);
//         },
//         this.changeYear = function (newValue) {
//             this.yearOFProduction = newValue;
//             console.log(this.yearOFProduction);
//         },
//         this.addDriver = function (driver) {
//             this.shafer = driver;

//         }
// };

// let renault = new Car("logan", "renault", 2017, 200000, 3.0)
// let drivers = {
//     name: "andrew",
//     age: 45
// };

// renault.drive();
// renault.increaseMaxSpeed(500);
// renault.changeYear(2030);
// renault.addDriver(drivers);
// renault.info();

//**********************Task 4*******************************

// -Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class CreateCar {

//     constructor(model, manufacturer, yearOFProduction, maxSpeed, capacity) {
//         this.model = model,
//             this.manufacturer = manufacturer,
//             this.yearOFProduction = yearOFProduction,
//             this.maxSpeed = maxSpeed,
//             this.capacity = capacity};

//             drive() {
//                 console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//             };
//             info() {
//                 if (this.shafer) {
//                     console.log(` 
//                      model: ${this.model},
//                      manufacturer: ${this.manufacturer},
//                      yearOFProduction: ${this.yearOFProduction}, 
//                      maxSpeed: ${this.maxSpeed},
//                      capacity: ${this.capacity},
//                      shafer: ${this.shafer.name}, ${this.shafer.age} years old
//                      `);

//                 } else {
//                     console.log(` 
//                      model: ${this.model},
//                      manufacturer: ${this.manufacturer},
//                      yearOFProduction: ${this.yearOFProduction}, 
//                      maxSpeed: ${this.maxSpeed},
//                      capacity: ${this.capacity},
//                      `);
//                 }
//             };
//             increaseMaxSpeed(newSpeed) {
//                 console.log(this.maxSpeed + newSpeed);
//             };
//             changeYear(newValue) {
//                 this.yearOFProduction = newValue;
//                 console.log(this.yearOFProduction);
//             };
//             addDriver(driver) {
//                 this.shafer = driver;
//             };
//     }


// let tesla = new CreateCar("model S", "Tesla", 2020, 400000, 3.0)

// let drivers = {
//             name: "andrew",
//             age: 45
//         };

//         tesla.drive();
//         tesla.increaseMaxSpeed(500);
//         tesla.changeYear(2030);
//         tesla.addDriver(drivers);
//         tesla.info();

//**********************Task 5*******************************

// створити класс попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     --за допоиоги циклу знайти яка попелюшка повинна бути з принцом


////create cinerellas
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let cinder1 = new Cinderella("Adelina", 15, 36);
// let cinder2 = new Cinderella("Karina", 18, 37);
// let cinder3 = new Cinderella("Nataly", 15, 38);
// let cinder4 = new Cinderella("Roxi", 19, 36);
// let cinder5 = new Cinderella("Erika", 25, 38);
// let cinder6 = new Cinderella("Sofi", 16, 36);
// let cinder7 = new Cinderella("Ann", 14, 36);
// let cinder8 = new Cinderella("Julia", 19, 39);
// let cinder9 = new Cinderella("Ira", 30, 36);
// let cinder10 = new Cinderella("Marta", 21, 37);

// let arrayOFCinderllas = [cinder1, cinder2, cinder3, cinder4, cinder5, cinder6, cinder7, cinder8, cinder9, cinder10]

//// create prince
// class Prince {
//     constructor(name, age, foundSize) {
//         this.name = name;
//         this.age = age;
//         this.foundSize = foundSize;
//     }
// }
// let prince = new Prince("Sergio", 25, 39);

//// create method that is looking for the right cinderella
// let parsedarrayOFCinderllas = JSON.parse(JSON.stringify(arrayOFCinderllas));
// let parsedPrince = JSON.parse(JSON.stringify(prince));

// for (const cinderella of parsedarrayOFCinderllas) {
//     if (cinderella.footSize === parsedPrince.foundSize) {
//         console.log(`${cinderella.name} matches ${parsedPrince.name}`);
//     }

// }

//**********************Task 6*******************************

// -створити функцію конструктор попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//     --функція повинна приймати масив попелюшок, та шукає ту котра йому підходить 

////create cinerellas
// function Cinderella(name, age, footSize) {

//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// let cinder1 = new Cinderella("Adelina", 15, 36);
// let cinder2 = new Cinderella("Karina", 18, 37);
// let cinder3 = new Cinderella("Nataly", 15, 38);
// let cinder4 = new Cinderella("Roxi", 19, 36);
// let cinder5 = new Cinderella("Erika", 25, 38);
// let cinder6 = new Cinderella("Sofi", 16, 36);
// let cinder7 = new Cinderella("Ann", 14, 36);
// let cinder8 = new Cinderella("Julia", 19, 39);
// let cinder9 = new Cinderella("Ira", 30, 36);
// let cinder10 = new Cinderella("Marta", 21, 37);

// let arrayOFCinderllas = [cinder1, cinder2, cinder3, cinder4, cinder5, cinder6, cinder7, cinder8, cinder9, cinder10]

// ////create prince
// function Prince(name, age, foundSize) {
//     this.name = name;
//     this.age = age;
//     this.foundSize = foundSize;

// };

// let prince = new Prince("Sergio", 25, 39);

// ////create function that is looking for the right cinderella


// function FindCinderella(arrayOFCinderllas) {

//     let parsedarrayOFCinderllas = JSON.parse(JSON.stringify(arrayOFCinderllas));
//     let parsedPrince = JSON.parse(JSON.stringify(prince));
    
//     for (const cinderella of parsedarrayOFCinderllas) {
//         if (cinderella.footSize === parsedPrince.foundSize) {
//             console.log(`${cinderella.name} matches ${parsedPrince.name}`);
//         }

//     }
// }

// FindCinderella(arrayOFCinderllas);