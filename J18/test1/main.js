// 1 Функция возведение в степень
let a = 9;
let b = 2;
function pow(a, b) {
    let result = a;
    let pow = b;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(pow(a, b))

//2 Функция конвертация кг в фунты
function weightConverter(valNum) {
    return 2.205 * valNum
}

function retTr(){
    return true
}


// 3 <!--Напишите функцию проверка числа на присутствие в ряде Фибоначчи->
function GenerateFibonacci(n){

    const maxFib = 100;
    const fibArr = [0, 1];
    let nextFib = 1;
    while (nextFib < maxFib){
        let lastFib = fibArr[fibArr.length - 1]
        let lastLastFib = fibArr[fibArr.length - 2]
        nextFib = lastFib + lastLastFib;
        fibArr.push(nextFib);
    }

    let result = fibArr.find(el => el == n);
    return result !== undefined;
}

