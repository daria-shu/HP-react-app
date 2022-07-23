// Клікер
// Створити html-сторінку з клікером.
// При кліку на кнопку "Додати" рахунок додається на 1
// При кліку на кнопку "Відняти" рахунок віднімається на 1

const counter = document.querySelector("#counter")

function clicker(sign){

    if (sign === "plus"){
        counter.innerHTML++
    } else if (sign === "minus"){
        counter.innerHTML--
    }

}
