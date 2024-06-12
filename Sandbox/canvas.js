const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d")


//// Equivalent to draw method? ////


/*
ctx.beginPath();
ctx.rect(50, 30, 30, 30);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(200, 120, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
*/

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

function draw() {
    ctx.clearRect(0, 0, 20000, 80);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
   

    x += dx;
    y += dy;
 
}

setInterval(draw, 10)