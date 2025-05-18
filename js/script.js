// number - число
// bignit - числа большого разряда
// string - строка (текст)
// boolean - true, false
// null и undefined - неизвестное значение (ничего)

// console.log(123)
// console.log("ПРивет мир!")

// let a = 5; // let - объявление переменной
// let b = 22;

// if(a > b){
//     console.log("а больше b")
// }else{
//     console.log("а меньше b")
// }


// let password = 123123123;
// let usePassword = 123123123;

// if(password == usePassword){
//     console.log("Доcтуп разрешён")
// }else{
//     console.error("Доступ запрещён")
// }

// // тернарный оператор - сокращённая версия if else
// str = password == usePassword ? "Доcтуп разрешён" : "Доступ запрещён"
// console.log(str);


// let a = "Муха села на варенье";
// let b = null;
// let c = null;

// // или - || 
// // и - &&
// // нет - !


// if(!a || !b == !c){
//     console.log("Правильно")
// }else{
//     console.error("Неправильно")
// }

// let x = 6;

// switch(x){
//     case 1: // if(x == 1)
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break;
//     case 3:
//         console.log(3)
//         break;
//     case 4:
//         console.log(4)
//         break;
//     default: // else - все остальные значения
//         console.error("Такого числа нет")
//         break;
// }

// let a - объевление переменной
// const b - не изменяемые переменные

let a = 1
a = 3
console.log(a) // выведет 3

const b = 1 
b = 3 // будет ошибка
console.log(a)

// let - изменяется
// const - не изменяется