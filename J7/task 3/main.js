// Пользователе-генератор.
//     Напишите функцию, которая принимает пол пользователя и возвращает объект данных о пользователе
// сгенерированных случайно. Имена выбирайте из заранее созданных массивов разных имен размером не меньше 50
// элементов для каждого пола.
//
// randUser('male') //{name:"Ivan", age : 77, gender:"male"}
// randUser('female') //{name:"Inna", age : 3, gender:"female"}
function getRandomUsers(gender) {
    let usersMale = ['Ivan', 'Taras', 'Stanislav', 'Bohdan', 'Maksim',
        'Nazar', 'Dmitriy', 'Roman', 'Vova', 'Oleg',
        'Vitaliy', 'Oleksandr', 'Viktor', 'Sergiy', 'Ostap',
        'Yuri', 'Evgeniy', 'Egor', 'Platon', 'Anatoliy',
        'Vladislav', 'Andriy', 'Igor', 'Mukola', 'Zahar',
        'Artem', 'Denis', 'Timofey', 'Gleb', 'Eduard',
        'Ilya', 'Nikita', 'Kirill', 'Artur', 'Vadim',
        'Arsen', 'Mykhailo', 'Pavlo', 'Petro', 'Timur',
        'David', 'Mark', 'Anton', 'Danilo', 'Adam',
        'Boris', 'Valentin', 'Vasyl', 'Gennady', 'Hieorhij'];

    let usersFemale = ['Anna', 'Olena', 'Natalia', 'Valentina', 'Galina',
        'Tetiana', 'Alina', 'Alla', 'Anastasia', 'Oksana',
        'Larisa', 'Julia', 'Lidia', 'Ludmila', 'Irina',
        'Olga', 'Katerina', 'Sofia', 'Oleksandra', 'Uliana',
        'Darina', 'Diana', 'Maria', 'Viktoria', 'Kristina',
        'Elizaveta', 'Angelina', 'Veronika', 'Polina', 'Yana',
        'Karina', 'Valeria', 'Eva', 'Arina', 'Stefania',
        'Alisa', 'Antonina', 'Vita', 'Vira', 'Vitalia',
        'Edita', 'Eleonora', 'Emma', 'Evgenia', 'Zoja',
        'Inna', 'Karolina', 'Klavdia', 'Lilia', 'Lyubov'];

    const result = {name: '', age: 0, gender: gender};

    result.age = Math.floor(Math.random() * 1000) % 100;

    if (gender === 'male') {
        result.name = usersMale[Math.floor(Math.random() * 1000) % 50];
    } else if (gender === 'female') {
        result.name = usersFemale[Math.floor(Math.random() * 1000) % 50];
    } else {
        return "Error";
    }

    return result;
}

console.log(getRandomUsers('male'))
console.log(getRandomUsers('female'))