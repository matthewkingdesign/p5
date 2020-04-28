var x = 0;
var speed = 3;
var on = false;
function setup(){
  createCanvas(600,400);

}
function draw() {

  if (on){
    background(255,84,100);
  } else {
    background(116,187,252);
  }
  noStroke();
  fill(255,229,33);

  // if mouse position is somewhere change fill
  // if(mouseX > width/2){
  //   fill(100);
  // }
  ellipse(x,150,50,50);
  ellipse(x,250,50,50);

  // Bounce the ball with if else if
  // if (x > width) {
  //   speed = -3;
  //   console.log("ping: " +speed)
  //  } else if (x < 0) {
  //   speed = 3;
  //   console.log("pong: " +speed)
  //  }

  // Bounce the ball with OR and math
   if (x > width || x < 0){
     speed = speed * -1;
   }

  x = x + speed;
  // Drawing shapes nased on mouseX position
  noFill();
  strokeWeight(4);
  stroke(255);

  if(mouseX > 275){
    ellipse(300,200,80,80)
  }else if(mouseX > 200){
    rectMode(CENTER)
    rect(300,200,80,80)
  }else if(mouseX > 125){
    line(300,300,300,100)
  }
  else{
    point(300,200)
  }

}

function mousePressed(){
  on = !on;

  // if statement doing the same as above
  // if (on){
  //   on = false;
  // }else{
  //   on = true;
  // }
}
