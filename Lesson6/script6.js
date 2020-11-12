// ***************TASK 1 *************************
// -создать массив с 20 числами.

//let numbers = [11, -1, 12, 45, 0, 10, 34, 5, 7, 4, 8, 5, -5, 7, -3, 4, 5, 6, 2, 6];

//     --при помощи метода sort и колбека отсортировать массив.

//let sorted = console.log(numbers.sort((a, b) => a-b));

//     --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

//let sorted2 = console.log(numbers.sort((a, b) => b - a));

//     --при помощи filter получить числа кратные 3

//let filtered = console.log(numbers.filter((a) => a % 3 === 0))

//     --при помощи filter получить числа кратные 10

//let filtered2 = console.log(numbers.filter((a) => a % 10 === 0))

//     --перебрать(проитерировать) массив при помощи foreach()

// numbers.forEach(element => console.log(element));

//     --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

//numbers.map(element => console.log(element*3));

//*****************TASK 2*********************************

//-создать массив со словами на 15 - 20 элементов.
//--отсортировать его по алфавиту в восходящем порядке.
//--отсортировать его по алфавиту в нисходящем порядке.
//--отфильтровать слова длиной менее 4 х символов
//--перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!"в конце

//let wordArray = ["kot", "pes", "ryba", "homyak", "svynia", "chaika", "snihur", "lev", "los", "sobaka", "koniaka", "slon", "tyhr", "zebra", "pinguin", "zaba"]

// console.log(wordArray.sort())

// console.log(wordArray.sort((a,b) => -1))

// let filter = wordArray.filter((value) => value.length<4);
// console.log(filter);

// let mapp = wordArray.map(value => value + "!")
// console.log(mapp);

//**************TASK 3  *************************

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     name: 'olya',
//     age: 28,
//     status: false
// }, {
//     name: 'max',
//     age: 30,
//     status: true
// }, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true
// }, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {
//     name: 'olya',
//     age: 31,
//     status: false
// }, {
//     name: 'max',
//     age: 31,
//     status: true
// }];

// відсортувати його за віком(зростання, а потім окремо спадання) 

// let sortedUsers = users.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(sortedUsers);

// let sortedUsers2 = users.sort((a, b) => b.age > a.age ? 1 : -1);
// console.log(sortedUsers2);

// відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання) 



let sortByNameLength = users.sort((a, b) => a.name.length - b.name.length);
console.log(sortByNameLength);

let sortByNameLength = users.sort((a, b) => b.name.length - a.name.length);
console.log(sortByNameLength);

//пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін) 



// const clone = JSON.parse(JSON.stringify(users));

// clone.map((a) => a.id = "id_" + a.name);
// console.log(users);
// console.log(clone);

//відсортувати його за індентифікатором



// const clone = JSON.parse(JSON.stringify(users));

// clone.map((a) => a.id = "id_" + a.name);

// let sortedClonedUsers = clone.sort((a, b) => a.id.length - b.id.length)

// console.log(users);
// console.log(clone);

// console.log(sortedClonedUsers)