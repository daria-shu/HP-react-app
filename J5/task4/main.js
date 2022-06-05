// 4. Чек-методи Створити масив, який описує чек у магазині. Кожен елемент масиву складається із назви
// товару, кількості та ціни за одиницю товару. Написати такі функції.
//

let chek = [
    {productName:"Milk ", quantity: 1, price: 80},
    {productName:"Chocolate ", quantity:2, price:70},
    {productName:"Bread ", quantity:1, price:25.5},
    {productName:"Avocado ", quantity:2, price:45},
    {productName:"Pepsi ", quantity:1, price:21.5}
]
    // * Роздруківка чека на екран

function printCheck(chek){

    let str = '';
    for (let i = 0; i < chek.length; i++) {
        str += "Назва товару: " + chek[i].productName;
        str += " Кількість: " + chek[i].quantity;
        str += " Ціна: " + chek[i].price;

    }
    console.log(str);
}

// * Підрахунок загальної суми покупки

function sumCheck(chek){

    let sum = 0;
    for (let i = 0; i < chek.length; i++) {
        sum += chek[i].quantity * chek[i].price;
    }
    return sum;
}
// * Отримання найдорожчої покупки у чеку

function maxPrice(chek){

    let max = 0;
    for (let i = 0; i < chek.length; i++) {
        if (max < chek[i].price){
            max = chek[i].price;
        }
    }
    return max;
}
// * Підрахунок середньої вартості одного товару у чеку

function average(chek){
    let sum = 0;
    for (let i = 0; i < chek.length; i++) {
        sum += chek[i].price;
    }
    return sum / chek.length;
}



// * Підрахунок загальної суми покупки.
// let massiv = [145,45,50,170,120,590,430];
// let totalSum = 0;
// for (u = 0; u < massiv.length; u++){
//     totalSum = totalSum + massiv[u];
// }
// console.log(totalSum);

// * Підрахунок найдорожчої покупки у чеку
// const expensiveBuy = [145,250,50,170,120,545,188];
//
// const max = Math.max.apply(null, expensiveBuy);
//
// console.log(max);

// * Підрахунок середньої вартості одного товару у чеку.
// let massiv = [145,250,50,170,120,545,188];
// let mathe = 0;
// for (u = 0; u < massiv.length; u++){
//     mathe = mathe + massiv[u];
// }
// console.log(mathe);
// mathe = +mathe / massiv.length;
// console.log(mathe);