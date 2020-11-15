//Task12

//--создать скрипт, который берет считывает на странице(rules.html) текст и делает сбоку меню - оглавление по всем заголовкам которые есть в тексте.
//При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// document.body.onload = function () {
//     MakeMenu()
// }

// function MakeMenu() {
//     //find menu div
//     let mainMenuContainer = document.getElementById("menu_div");
//     //find h2 array 
//     let h2Array = document.getElementsByTagName("h2");
//     //create ul
//     let menuUl = document.createElement("ul")

//     for (let i = 0; i < h2Array.length; i++) {
//         //give id to all h2 elements on the page
//         h2Array[i].id = "rule" + (i + 1)
//         //create li elements in ul
//         let menuLi = document.createElement("li")
//         //create a el in the li elements 
//         let a = document.createElement("a")
//         //give anchor to a element
//         a.href = "#rule" + (i + 1)
//         //and write rules in the a element
//         a.innerText = h2Array[i].innerText;
//         // append a into li and li into ul
//         menuLi.appendChild(a)
//         menuUl.appendChild(menuLi)
//     }

//     //append ul into menu div
//     let menu = mainMenuContainer.appendChild(menuUl)
// }