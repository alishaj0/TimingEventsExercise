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
    const p1 = document.createElement(`p`);
        // this p1 variable is scoped to this setTimeout function, not a global variable -- same as above p1 variable above, as it is scoped to its function
    p1.innerText = `One`;
    timeNestDiv.append(p1);

    setTimeout(() => {
        const p2 = document.createElement(`p`);
        p2.innerText = `Two`;
        timeNestDiv.append(p2);
    }, 1000);

}, 2000);

//3a)
// let time = 0;
// const seconds = setInterval(() => {
//     console.log(time);
//     time++
// }, 1000);

//3b)
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(seconds);
});


// BONUS

/*
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;
    // 120 sec = 2 mins
const countdown = setInterval(() => {
    startingSeconds--;
    const minutes = Math.floor(startingSeconds / 60);
    const seconds = startingSeconds % 60;
        // modulo% = is remainder of startingSeconds / 60
    p4.innerText = `${minutes}:${seconds}`;

    if (seconds < 10) {
        p4.innerText = `${minutes}:0${seconds}`;
    } else {
        p4.innerText = `${minutes}:${seconds}`;
    }

    if (startingSeconds === 0) {
        p4.innerText = `TIME IS UP`;
        clearInterval(countdown);
    }
}, 1000);
*/

// ALSO ....


function startTimer(duration, display){
    let timer = duration, minutes, seconds;
    const countdown = setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);
            // timer modulo 60 = remainder of timer variable divided by 60; remainder is modulo

        minutes = minutes < 10 ? "0" + minutes : minutes; //Ternary
        seconds = seconds < 10 ? "0" + seconds : seconds; // Ternary

        display.innerText = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else if (timer === 0) {
            clearInterval(countdown);
            display.innerText = `TIME IS UP!`
        }
    }, 1000);
}

window.onload = function () {
        // window.onload means the event will run when the whole page has loaded
    let twoMinutes = 60 * 2;
        const display = document.querySelector(`#countdown`);
        const p = document.createElement('p');
        display.append(p);
    startTimer(twoMinutes, display);
};



// USING A TERNARY
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

/*
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 5;
    // 120 sec = 2 mins
const countdown = setInterval(() => {
    startingSeconds--;
    const minutes = Math.floor(startingSeconds / 60);
    const seconds = startingSeconds % 60;
    p4.innerText = `${minutes}:${seconds}`;

// USING A TERNARY
    p4.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
        // (seconds < 10) ? --similar to if startment
        // true will run: `${minutes}:0${seconds}` 
        // or ':'  `${minutes}:0${seconds}` :
        // false will run: `${minutes}:${seconds}`;
    
    if (startingSeconds === 0) {
        p4.innerText = `TIME IS UP`;
        clearInterval(countdown);
    }
}, 1000);

*/


// JOHNS EXAMPLE
/*
let count = 120;
const divCD = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
const clock = setInterval(() => {
    if (count > 0){
        minutes = Math.trunc(count / 60);
        seconds = count % 60;
        sc = seconds.toString();
        if (seconds < 10){
            sc = `0` + seconds.toString();
        }
        var time = minutes.toString() + ":" + sc;
        p3.innerText = time;
        divCD.append(p3);
    } else {
        clearInterval(clock);
        p3.innerText = `TIME IS UP!`;
        divCD.append(p3);
    }
    count--;
}, 1000);

*/