
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 550;

var requestId;
/* 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
*/

const bg = new Image();
// bg.src = "bg-2500-nobleed.png";
bg.src = "bg-landscape+forest-1500.png";
// bg.src = "landscape-bg-0.5x.png";
// bg.src = "landscape-BG.png";
// bg.src = "landscape_bg-anim.png";
// bg.src = "bg_1200x600.png";

const forest = new Image();
forest.src = "forest-600x540.png";
// forest.src = "bg-forest-600x540.png";

var t;
var timedelay =20;

let bgWidth = -600;
let scrollSpeed = 1;

let forestWidth = 0;
let forestscrollSpeed = 0.5;

window.onload = function () {}


function loop() {
    requestId = undefined;
    animPlay();
    start();
}


function start() {
    if (!requestId) { requestId = window.requestAnimationFrame(loop);}
}

function stop() { 
    if (requestId) { 
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}

function animPlay() {
     // bg loop
    context.drawImage( bg, bgWidth + canvas.height, 0);
    // left -> right
    bgWidth -= scrollSpeed;
    if ( bgWidth == -1990 ) {
        bgWidth = -600;
    }
    
    // forest loop
    context.drawImage( forest, forestWidth - canvas.height, 0);
    forestWidth += forestscrollSpeed;
    if ( forestWidth == canvas.width )
    forestWidth = 0;
}


var startBtn = document.getElementById('start');
startBtn.addEventListener('click', start, false);


var pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', stop, false);
    





