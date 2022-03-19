canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokestyle = color;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.strokestyle();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").Value;
    console.log(color);

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console.log("X = " + mouse_x + ",Y = " + mouse_y);
circle(mouse_x , mouse_y);


}