/*
    TODO: Get game data and put it in status
    thats it lol
*/

var id = "loadingText";

function SetStatusChanged(newStatus) {
    var ele = document.getElementById(id);
    ele.innerHTML = newStatus;
}

window.onload = function() {
    SetStatusChanged("Waiting...");
}