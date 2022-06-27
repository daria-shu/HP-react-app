// Соревнования по бегу
// Создайте функцию, которая принимает массив из 6 объектов, в каждом есть фамилия бегуна и результаты трех его забегов
// в секундах. Вернуть объект с полями:
//     фамилию самого медленного
//     фамилию самого быстрого спортсмена.
//     общую таблицу забегов(сформированную на ваше усмотрение)
let sprint = [
    {name:'Ivanov', run1:150, run2:100, run3:210},
    {name:'Petrov', run1:60, run2:180, run3:90},
    {name:'Sidorov', run1:95, run2:110, run3:175},
    {name:'Kozlov', run1:100, run2:60, run3:180},
    {name:'Sokolov', run1:77, run2:98, run3:160},
    {name:'Skvorcov', run1:86, run2:125, run3:210}
]

function getSprintData(sprint) {

    const result = {
        slowName: '',
        fastName: '',
        table: [[],[],[]]
    }

    let slow = 0;
    let fast = 0;

    for (let i = 0; i < sprint.length; i++) {

        let sumRuns = sprint[i].run1 + sprint[i].run2 + sprint[i].run3;

        if (i === 0){
            slow = sumRuns;
            fast = sumRuns;
        }
        if (sumRuns >= slow){
            slow = sumRuns;
            result.slowName = sprint[i].name;
        }
        if (sumRuns <= fast){
            fast = sumRuns;
            result.fastName = sprint[i].name;
        }

        result.table[0][i] = sprint[i].name + ": result - " + sprint[i].run1;
        result.table[1][i] = sprint[i].name + ": result - " + sprint[i].run2;
        result.table[2][i] = sprint[i].name + ": result - " + sprint[i].run3;

    }

    return result;
}

console.log(getSprintData(sprint))