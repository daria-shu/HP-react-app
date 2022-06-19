let str = prompt("Enter str")
alert(Calculator(str))


function Calculator (str) {
    const methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };
    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
    if (!methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return methods[op](a, b);
}
// Вариант 2
function calc(str){

    if(str.indexOf("+") != -1){
        let abc = str.split("+")
        return Number(abc[0]) + Number(abc[1])
    }

    if(str.indexOf("-") != -1){
        let abc = str.split("-")
        return abc[0] - abc[1]
    }

    if(str.indexOf("*") != -1){
        let abc = str.split("*")
        return abc[0] * abc[1]
    }

    if(str.indexOf("/") != -1){
        let abc = str.split("/")
        return abc[0] / abc[1]
    }
}
