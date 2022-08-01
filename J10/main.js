
let minute = 0
let second = 0
let milisec = 0

setInterval(timer, 10)

function timer(){
    if (milisec < 100){
        milisec++
    }else{
        milisec = 0
        if (second < 60){
            second++
        }else{
            second = 0
            minute++
        }
    }

    console.log(createStr())

}

function createStr(){
    let resMilSec = milisec < 10 ? '0' + milisec : milisec
    let resSec = second < 10 ? '0' + second : second
    let resMin = minute < 10 ? '0' + minute : minute

    return resMin + ':' + resSec + ':' + resMilSec
}

