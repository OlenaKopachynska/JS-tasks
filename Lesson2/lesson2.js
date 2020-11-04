// -------------------------TASK 1--------------------------------

// var numbers = [23, 45, 56, 78, 35];
// var fruits = ["Яблуко", "Банан", "Слива", "Апельсин", "Ківі"];
// var array = ["Яблуко", "Банан", true, 34, 1];
// var arr = [];
// arr[0] = "Bus";
// arr[1] = "Car";
// arr[2] = "Train";
// arr[3] = "Plane";

// -------------------------TASK 2--------------------------------

// for(let i = 0; i<10; i++) {
//     document.write("<div>Hello</div>");

// }

// -------------------------TASK 3--------------------------------

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello ${i}</div>`);

// }
// -------------------------TASK 4--------------------------------
// let i = 0;
// while (i < 20) {
//     document.write("<h1>Nice to meet you</h1>");
//     i++;
// }

// -------------------------TASK 5--------------------------------
// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>Nice to meet you ${i}</h1>`);
//     i++;
// }

// -------------------------TASK 6--------------------------------

// var numbers = [23, 45, 56, 78, 35, 456, 2, 78,567, 80];

// for (i=0; i<10; i++) {
//     console.log(numbers[i]);
// }

// -------------------------TASK 7--------------------------------

// var fruits = ["Яблуко", "Банан", "Слива", "Апельсин", "Ківі", "Ананас", "Виноград", "Грушка", "Персик", "Мандаринка"];
// for (i = 0; i < 10; i++) {
//     console.log(fruits[i]);
// }

// -------------------------TASK 8--------------------------------
// var array = [NaN, "Банан", 567, "Апельсин", true, "Ананас", 2, "Грушка", undefined, null];
// for (i = 0; i < 10; i++) {
//     console.log(array[i]);
// }

// -------------------------TASK 9--------------------------------

// var array = ["Банан", "Банан", 567, "Апельсин", true, "Ананас", 2, "Грушка", false, true];
// for (i=0; i<array.length; i++) {
//     if (typeof array[i] == "boolean") {
//         console.log(array[i]);
//     }
// }
// -------------------------TASK 10--------------------------------

// var array = ["Банан", "Банан", 567, "Апельсин", true, "Ананас", 2, "Грушка", false, true];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] == "number") {
//         console.log(array[i]);
//     }
// }
// -------------------------TASK 11--------------------------------


// var array = ["Банан", "Банан", 567, "Апельсин", true, "Ананас", 2, "Грушка", false, true];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] == "string") {
//         console.log(array[i]);
//     }
// }
// -------------------------TASK 12--------------------------------

// var array = [];
// array[0] = "Hello";
// array[1] = "andrew";
// array[2] = "it is";
// array[3] = "me";
// array[4] = 56;
// array[5] = true;
// array[6] = undefined;
// array[7] = "car";
// array[8] = "tram";
// array[9] = 3.14;
// array[10] = null;

// for(i=0; i<10; i++) {
//     console.log(array[i]);
// }
// -------------------------TASK 13--------------------------------

// for (let index = 1; index <= 10; index++) {
//     console.log(index);
//     document.write(index + ",");


// }

// -------------------------TASK 14--------------------------------

// for (let index = 1; index <= 100; index++) {
//     console.log("step " + index);
//     document.write(index + ",");

// }

// -------------------------TASK 15--------------------------------

// for (let index = 0; index < 200; index+=2) {
//     console.log("step " + index);
//     document.write(`step: ${index} <br>`);

// }
// -------------------------TASK 16--------------------------------

// for (let i = 0; i < 100; i += 2) {
//     if (i%2 ===0) {
//         console.log("step " + i);
//         document.write(`step: ${i} <br>`);
//     }
// }

// -------------------------TASK 17--------------------------------
// for (let i = 1; i <= 100; i += 2) {
//     if (i%2 !== 0) {
//         console.log("step " + i);
//         document.write(`step: ${i} <br>`);
//     }
// }

// -------------------------TASK 18 - 19 --------------------------------

//??????????????????

// Додатково

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let num = "";
// for (let i = 0; i < array.length; i++) {
//     num = num + array[i]; 
// }

// console.log(num)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let num = "";
// let i = 0;
// while (i < array.length) {
//     num = num + array[i]; 
//     i++;
// }

// console.log(num);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let num = "";

// for (const i of array) {
//     num = num + i;
// }

// console.log(num);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let num = "";

// for (const i in array) {
//     num = num + array[i];
// }

// console.log(num);

// === === === === == === === === === == === === === === ==
// === === === === == === === === === == === === === === ==
// === === === === == === === === === == === === === === ==

//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     array.push(i);
// }

// console.log(array);

//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = ['a', 'b', 'c'];
// array.reverse();
// console.log(array);

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6

// let array = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
//     array.push(i);
// }
//  console.log(array);

//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6

// let array = [1, 2, 3];
// for (let i = 6; i > 3; i--) {
//     array.unshift(i);
// }
//  console.log(array);

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];

// document.write(arr.shift(0));

//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
// document.write(arr.pop(0));

//Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції slice перетворіть масив в[4, 5]

// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(3);
// console.log(slicedArr);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(0, 2);
// console.log(slicedArr);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]

// let arr = [1, 2, 3, 4, 5];
// let slpicedArr = arr.splice(1, 2);
// console.log(arr);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arr = [1, 2, 3, 4, 5];
// let slpicedArr = arr.splice(3, 0, 'a', 'b', 'c');

// console.log(arr);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let arr = [1, 2, 3, 4, 5];
// let slpicedArr = arr.splice(1, 0, 'a', 'b');
// let slpicedArr1 = arr.splice(6, 0, 'c',);
// let slpicedArr2 = arr.splice(8, 0, 'e', );

// console.log(arr);

//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
    
// }

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array = [];

// for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i]);

// }

// console.log(array);

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array = [];

// for (let i = 0; i < arr.length; i++) {
//     array[i] = arr[i];
// }

// console.log(array);

//========================================================================================================================
//========================================================================================================================
//========================================================================================================================

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while


// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let counter = 0;
// while (counter < numbers.length) {
//     let i = numbers[counter];
//     console.log(i);
//     counter++;
// }

//2. перебрати його циклом for

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let index = 0; index < numbers.length; index++) {

//     let i = numbers[index];
//     console.log(i);
// }

//перебрати циклом while та вивести  числа тільки з непарним індексом

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let counter = 0;
// while (counter < numbers.length) {
//     let i = numbers[counter];
//     console.log(i);
//     counter+=2;
// }

//перебрати циклом for та вивести  числа тільки з непарним індексом

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let index = 0; index < numbers.length; index+=2) {

//     let i = numbers[index];
//     console.log(i);
// }

//перебрати циклом while та вивести  числа тільки парні  значення

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i]%2 == 0) {
//         console.log(numbers[i])
//     }
//     i++

// }

//перебрати циклом for та вивести  числа тільки парні  значення

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let index = 0; index < numbers.length; index++) {
// if (numbers[index]%2 == 0) {

//     console.log(numbers[index])

// }

// }

//замінити кожне число кратне 3 на слово "okten"

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "okten"


//     }


// }

// console.log(numbers);

// вивести масив в зворотньому порядку

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// numbers.reverse();
// console.log(numbers);

//!!!!!!!!!!!!!!всі попередні завдання(окрім 8), але в зворотньому циклі(с заду на перед)

//створити пустий масив та : 
//-заповнити його 50 парними числами за допомоги циклу. 

// let arr =[];
// for (let i = 0; i < 100; i++) {

//     if (i%2 == 0) {
//         arr.push(i);
//     }

// }

// console.log(arr);


//-заповнити його 50 непарними числами за допомоги циклу.

// let arr =[];
// for (let i = 0; i < 100; i++) {

//     if (i%2 !== 0) {
//         arr.push(i);
//     }

// }

// console.log(arr);

//========================================================================================================================
//========================================================================================================================
//========================================================================================================================

// 1. Was before
// 2. Was before

//3.спользуя Math.random заполнить массив из ???(сколько хотите) элементов.диапазон рандома 8 до 732.(но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let arr =[];
// for (let i = 0; i < 5; i++) {

//     arr.push(Math.random() * (732 - 8) + 8);
// }

// console.log(arr);

//вывести на консоль  каждый третий елемент

// let arr =[];
// for (let i = 0; i < 5; i++) {

//     arr.push(Math.random() * (732 - 8) + 8);

// }

// console.log(arr);

// for (let i = 0; i < arr.length; i+=3) {
//     console.log(arr[i]);

// }

//вывести на консоль  каждый третий елемент но при условии что его значение является парным.

// let arr = [];
// for (let i = 0; i < 10; i++) {

//     arr.push(Math.floor(Math.random() * (732 - 8) + 8));

// }

// console.log(arr);

// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

//вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.

// let arr = [];
// for (let i = 0; i < 10; i++) {

//     arr.push(Math.floor(Math.random() * (732 - 8) + 8));

// }

// console.log(arr);
// let newArray = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         newArray.push(arr[i]);
//     }
// }

// console.log(newArray);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [];
// for (let i = 0; i < 10; i++) {

//     arr.push(Math.floor(Math.random() * (732 - 8) + 8));

// }

// console.log(arr);

// for (let i = 0; i < arr.length; i ++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


//масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
// let average = 0;

// for (let i = 0; i < arr.length; i++) {
//     average += arr[i] / arr.length;

// }

// console.log(average)

//створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [];
// for (let i = 0; i < 10; i++) {

//     arr.push(Math.floor(Math.random() * (732 - 8) + 8));

// }

// console.log(arr);

// let newArray = []

// for (let i = 0; i < arr.length; i ++) {

//     arr[i]*5;

//     newArray.push(arr[i] * 5);

// }
// console.log(newArray);

//створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.

// let array = ["apple", 567, null, 5, undefined, 7, "Pineapple"];
// let newArr = [];
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "number") {

//         newArr.push(array[i]);
//     }

// }

// console.log(newArr);