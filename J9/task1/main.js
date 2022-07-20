//                       Маркер
// Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//     поле, яке зберігає колір маркера;
//     поле, яке зберігає кількість чорнила в маркері (у відсотках);
//     метод друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір,
//     поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
//
class Marker {

    inkCounter;
    color;

    constructor(color, inkCounter) {
        this.color = color;
        this.inkCounter = inkCounter;
    }

    doPrint(str){
        console.log(str.substring(0, this.inkCounter*2));
    }

}

let marker = new Marker("red", 25);
console.log(marker.color);
console.log(marker.inkCounter);
marker.doPrint("hello everybody hello everybody hello everybody hello everybody hello everybody");



