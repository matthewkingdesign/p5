function setup(){
  createCanvas(600,400);
  background(255,84,100);
}
function draw() {
  noStroke();
  fill(255,229,33);

  if(mouseX > width/2){
    fill(100);
  }
  ellipse(300,200,50,50);
}
