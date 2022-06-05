// 3. Ваше замовлення Ваше завдання - відсортувати заданий рядок. Кожне слово в рядку міститиме одне число.
// Це число є позиція, яку має мати слово в результаті. Примітка. Числа можуть бути від 1 до 9.
// Отже, 1 буде першим словом (а не 0).
// Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку будуть містити лише дійсні
// послідовні числа.
//  Приклад:
// "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"
// "" --> ""


function sortWord(str){

    let wordsResult = [];

    let splits = str.split(" ");

    for (let i = 0; i < splits.length; i++) {
        for (let j = 0; j < splits[i].length; j++) {
            switch (splits[i][j]){
                case "1":
                    wordsResult[0] = splits[i];
                    break;
                case "2":
                    wordsResult[1] = splits[i];
                    break;
                case "3":
                    wordsResult[2] = splits[i];
                    break;
                case "4":
                    wordsResult[3] = splits[i];
                    break;
                case "5":
                    wordsResult[4] = splits[i];
                    break;
                case "6":
                    wordsResult[5] = splits[i];
                    break;
                case "7":
                    wordsResult[6] = splits[i];
                    break;
                case "8":
                    wordsResult[7] = splits[i];
                    break;
                case "9":
                    wordsResult[8] = splits[i];
                    break;


            }
        }
    }

    let result = "";

    for (let i = 0; i < wordsResult.length; i++) {
        result += wordsResult[i] + " ";
    }
    return result;
}

