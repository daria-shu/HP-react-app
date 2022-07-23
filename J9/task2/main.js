//створюємо об'єкт в якому в ключах літери, а в значеннях морзе

const abc = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "0": "-----"
}

//метод кодує строку в морзе
function encodeMorse(str) {
    let inputStr = str.toUpperCase(); //переводимо строку в великі літери
    let resultStr = ''; //створюємо строку для зберігання результату
    for (const letter of inputStr) { //проходимо циклом по кожній літері строки
        if (letter === ' ') { //якщо це пробіл
            //resultStr += '   ' //добавляємо три пробіли в результат для консолі
            resultStr += '&nbsp &nbsp &nbsp'; //добавляємо три пробіли в результат для браузера
        } else { //якщо інший символ
            for (let key in abc) { //проходимо циклом по об'єкту з морзе
                if (key === letter) { //якщо літера співпала з ключем з морзе
                    resultStr += (abc[key] + ' '); //додаємо значення до результату
                    break;
                }
            }

            // Object.entries(abc).forEach( //проходимо циклом (forEach це спеціальний цикл для об'єктів) по об'єкту з морзе
            //     ([key, value]) => { //на кожній ітерації отримуємо ключ і значення ключа із об'єкта морзе
            //         if (key === letter) { //якщо літера співпала з ключем з морзе
            //             resultStr += (value + ' ') //додаємо значення до результату і пробіл
            //         }
            //     }
            // )
        }
    }

    //console.log(resultStr) //друкуємо результат
    return resultStr;
}

//метод декодує морзе в літери
function decodeMorse(str) {
    let resultStr = ''; //створюємо строку для зберігання результату

    let words = str.split("   "); //розбиваємо строку по трьом пробілам і отримуємо масив слів

    for (const word of words) { // проходимо циклом по масиву слов де на кожній ітерації розбираємо одне слово
        let letters = word.split(" "); //розбиваємо слово на літери по одному пробілу і отримуємо масив літер

        for (const letter of letters) { // проходимо циклом по кожній літері
            for (let key in abc) { //проходимо циклом по об'єкту з морзе
                if (abc[key] === letter) { //якщо літера співпала з значенням з морзе
                    resultStr += (key); //додаємо значення до результату
                    break;
                }
            }

            // Object.entries(abc).forEach( //проходимо циклом (forEach це спеціальний цикл для об'єктів) по об'єкту з морзе
            //     ([key, value]) => { //на кожній ітерації отримуємо ключ і значення ключа із об'єкта морзе
            //         if (value === letter) { //якщо літера співпала з значенням з морзе
            //             resultStr += (key) //додаємо значення до результату
            //         }
            //     }
            // )
        }

        resultStr += ' '; //після циклу розбору слова ставимо пробіл
    }

    //console.log(resultStr) //друкуємо результат
    return resultStr;
}

let in_text = document.querySelector("#text");
let in_morse = document.querySelector("#morse");
let out_text = document.querySelector("#res-text");
let out_morse = document.querySelector("#res-morse");

function text_to_morse() {
    let str = encodeMorse(in_text.value);
    out_text.innerHTML = str;
}

function morse_to_text() {
    let str = decodeMorse(in_morse.value);
    out_morse.innerHTML = str;
}


//
// const string = 'privet max'
// const morseString = '.--. .-. .. ...- . -    -- .- -..-'
// encodeMorse(string)
// decodeMorse(morseString)