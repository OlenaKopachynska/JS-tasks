// Взяти файл template_2.html та працювати в ньому -
//     Напишіть код, який:
//     --змінює колір тексту елемнту з ід main_header на будь - який інший

// let changeColor = document.getElementById("main_header");
// changeColor.style.color = "pink";


//     --робить шириниу елементу ul 400 пікселів

// let changeWidth = document.getElementsByTagName("ul");

// for (let i = 0; i < changeWidth.length; i++) {
//     changeWidth[i].style.width = "400px";
// }

//     --робить шириниу всіх елементів з класом linkList шириною 50 %

// let changeWidth = document.getElementsByClassName("linkList");

// for (let i = 0; i < changeWidth.length; i++) {
//     changeWidth[i].style.width = "50%";
// }


//     --отримує текст який зберігається в елементі з класом listElement2

// let getText = document.getElementsByClassName("listElement2")[0].innerText;

// console.log(getText);

//     --отримує всі елементи li та змінює ім колір фону на сірий

// let changeBackColor = document.getElementsByTagName("li");

// for (let i = 0; i < changeBackColor.length; i++) {
//     changeBackColor[i].style.backgroundColor = "grey";
// }

//     --отримує всі елементи 'a' та додає їм клас anchor

// let addClassAnchor = document.getElementsByTagName("a");

// for (let i = 0; i < addClassAnchor.length; i++) {
//     addClassAnchor[i].classList.add("anchor");
// }

// --отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let link3ChangeFont = document.getElementsByTagName("a");

// for (let i = 0; i < link3ChangeFont.length; i++) {

//     if (link3ChangeFont[i].textContent === "link3") {

//         link3ChangeFont[i].style.fontSize = "30px";
//     }
    
// }


// --отримує всі елементи 'a' та додає їм клас element_XXX.Де XXX - текстовий контент елементу a

// let addClassXXX = document.getElementsByTagName("a");

// for (let i = 0; i < addClassXXX.length; i++) {
//     let textCont = addClassXXX[i].textContent;
//     addClassXXX[i].classList.add("element_" + textCont)

// }


//     --отримує всі елементи 'sub-header' та змінює колір фону.Фон отримати з prompt()

// let changeBackgroundColor = document.getElementsByClassName("sub-header");
// let input = prompt("Choose color");

// for (let i = 0; i < changeBackgroundColor.length; i++) {
    
// changeBackgroundColor[i].style.bachgroundColor = "input"
// }




//     --отримує всі елементи 'sub-header'
// та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()
//     --отримує елемент з класом content_1 та заміняє в ньому тест на довільний.Текст отримати з prompt()
//     --отримати елементи p та змінити їм paddin на довільне значення
//     --отримати елементи з класом text2 та змінити їм текст на довільне значення