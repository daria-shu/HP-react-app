 // 3. Аббревиатура
 // Напишите функцию, что принимает три слова(имя и фамилию или имя, фамилию и отчество) и возвращает аббревиатуру
function abbr(firstName, lastName, surName){
    return firstName[0]+lastName[0]+surName[0]
}

let fn = prompt("Введите фамилию")
let ln = prompt("Введите имя")
let sn = prompt("Введите отчество")
 alert(abbr(fn, ln, sn))

