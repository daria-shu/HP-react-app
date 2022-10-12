// 1 Функция возведение в степень и тест к ней
let a = 9;
let b =2;
function pow(a, b) {
    let result = a;
    let pow = b;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(pow(a, b))


//2 Функция конвертация кг в фунты и тест
function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
}




// 3 <!--Напишите функцию число Фибоначчи и тест к ней-->

let n = 5;
let fibonacci = [0, 1];
for (i = 2; i < n; i ++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.slice(0, n))