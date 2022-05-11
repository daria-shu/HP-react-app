// 7. Наоборот
// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи
// вам понадобится оператор % (остаток от деления).
let inputNumber = Number(prompt('Введите трехзначное число'))
let lastNumber = inputNumber % 10
let firstNumber = (inputNumber - (inputNumber % 100)) / 100
let middleNumber = (inputNumber - (firstNumber * 100) - lastNumber) / 10
let result = String(lastNumber) + String(middleNumber) + String(firstNumber)
alert(result)