//************Promises**********************


// function startYourDay(day) {

//     return new Promise((resolve, reject) => {

//         console.log("Good morning. It is " + day)

//         setTimeout(function () {

//             if (day === "Sunday") {

//                 reject('sleeep');

//             } else {
//                 resolve("stand up right now!!!!!")
//             }

//         }, 1500);
//     })
// }

// function eatBreakfast(food) {

//     return new Promise((resolve, reject) => {

//         console.log("Cheking if there is something in the fridge..........")

//         setTimeout(function () {

//             if (!food) {
//                 reject("no food in the fridge")
//                 console.log("без їжі нікуда ");
//                 return
//             } else {
//                 resolve("Bon apetite.Today we have " + food);
//             }
//         }, 2000)
//     })
// }




// function goToWork(transport) {

//     return new Promise((resolve, reject) => {
//         console.log("So how do i get to work today?Thinking......");
//         setTimeout(() => {


//             if (!transport) {

//                 reject("No transport");

//             } else if (transport === "car") {
//                 resolve("Today i am going to work by " + transport)

//             } else {
//                 console.log("Lets go to the bus stop");
//                 console.log("Waitting for " + transport + "........");
//                 setTimeout(() => {
//                     resolve("Finally bus arrived!!")


//                 }, 4000)

//             }
//         }, 2000)

//     })

// }


// function work() {

//     return new Promise((resolve) => {
//         let i = 0;
//         while (i < 10) {
//             i++

//             console.log("work hard....");



//         }
//         setTimeout(() => {
//             resolve("hoooray i can finally go home!!!!!")


//         }, 5000)
//     })
// }

// function goHome(transport) {

//     return new Promise((resolve) => {

//         if (transport === "car") {
//             resolve("My boyfriend is waiting outside the office")
//         } else {
//             console.log("Lets go to the bus stop");
//             resolve("Waitting for " + transport + "........");
//         }
//     })
// }

// function prepareSupper(food) {
//     return new Promise((resolve, reject) => {
//         console.log("Time to have supper");
//         console.log("cheking fridge............");

//         if (food) {
//             resolve("There are products and I can prepare tasty supper");
//         } else {
//             reject("Go to the shop!");
//         }
//     })

// }




// startYourDay("Monday")
//     .then(value => {
//         console.log(value)
//         return eatBreakfast("eggg")
//     })
//     .then(value => {
//         console.log(value);
//         return goToWork("bus")
//     })
//     .then(value => {
//         console.log(value);
//         return work()
//     })
//     .then(value => {
//         console.log(value);
//         return goHome("car")
//     })

//     .then(value => {
//         console.log(value);
//         return prepareSupper("food")
//     })
//     .then(value => {
//         console.log(value);
//         console.log("Good night");
//     })


//     .catch(reason => {
//         alert(reason)
//     })

//*****************Async Await *************************/


// async function myDay(day) {

//     try {

//         const start = await startYourDay("Monday")
//         console.log(start);


//         const eat = await eatBreakfast("omlette")
//         console.log(eat);

//         const goWork = await goToWork("car")
//         console.log(goWork);


//         const doWork = await work()
//         console.log(doWork);

//         const goBackHome = await goHome("bus")
//         console.log(goBackHome);

//         const supper = await prepareSupper()
//         console.log(supper);

//     } catch (error) {
//         console.log("*****************");
//         console.log(error);

//     }





// }

// myDay()


//*********Callbacks**************** */

// function startYourDay(day, eatBreakfast) {


//     console.log("Good morning. It is " + day)


//     if (day === "Sunday") {

//         console.log('sleeep');

//     } else {
//         console.log("stand up right now!!!!!")
//     }



//     eatBreakfast("egg", (transport, work) => {
//         console.log("So how do i get to work today?Thinking......");



//         if (!transport) {

//             console.log("No transport");

//         } else if (transport === "car") {
//             console.log("Today i am going to work by " + transport)

//         } else {
//             console.log("Lets go to the bus stop");
//             console.log("Waitting for " + transport + "........");

//             console.log("Finally bus arrived!!")

//         }

//         work((transport, prepareSupper) => {
//             if (transport === "car") {
//                 console.log("My boyfriend is waiting outside the office")
//             } else {
//                 console.log("Lets go to the bus stop");
//                 console.log("Waitting for " + transport + "........");
//             }


//             prepareSupper("fish")
//         })
//     })
// }

// startYourDay("day", (food, goToWork) => {

//     console.log("Cheking if there is something in the fridge..........")

//     if (!food) {
//         console.log("no food in the fridge")
//         console.log("без їжі нікуда ");
//         return
//     } else {
//         console.log("Bon apetite.Today we have " + food);
//     }


//     goToWork("car", (goHome) => {
//         let i = 0;
//         while (i < 10) {

//             console.log("work hard....");
//             i++
//         }
//         console.log("hoooray i can finally go home!!!!!")
//         goHome("bus", (food) => {
//             console.log("Time to have supper");
//             console.log("cheking fridge............");

//             if (food) {
//                 console.log("There are products and I can prepare tasty supper");
//             } else {
//                 console.log("Go to the shop!");
//             }



//         })
//     })
// })






