/*
    TODO: Get game data and put it in status
    thats it lol
*/

var id = "loadingText";
var textID = "changeMe";

var texts = [
    'Because Family Guy wasnt good enough',
    'I am on quack',
    'They killed kenny!',
    'Become your dream job, a trash man!',
    'Cartman = fat, change my mind',
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

    setInterval(randomiseText, 10000);
}