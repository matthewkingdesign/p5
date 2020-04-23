// $(document).ready(function(){
//   $('.title').fadeIn(5000);
// });

// INTRO INTO VARIABLES, OBJECTS, MAP FUNTION, MOUSEX, MOUSEY - RUNS TO LINE 41
//declare and initialise a variable
// var col = 0;
// var circleColour = 64;
// var circle1 =  {
//   x: 0,
//   y: 300,
//   diameter: 80
// };
//
// function setup() {
//   createCanvas(600,600);
//   //print something to the console in the browser
//   print('Hello');
// }
//
// function draw() {
//   // map mouseX to the range of the canvas and colour
//   col = map(mouseX, 0, 600, 0, 255);
//   background(col, 201,100);
//   noStroke();
//   fill(200,120,200);
//
//   // The x position is now the var circleX and the y position is now based on mouse positions
//   // ellipse(300, 300, circle1.diameter, circle1.diameter);
//   ellipse(300,300,300,300)
//
//   // Change the variable to equals itself + 1. This will animate it across the screen
//   circle1.diameter = circle1.diameter + 1;
//   circle1.x = circle1.x + 1;
//   circleColour = circleColour + 1;
// }
//
// // When the mouse is clicked do something
// function mousePressed(){
//   circle1.x = circle1.x + 10;
// }


// DOTS
var spot = {
  x: 100,
  y:50
};
var col = {
  r: 255,
  g: 0,
  b: 0
};
function setup(){
  createCanvas(800,400);
  background(255);
}
function draw(){
  spot.x = random(0,width);
  spot.y = random(0,height);
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);
  fill(col.r,col.g,col.b,100);
  noStroke();
  ellipse(spot.x, spot.y, 24, 24);
}
