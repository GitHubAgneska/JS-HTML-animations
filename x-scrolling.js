
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bg = new Image();
bg.src = "landscape_bg-anim.png";
// bg.src = "bg_1200x600.png";

window.onload = function () {

    let bgWidth = 0;
    let scrollSpeed = 1;

    function loop() {
        context.drawImage(bg, bgWidth, 0 );
        context.drawImage( bg, bgWidth - canvas.height, 0);
        bgWidth += scrollSpeed;

        if ( bgWidth == canvas.height )
            bgWidth = 0;
        
        window.requestAnimationFrame(loop);
    }
    loop();
}

context = document.getElementbyId("canvasid").getContext('2d');