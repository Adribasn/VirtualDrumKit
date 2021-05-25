"use strict"
const keyOne = document.getElementById('key-one');
const keyTwo = document.getElementById('key-two');
const keyThree = document.getElementById('key-three');

const keyFour = document.getElementById('key-four');
const keyFive = document.getElementById('key-five');
const keySix = document.getElementById('key-six');

const keySeven = document.getElementById('key-seven');
const keyEight = document.getElementById('key-eight');
const keyNine = document.getElementById('key-nine');

window.addEventListener('keydown', (event) => {
    if (event.key == 'a') {
        keyOnefunc();
    } else if (event.key == 'z') {
        keyTwofunc();
    } else if (event.key == 'e') {
        keyThreefunc();
    } else if (event.key == 'q') {
        keyFourfunc();
    } else if (event.key == 's') {
        keyFivefunc();
    } else if (event.key == 'd') {
        keySixfunc();
    } else if (event.key == 'w') {
        keySevenfunc();
    } else if (event.key == 'x') {
        keyEightfunc();
    } else if (event.key == 'c') {
        keyNinefunc();
    }
})

keyOne.addEventListener('click', keyOnefunc);
keyTwo.addEventListener('click', keyTwofunc);
keyThree.addEventListener('click', keyThreefunc);
keyFour.addEventListener('click', keyFourfunc);
keyFive.addEventListener('click', keyFivefunc);
keySix.addEventListener('click', keySixfunc);
keySeven.addEventListener('click', keySevenfunc);
keyEight.addEventListener('click', keyEightfunc);
keyNine.addEventListener('click', keyNinefunc);


function keyOnefunc() {
    keyOne.style.backgroundColor = "#932432";
    keyOne.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/808 - Boomin.wav'
    sfx.play();
    window.setTimeout(() => {
        keyOne.style.backgroundColor = "#fff";
        keyOne.style.color = "#000";
    }, 200);
}

function keyTwofunc() {
    keyTwo.style.backgroundColor = "#932432";
    keyTwo.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/Clap - Sauce.wav';
    sfx.play();
    window.setTimeout(() => {
        keyTwo.style.backgroundColor = "#fff";
        keyTwo.style.color = "#000";
    }, 200);
}

function keyThreefunc() {
    keyThree.style.backgroundColor = "#932432";
    keyThree.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/clap (2).wav'
    sfx.play();
    window.setTimeout(() => {
        keyThree.style.backgroundColor = "#fff";
        keyThree.style.color = "#000";
    }, 200);
}

function keyFourfunc() {
    keyFour.style.backgroundColor = "#932432";
    keyFour.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/Hi Hat - Hennesy.wav'
    sfx.play();
    window.setTimeout(() => {
        keyFour.style.backgroundColor = "#fff";
        keyFour.style.color = "#000";
    }, 200);
}

function keyFivefunc() {
    keyFive.style.backgroundColor = "#932432";
    keyFive.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/Kick - Marnell.wav'
    sfx.play();
    window.setTimeout(() => {
        keyFive.style.backgroundColor = "#fff";
        keyFive.style.color = "#000";
    }, 200);
}

function keySixfunc() {
    keySix.style.backgroundColor = "#932432";
    keySix.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/Open Hat - Cali.wav'
    sfx.play();
    window.setTimeout(() => {
        keySix.style.backgroundColor = "#fff";
        keySix.style.color = "#000";
    }, 200);
}

function keySevenfunc() {
    keySeven.style.backgroundColor = "#932432";
    keySeven.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/open hat 1.wav';
    sfx.play();
    window.setTimeout(() => {
        keySeven.style.backgroundColor = "#fff";
        keySeven.style.color = "#000";
    }, 200);
}

function keyEightfunc() {
    keyEight.style.backgroundColor = "#932432";
    keyEight.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/perc (3).wav';
    sfx.play();
    window.setTimeout(() => {
        keyEight.style.backgroundColor = "#fff";
        keyEight.style.color = "#000";
    }, 200);
}

function keyNinefunc() {
    keyNine.style.backgroundColor = "#932432";
    keyNine.style.color = "#fff";
    let sfx = new Audio();
    sfx.src = 'sounds/snare (4).wav';
    sfx.play();
    window.setTimeout(() => {
        keyNine.style.backgroundColor = "#fff";
        keyNine.style.color = "#000";
    }, 200);
}