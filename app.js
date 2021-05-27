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

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const options = document.querySelectorAll('.option');

let keyOneSource = '';
let keyTwoSource = '';
let keyThreeSource = '';
let keyFourSource = '';
let keyFiveSource = '';
let keySixSource = '';
let keySevenSource = '';
let keyEightSource = '';
let keyNineSource = '';

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

let sfx = new Audio();

function keyOnefunc() {
    keyOne.style.backgroundColor = "#932432";
    keyOne.style.color = "#fff";
    sfx.src = keyOneSource;
    sfx.play();
    window.setTimeout(() => {
        keyOne.style.backgroundColor = "#fff";
        keyOne.style.color = "#000";
    }, 200);
}

function keyTwofunc() {
    keyTwo.style.backgroundColor = "#932432";
    keyTwo.style.color = "#fff";
    sfx.src = keyTwoSource;
    sfx.play();
    window.setTimeout(() => {
        keyTwo.style.backgroundColor = "#fff";
        keyTwo.style.color = "#000";
    }, 200);
}

function keyThreefunc() {
    keyThree.style.backgroundColor = "#932432";
    keyThree.style.color = "#fff";
    sfx.src = keyThreeSource;
    sfx.play();
    window.setTimeout(() => {
        keyThree.style.backgroundColor = "#fff";
        keyThree.style.color = "#000";
    }, 200);
}

function keyFourfunc() {
    keyFour.style.backgroundColor = "#932432";
    keyFour.style.color = "#fff";
    sfx.src = keyFourSource;
    sfx.play();
    window.setTimeout(() => {
        keyFour.style.backgroundColor = "#fff";
        keyFour.style.color = "#000";
    }, 200);
}

function keyFivefunc() {
    keyFive.style.backgroundColor = "#932432";
    keyFive.style.color = "#fff";
    sfx.src = keyFiveSource;
    sfx.play();
    window.setTimeout(() => {
        keyFive.style.backgroundColor = "#fff";
        keyFive.style.color = "#000";
    }, 200);
}

function keySixfunc() {
    keySix.style.backgroundColor = "#932432";
    keySix.style.color = "#fff";
    sfx.src = keySixSource;
    sfx.play();
    window.setTimeout(() => {
        keySix.style.backgroundColor = "#fff";
        keySix.style.color = "#000";
    }, 200);
}

function keySevenfunc() {
    keySeven.style.backgroundColor = "#932432";
    keySeven.style.color = "#fff";
    sfx.src = keySevenSource;
    sfx.play();
    window.setTimeout(() => {
        keySeven.style.backgroundColor = "#fff";
        keySeven.style.color = "#000";
    }, 200);
}

function keyEightfunc() {
    keyEight.style.backgroundColor = "#932432";
    keyEight.style.color = "#fff";
    sfx.src = keyEightSource;
    sfx.play();
    window.setTimeout(() => {
        keyEight.style.backgroundColor = "#fff";
        keyEight.style.color = "#000";
    }, 200);
}

function keyNinefunc() {
    keyNine.style.backgroundColor = "#932432";
    keyNine.style.color = "#fff";
    sfx.src = keyNineSource;
    sfx.play();
    window.setTimeout(() => {
        keyNine.style.backgroundColor = "#fff";
        keyNine.style.color = "#000";
    }, 200);
}

selected.addEventListener('click', function() {
    optionsContainer.classList.toggle('active');
    selected.style.backgroundColor = '#932432';
    selected.style.color = "#fff";
})

options.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.innerHTML;
        selected.style.backgroundColor = '#fff';
        selected.style.color = '#000';
        optionsContainer.classList.remove('active');

        if (selected.innerHTML === 'Trap') {
            keyOneSource = 'sounds/Trap/808 - Boomin.wav';
            keyTwoSource = 'sounds/Trap/Clap - Sauce.wav';
            keyThreeSource = 'sounds/Trap/clap (2).wav';
            keyFourSource = 'sounds/Trap/Hi Hat - Hennesy.wav';
            keyFiveSource = 'sounds/Trap/Kick - Marnell.wav';
            keySixSource = 'sounds/Trap/Open Hat - Cali.wav';
            keySevenSource = 'sounds/Trap/open hat 1.wav';
            keyEightSource = 'sounds/Trap/perc (3).wav';
            keyNineSource = 'sounds/Trap/snare (4).wav';
        }  else if (selected.innerHTML === 'Retro') {
            keyOneSource = 'sounds/Retro/Clap.wav';
            keyTwoSource = 'sounds/Retro/Cow.wav';
            keyThreeSource = 'sounds/Retro/D_FX3.WAV';
            keyFourSource = 'sounds/Retro/FX2.wav';
            keyFiveSource = 'sounds/Retro/Kick3.wav';
            keySixSource = 'sounds/Retro/Noisy_Snare_3.WAV';
            keySevenSource = 'sounds/Retro/Perc1.wav';
            keyEightSource = 'sounds/Retro/Rev_2.WAV';
            keyNineSource = 'sounds/Retro/SynthTom03.wav';
        } else if (selected.innerHTML === 'Drill') {
            keyOneSource = 'sounds/Drill/BVKER - Drillers 808 - 10 - (F).wav';
            keyTwoSource = 'sounds/Drill/BVKER - Drillers Clap 02.wav';
            keyThreeSource = 'sounds/Drill/BVKER - Drillers Clap 04.wav';
            keyFourSource = 'sounds/Drill/BVKER - Drillers Closed Hat - 06.wav';
            keyFiveSource = 'sounds/Drill/BVKER - Drillers Kick - 06.wav';
            keySixSource = 'sounds/Drill/BVKER - Drillers Open Hat - 03.wav';
            keySevenSource = 'sounds/Drill/BVKER - Drillers Perc 03.wav';
            keyEightSource = 'sounds/Drill/BVKER - Drillers Snare - 08.wav';
            keyNineSource = 'sounds/Drill/BVKER - Drillers Snare - 10.wav';
        }
    })
})

