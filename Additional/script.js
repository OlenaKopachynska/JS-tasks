//Task1

// сложить цифры числа:

// function sumDigits(num) {
//     let string = num.toString();
//     let array = string.split("")
//     let sum = 0;
//     array.forEach(number => {
//         sum += +number
//     });
//     console.log(sum);
// }

// sumDigits(10355);

//Task 2

// Проверьте, имеет ли строка одинаковое количество "" x "" и "" o "".Метод должен возвращать логическое значение и быть нечувствительным к регистру.Строка может содержать любые символы.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // потому что нет ни того ни другого 
// XO("zzoo") => false

// function CheckForIdentical(str) {

//     let array = str.split('')
//     let filterX = array.filter(el => el === "x" || el === "X")
//     let filterO = array.filter(el => el === "o" || el === "O")
//     if (filterX.length === filterO.length) {
//         return true;
//     }
//     return false
// }

// let result = CheckForIdentical("zzoo");
// console.log(result);

//Task 3

// найти приопущенную букву в массиве:

//     ["a", "b", "c", "d", "f"] - > "e" 
//       ["O", "Q", "R", "S"] - > "P"

// function findLEtter(array) {

//     for (let i = 1; i < array.length; i++) {
//         let value = array[i].charCodeAt();
//         let previousValue = array[i - 1].charCodeAt();
//         if ((value - previousValue) != 1) {
//             return String.fromCharCode(previousValue + 1);
//         }
//     }
// }

// console.log(findLEtter(["a", "b", "c", "d", "f"]))


//Task4
//Количество единиц
//Дана последовательность натуральных чисел в строке, завершающаяся двумя числами 0 подряд.Определите, 
//сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

//2176491947586100 - > 3


// function findAllOneNUmber(num) {

//     let string = num.toString();

//     let array = string.split("")

//     let findNumOne = array.filter(x => x == 1).length

//     console.log(findNumOne);

// }

// findAllOneNUmber(2176491947586100)

//Task 5

//Знайти набільший елемент в масиві за допомогою reduce
//[1, 6, 9, 0, 17, 88, 4, 7] - > 88

// let arr = [7, 6, 9, 0, 17, 88, 4, 7]

// let result = arr.reduce(function (prev, current) {

//     if (prev > current) {
//         return prev
//     } else {
//         return current
//     };
// }, 0);

// console.log(result); 


//Task 6

//Cоздать функцию которая принимает число и возвращает  текст как в примере:
//3275— > "3000 + 200 + 70 +5"

// function SplitNum(num) {

//     let stringNum = num.toString();
//     let array = stringNum.split("");
//     let newAR = [];
//     let tt = array.length
//     for (let i = 0; i < tt; i++) {

//         let addZero = array[0] * Math.pow(10, (array.length - 1)).toString();
//         array.splice(0, 1);
//         newAR.push(addZero, "+");
//     }

//     newAR.splice(-1, 1);

//     let cutted = array.slice(-1).toString()

//     newAR.push(cutted)

//     let result = newAR.join("")

//     console.log(result);
// }


// SplitNum(544834)

//Task 7 

//Реалізувати друкарську машинку. 
// У вас є текст ."Hello World"
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H(затримка 0.6)
// e(затримка 0.1)
// l(затримка 0.3)
// l(затримка 0.7)
// о(затримка 1)

// let i = 0;
// let txt = "hello World"
// let speed = Math.random() * (1000 - 100) + 100; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("container").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }

//  typeWriter()

//Task 8

//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку(цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %
//     Після того зробити перевірку досвіду ВСІХ наших водіїв.Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


//Task 9
//Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.
