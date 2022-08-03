
let timer = document.getElementById('timer');
let stat = document.getElementById('stat');
let clickArea = document.getElementById('clickArea');
let startBtn = document.getElementById('startBtn');
let clickCounter = 0;
let timerCounter = 30;
let intervalId;

function countClick(){
    if(timerCounter > 0){
        clickCounter++;
    }
}

function startTimer(){
        timerCounter--;
}

function worker(){
    startBtn.style = "display:none";
    clickArea.style = "display:block";
    if (timerCounter > 0){
        startTimer();
        timer.innerHTML = timerCounter;
    } else {
        clearInterval(intervalId);
        startBtn.style = "display:block";
        clickArea.style = "display:none";

        let str = "<p>total clicks : " +
            clickCounter +
            "</p><p>clicks speed: " +
            clickCounter * 2  + "</p>";

        stat.innerHTML = str;
    };
}

function start(){
    stat.innerHTML = '';
    timerCounter = 30;
    clickCounter = 0;
    intervalId = setInterval(worker, 1000);
}
