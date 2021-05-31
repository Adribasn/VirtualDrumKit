"use strict"
const keyOne = $('#key-one');
const keyTwo = $('#key-two');
const keyThree = $('#key-three');

const keyFour = $('#key-four');
const keyFive = $('#key-five');
const keySix = $('#key-six');

const keySeven = $('#key-seven');
const keyEight = $('#key-eight');
const keyNine = $('#key-nine');

const selected = $('.selected');
const optionsContainer = $('.options-container');
const options = $('.option');

optionsContainer.addClass('inactive');

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

keyOne.click(keyOnefunc);
keyTwo.click(keyTwofunc);
keyThree.click(keyThreefunc);
keyFour.click(keyFourfunc);
keyFive.click(keyFivefunc);
keySix.click(keySixfunc);
keySeven.click(keySevenfunc);
keyEight.click(keyEightfunc);
keyNine.click(keyNinefunc);

let sfx = new Audio();

function keyOnefunc() {
    keyOne.css("background-color","#932432");
    keyOne.css("color","#fff");
    sfx.src = keyOneSource;
    sfx.play();
    window.setTimeout(() => {
        keyOne.css("background-color","#fff");
        keyOne.css("color","#000");
    }, 200);
}

function keyTwofunc() {
    keyTwo.css("background-color","#932432");
    keyTwo.css("color","#fff");
    sfx.src = keyTwoSource;
    sfx.play();
    window.setTimeout(() => {
        keyTwo.css("background-color","#fff");
        keyTwo.css("color","#000");
    }, 200);
}

function keyThreefunc() {
    keyThree.css("background-color","#932432");
    keyThree.css("color","#fff");
    sfx.src = keyThreeSource;
    sfx.play();
    window.setTimeout(() => {
        keyThree.css("background-color","#fff");
        keyThree.css("color","#000");
    }, 200);
}

function keyFourfunc() {
    keyFour.css("background-color","#932432");
    keyFour.css("color","#fff");
    sfx.src = keyFourSource;
    sfx.play();
    window.setTimeout(() => {
        keyFour.css("background-color","#fff");
        keyFour.css("color","#000");
    }, 200);
}

function keyFivefunc() {
    keyFive.css("background-color","#932432");
    keyFive.css("color","#fff");
    sfx.src = keyFiveSource;
    sfx.play();
    window.setTimeout(() => {
        keyFive.css("background-color","#fff");
        keyFive.css("color","#000");
    }, 200);
}

function keySixfunc() {
    keySix.css("background-color","#932432");
    keySix.css("color","#fff");
    sfx.src = keySixSource;
    sfx.play();
    window.setTimeout(() => {
        keySix.css("background-color","#fff");
        keySix.css("color","#000");
    }, 200);
}

function keySevenfunc() {
    keySeven.css("background-color","#932432");
    keySeven.css("color","#fff");
    sfx.src = keySevenSource;
    sfx.play();
    window.setTimeout(() => {
        keySeven.css("background-color","#fff");
        keySeven.css("color","#000");
    }, 200);
}

function keyEightfunc() {
    keyEight.css("background-color","#932432");
    keyEight.css("color","#fff");
    sfx.src = keyEightSource;
    sfx.play();
    window.setTimeout(() => {
        keyEight.css("background-color","#fff");
        keyEight.css("color","#000");
    }, 200);
}

function keyNinefunc() {
    keyNine.css("background-color","#932432");
    keyNine.css("color","#fff");
    sfx.src = keyNineSource;
    sfx.play();
    window.setTimeout(() => {
        keyNine.css("background-color","#fff");
        keyNine.css("color","#000");
    }, 200);
}

selected.click(function() {
    selected.css("background-color","#932432");
    selected.css("color","#fff");
    optionsContainer.addClass('active')
})

options.each(function(index, value) {
    $(this).click(function() {
        selected.css("background-color","#fff");
        selected.css("color","#000");
        selected.html($(this).text());
        optionsContainer.removeClass('active');


        if (selected.text() === 'Trap') {
            keyOneSource = 'sounds/Trap/808 - Boomin.wav';
            keyTwoSource = 'sounds/Trap/Clap - Sauce.wav';
            keyThreeSource = 'sounds/Trap/clap (2).wav';
            keyFourSource = 'sounds/Trap/Hi Hat - Hennesy.wav';
            keyFiveSource = 'sounds/Trap/Kick - Marnell.wav';
            keySixSource = 'sounds/Trap/Open Hat - Cali.wav';
            keySevenSource = 'sounds/Trap/open hat 1.wav';
            keyEightSource = 'sounds/Trap/perc (3).wav';
            keyNineSource = 'sounds/Trap/snare (4).wav';
        }  else if (selected.text() === 'Retro') {
            keyOneSource = 'sounds/Retro/Clap.wav';
            keyTwoSource = 'sounds/Retro/Cow.wav';
            keyThreeSource = 'sounds/Retro/D_FX3.WAV';
            keyFourSource = 'sounds/Retro/FX2.wav';
            keyFiveSource = 'sounds/Retro/Kick3.wav';
            keySixSource = 'sounds/Retro/Noisy_Snare_3.WAV';
            keySevenSource = 'sounds/Retro/Perc1.wav';
            keyEightSource = 'sounds/Retro/Rev_2.WAV';
            keyNineSource = 'sounds/Retro/SynthTom03.wav';
        } else if (selected.text() === 'Drill') {
            keyOneSource = 'sounds/Drill/BVKER - Drillers Kick - 01.wav';
            keyTwoSource = 'sounds/Drill/BVKER - Drillers Clap 02.wav';
            keyThreeSource = 'sounds/Drill/BVKER - Drillers Clap 04.wav';
            keyFourSource = 'sounds/Drill/BVKER - Drillers Closed Hat - 06.wav';
            keyFiveSource = 'sounds/Drill/BVKER - Drillers Kick - 06.wav';
            keySixSource = 'sounds/Drill/BVKER - Drillers Open Hat - 03.wav';
            keySevenSource = 'sounds/Drill/BVKER - Drillers Perc 03.wav';
            keyEightSource = 'sounds/Drill/BVKER - Drillers Snare - 08.wav';
            keyNineSource = 'sounds/Drill/BVKER - Drillers Snare - 10.wav';
        } else if (selected.text() === 'Rock') {
            keyOneSource = 'sounds/Rock/36-Ludwig26Kick-5.wav';
            keyTwoSource = 'sounds/Rock/38-PearlSnare-2.wav';
            keyThreeSource = 'sounds/Rock/38-PorkpieSnare-4.wav';
            keyFourSource = 'sounds/Rock/41-Pearl16FloorTom-4.wav';
            keyFiveSource = 'sounds/Rock/42-SabianRockHatClosed-2.wav';
            keySixSource = 'sounds/Rock/45-Pearl12Tom-3.wav';
            keySevenSource = 'sounds/Rock/46-SabianRockHatSemiOpen-1.wav';
            keyEightSource = 'sounds/Rock/48-SabianRockHatSwish-1.wav';
            keyNineSource = 'sounds/Rock/50-SabianAA16CrashChoke.wav';
        } else if (selected.text() === 'Dubstep') {
            keyOneSource = 'sounds/Dubstep/Claps (4).wav';
            keyTwoSource = 'sounds/Dubstep/Effect 1.wav';
            keyThreeSource = 'sounds/Dubstep/Effect 5.wav';
            keyFourSource = 'sounds/Dubstep/Effect 11.wav';
            keyFiveSource = 'sounds/Dubstep/FX (1).wav';
            keySixSource = 'sounds/Dubstep/FX (8).wav';
            keySevenSource = 'sounds/Dubstep/FX (9).wav';
            keyEightSource = 'sounds/Dubstep/Kick   (3).wav';
            keyNineSource = 'sounds/Dubstep/Tom (2).wav';
        } else if (selected.text() === 'Dr.Dre') {
            keyOneSource = 'sounds/DrDre/2Pac Guitar.wav';
            keyTwoSource = 'sounds/DrDre/2Pac Keys.wav';
            keyThreeSource = 'sounds/DrDre/6SO0C158.wav';
            keyFourSource = 'sounds/DrDre/50 eminem guitar.wav';
            keyFiveSource = 'sounds/DrDre/55 (3).wav';
            keySixSource = 'sounds/DrDre/BOOM.WAV';
            keySevenSource = 'sounds/DrDre/Dre hit3.wav';
            keyEightSource = 'sounds/DrDre/Dre Keyz.wav';
            keyNineSource = 'sounds/DrDre/EMN Snare 1.wav';
        } else if (selected.text() === 'Kanye West') {
            keyOneSource = 'sounds/KanyeWest/B (14).wav';
            keyTwoSource = 'sounds/KanyeWest/B (17).wav';
            keyThreeSource = 'sounds/KanyeWest/B (18).wav';
            keyFourSource = 'sounds/KanyeWest/B (20).wav';
            keyFiveSource = 'sounds/KanyeWest/P (1).wav';
            keySixSource = 'sounds/KanyeWest/S (7).wav';
            keySevenSource = 'sounds/KanyeWest/S (10).wav';
            keyEightSource = 'sounds/KanyeWest/S (18).wav';
            keyNineSource = 'sounds/KanyeWest/S (20).wav';
        }
    })
})

