// Маркер 2
// Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для
// заправки маркера. Продемонструвати роботу написаних методів
//
class Marker {
    ink;
    color;
    constructor(color, ink) {
        this.color = color;
        this.ink = ink <= 100 ? ink : 100; //якщо чорнил більше 100 то ставим 100
    }

    doPrint(str){

        const countedInk = str.replace('/\\s/g', '').length * 0.5; //рахуєм скільки чорнила потрібно на друк всієї строки

        let printedStr = ''; //створюємо строку, яку будемо друкувати

        if(countedInk <= this.ink){ //якщо чорнила на друк строки потрібно менше чи дорівнює кількості чорнила в маркері
            printedStr = str; //просто переносимо всю строку на друк
        } else { //у іншому випадку в нас чорнил на друк всієї строки не вистачить

            for (const element of str) { //перебираємо у циклі всі символи строки поштучно
                if (this.ink === 0) { //перевіряємо чи не скінчились чорнила
                    break // якщо скінчились виходимо з циклу
                }

                printedStr += element; //добавляємо символ до друку

                if (element !== ' ') { //якщо символ не == пробілу
                    this.ink -= 0.5; //зменшуємо кількість чорнил
                }
            }

        }

        console.log(`%c${ printedStr }`, `color: ${ this.color }`);
    }

}

class SuperMarker extends Marker{

    addInk(amount){
        this.ink = (amount + this.ink) <=100 ? (amount + this.ink) : 100; //якщо чорнил більше 100 то ставим 100
    }
}

const marker = new Marker("red", 7);
console.log(marker.color);
console.log(marker.ink);
marker.doPrint("hello everybody hello everybody hello everybody hello everybody hello everybody hello everybody");

const superMarker = new SuperMarker("green", 3) //надрукує 6 символів
superMarker.doPrint("hello everybody hello everybody hello everybody hello everybody hello everybody hello everybody");
//тут чорнила скінчилися
superMarker.addInk(7); //додаємо чорнила на 14 символів
superMarker.doPrint("hello everybody hello everybody hello everybody hello everybody hello everybody hello everybody");


