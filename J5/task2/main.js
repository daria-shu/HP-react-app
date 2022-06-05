// 2. Найкоротше слово
// Напишіть функцію, що отримує у якості аргумента рядок слів та повертає довижину найкоротшого
// Приклад:
// "bitcoin take over the world maybe who knows perhaps" --> 3
// "turns out random test cases are easier than writing out basic ones" --> 3
// "lets talk about javascript the best language" --> 3
// "i want to travel the world writing code one day" --> 1
// "Lets all go on holiday somewhere very cold" --> 2

function shortestWord(str) {
    let counter = str.length;
    let splits = str.split(" "); //масив
    for (let i = 0; i < splits.length; i++){
        if (counter > splits[i].length) {
            counter = splits[i].length;
        }
    }
    return counter;
}