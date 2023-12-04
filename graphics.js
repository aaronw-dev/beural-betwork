const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
function drawRectangle(context,fillColor,x,y,width,height){
    context.beginPath();
    context.rect(x - width / 2, y - height / 2, width, height);
    context.fillStyle = fillColor;
    context.fill();
}