//                        Коло
// Реалізувати клас, що описує коло. У класі мають бути такі компоненти:
//     поле, що зберігає радіус кола;
//     get-властивість, що повертає радіус кола;
//     set-властивість, що встановлює радіус кола;
//     get-властивість, що повертає діаметр кола;
//     метод, що обчислює площу кола;
//     метод, що обчислює довжину кола.
//     Продемонструвати роботу властивостей та методів.
class Round {

    radius;

    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.radius;
    }

    set radius(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius*2;
    }

    roundSquere() {
        return Math.PI * this.radius * this.radius;
    }

    roundLen() {
        return 2 * Math.PI * this.radius;
    }

}
let Circle = new Round(45);
// Circle.radius = 10;
console.log(Circle.radius);
console.log(Circle.diameter);
console.log(Circle.roundSquere());
console.log(Circle.roundLen());