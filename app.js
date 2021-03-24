// TIMING EVENTS EXERCISE

//1)
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hello`;
    div1.append(p1);
}, 1000);

//2)
setTimeout(() => {
    const timeNestDiv = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    timeNestDiv.append(p2);

    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        timeNestDiv.append(p3);
    }, 1000);

}, 2000);

//3a)
let time = 1;
const seconds = setInterval(() => {
    console.log(time);
    time++
}, 1000);

//3b)
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(seconds);
});


// BONUS

function startTimer(duration, display){
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else {
            return `TIME IS UP`;
        }
        
    }, 1000);
}

window.onload = function () {
    let twoMinutes = 60 * 2,
        display = document.querySelector(`#countdown`);
    startTimer(twoMinutes, display);
};


