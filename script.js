const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */
    drawStuff();
}

resizeCanvas();

function drawStuff() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    context.moveTo(0, 0);
    context.lineTo(width, height);
    context.stroke();
}