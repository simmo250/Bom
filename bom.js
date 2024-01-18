let timerEl = document.getElementById("timer");
let countdown = 5;

let intervalId = setInterval(function() {
    countdown = countdown - 1
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOM";
        clearInterval(intervalId);
    }
}, 1000);