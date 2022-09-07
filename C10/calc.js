let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['&#37', '&#215', 'C', 'CE', '&#8722', '&#43', '&#61'];
const out = document.querySelector('.calc_result');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;

}
document.querySelector('.CE').onclick = clearAll;

