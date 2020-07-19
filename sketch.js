var x = 0;

function setup() { 
  createCanvas(400, 400);
  rectMode(CENTER);
} 

function draw() { 
  background(220);
	
  
	x+= 0.02;
  translate (width/2, height/2);
  rotate(x);
	rect(0, 0, 100, 100);
}