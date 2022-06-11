const canvas = document.getElementById("canvas");
let bull = false
let body = document.querySelector('body')
let context = canvas.getContext("2d");
context.lineWidth = 1;
let pen_color = "black";
let pen_width = "5";
let drawing = false;


canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    context.beginPath();
    canvas.style='background:white; transition:2s;  box-shadow: -1px 2px 13px 1px white;'
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

 setTimeout(() => {
    if(bull==false){
        canvas.style='background-color:transparent; transition:3s; box-shadow: -1px 2px 13px 1px black; background-image:url(backgrounds/red.gif)'
    }else{
        canvas.style='background-color:transparent; transition:3s; box-shadow:  0px 0px 0px 0px; background-image:url(backgrounds/all.gif)'
    }     
}, 5000);

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

const mode = () => {
    if(bull===false){  
        canvas.style='background-image:url(backgrounds/all.gif);box-shadow: 0px 0px 0px 0px '
        body.style = 'background-color:#161616'
        bull=true
    }else {
      canvas.style='background-image:url(backgrounds/red.gif);box-shadow: -1px 2px 13px 1px black'
      body.style = 'background-color:black'
      bull = false
    }

}