let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', '/'];
const out = document.querySelector('#screen');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;

}
document.querySelector('.c').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка, проверка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка очистки С
    if (event.target.classList.contains('C')) return;
    out.textContent = '';
    //получаю нажатую кнопку
    let key = event.target.textContent;

    //если нажата клавиша 0-9 и .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            // console.log(a, b, sign);
            out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    //проверяем нажат ли знак "+, -, *, /"
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
           case "+":
                a = (+a) + (+b);
                break;
           case "-":
               a = a - b;
               break;
           case "x":
                a = a * b;
                break;
           case "/":
               if (b === '0') {
                   out.textContent = 'Ошибка';
                   a = '';
                   b = '';
                   sign = '';
                   return;
               }
               a = a / b;
               break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}
