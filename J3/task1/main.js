// 1. Счастливый билет
// Напишите веб-приложение для расчета счастливого билета. Пользователь вводит шестизначный номер билета(трамвай/троллейбус). 
// Определите, равна ли сумма первых трех цифр сумме последних трех цифр. Выведите сообщение о "счастливости" билета пользователю.
let tiketNumber = prompt ('Введите шестизначное число');
let sum1 = Number(tiketNumber[0]) + Number(tiketNumber[1]) + Number(tiketNumber[2]);
let sum2 = Number(tiketNumber[3]) + Number(tiketNumber[4]) + Number(tiketNumber[5]);

if (sum1 == sum2) {
    alert('Поздравляем!');
} else {
    alert('Попробуйте еще раз!!!')
}

 