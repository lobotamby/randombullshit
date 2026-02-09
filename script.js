const canvas = document.getElementById('canvas');
const player = document.getElementById('player');


function blue() {
    let bg = document.getElementById("canvas").style.background
    if (bg != "blue") {
        document.getElementById("canvas").style.background = "blue";
    }
    else {
        document.getElementById("canvas").style.background = "white";
    }
}