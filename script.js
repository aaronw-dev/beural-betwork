const targetFPS = 60;
var currentFrame = 0;

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStuff();
    currentFrame++;
}


function drawStuff() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    drawRectangle(context, "orange",currentFrame * 5,height / 2, 50, 50);
}

setInterval(resizeCanvas,1000 / targetFPS)