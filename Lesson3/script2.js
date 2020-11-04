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


// let input = (prompt("Choose color", "9999ff"));
// let input2 = input.toString();
// console.log(input2)

// let changeBackgroundColor = document.getElementsByClassName("sub-header");

// for (let i = 0; i < changeBackgroundColor.length; i++) {

// changeBackgroundColor[i].style.backgroundColor = `#${input2}`;
// }


//     --отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()

// let input = (prompt("Choose color", "9999ff"));
// let input2 = input.toString();

// let changeBackgroundColor = document.getElementsByClassName("sub-header");

// for (let i = 0; i < changeBackgroundColor.length; i++) {



//     if (changeBackgroundColor[i].textContent === "content 2 segment") {

//         changeBackgroundColor[i].style.backgroundColor = `#${input2}`;
//     }
// }

//     --отримує елемент з класом content_1 та заміняє в ньому тест на довільний.Текст отримати з prompt()

// let textInput = (prompt("type something here"));

// let changeText = document.getElementsByClassName("content_1");

// for (let i = 0; i < changeText.length; i++) {

//     changeText[i].textContent = `${textInput}`;

// }


//  --отримати елементи p та змінити їм paddin на довільне значення



// let changePadding = document.getElementsByTagName("p");

// let setPadding = Math.round(Math.random() * (100 - 0) + 0);


// for (let i = 0; i < changePadding.length; i++) {



//     console.log(setPadding);
//     changePadding[i].style.padding = `${setPadding}px`

// }



//     --отримати елементи з класом text2 та змінити їм текст на довільне значення


// let words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu"]
// let randomNumberOfwords = Math.round(Math.random() * (words.length - 1) + 1);
// let array = words.splice(0, randomNumberOfwords).join(" ");

// console.log(array);