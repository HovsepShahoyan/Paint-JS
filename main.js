const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.lineWidth = 1;
let pen_color = "black";
let pen_width = "5";
let drawing = false;
canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault;
}, false);
canvas.addEventListener("mousemove", (event) => {
    if(drawing == true) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = pen_color;
        context.stroke();
    }
    event.preventDefault();
}, false);
canvas.addEventListener("touchstart", (event) => {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault;
}, false);
canvas.addEventListener("touchmove", (event) => {
    if(drawing == true) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = pen_color;
        context.stroke();
    }
    event.preventDefault();
}, false);
canvas.addEventListener("touchend", (event) => {
    if(drawing == true) {
        context.stroke();
        context.closePath();
        drawing = false;
    }
    event.preventDefault();
}, false)
canvas.addEventListener("mouseup", (event) => {
    if(drawing == true) {
        context.stroke();
        context.closePath();
        drawing = false;
    }
    event.preventDefault();
}, false)
canvas.addEventListener("mouseout", (event) => {
    if(drawing == true) {
        context.stroke();
        context.closePath();
        drawing = false;
    }
    event.preventDefault();
}, false)
function clear1() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
