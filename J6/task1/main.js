// Find a Chair
function meeting(x, need){
    if(need === 0){
        return 'Game on!';
    }
    let counter = 0;
    let result = [];
    for (let i = 0; i < x.length; i++) {
        let temp = x[i][1] - x[i][0].length;
        if(temp < 0){
            temp = 0;
        }
        result[i] = temp;
        counter += temp;

        if(counter === need){
            break;
        }

    }
    return counter < need ? 'Not enough!' : result;
}
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5))
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4))
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0))
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 10))