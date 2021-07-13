/*
    TODO: Get game data and put it in status
    thats it lol
*/

var id = "loadingText";
var textID = "changeMe";

var texts = [
    '“I am a cop, and you will respect my authoritah!” – Cartman',
    '“Don’t you dare call me a Cartman!” – Stan',
    '“Don’t lie, Stan. Lying makes you sterile.” – Mr. Garrison',
    '“I’m not fat, I’m festively plump.” –Cartman',
    '“Drugs are bad, mmkay?” –Mr. Mackey',
    '“Screw you guys, I’m going home!” –Cartman',
    '"Hell, everything’s legal in Mexico. It’s the American way!” –Jimbo',
    '“Operation Human Shield my ass.” –Chef',
    '“Cartman doesn’t know a rainforest from a Pop-Tart.” –Stan',
    '*Muffled* “FUCK!” –Kenny',
    '“Don’t you know the first law of physics? Anything that’s fun costs at least eight dollars.” –Cartman',
    '“No, that’s wrong, Cartman. But don’t worry. There are no stupid answers, just stupid people.” –Mr. Garrison',
    '“I haven’t taken the time to be secure with myself.” –Satan',
    '"This server sucks ass" -Someone',
    'Because Family Guy wasnt enough',
]

function SetStatusChanged(newStatus) {
    var ele = document.getElementById(id);
    ele.innerHTML = newStatus;
}

function randomiseText() {
    var ele = document.getElementById(textID);
    ele.innerHTML = texts[Math.floor(Math.random()*texts.length)];
}

window.onload = function() {
    SetStatusChanged("Waiting...");
    randomiseText();

    setInterval(randomiseText, 5000);
}