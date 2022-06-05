// let head = 5;
// let max = 0;
// if (head % 3 == 1){
//     max = 3;
//     for (let i = 1; i < (head-1)/3; i++){
//         max*=3;
//     }
// }
// if (head % 3 == 2){
//     max = 3;
//     for (let i = 1; i < (head-2)/3; i++){
//         max += 3;
//     }
//     max *= 2;
// }
// if (head < 4){
//     max = head;
//     }
// console.log(max)
// function dragonSlayer() {
//
//     let count = 0;
//     let maxPower = 1;
//     do{
//         count++;
//         let power = prompt('введите количество голов');
//         maxPower *= power;
//     } while (confirm('добавить дракона?'));
//     let anw = `<div>Драконов зарегистрировано ${count}</div><div>Расчетная мощь ${maxPower}</div>`;
//     setAnswer(anw, 'dragonSlayer');
// }

let drHead = prompt('Сколько голов в стае драконов?');
let maxPower = 1;
while (drHead > 4) {
    maxPower *= 3;
    drHead -= 3;
}
maxPower *= drHead;
console.log(maxPower);