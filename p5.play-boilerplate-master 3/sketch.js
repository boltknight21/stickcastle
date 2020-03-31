var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5;
var triangle1,triangle2,triangle3;
 var rectangle1=createSprite(100,100,40,100);
var rectangle2=createSprite(200,100,40,100);
var rectangle3=createSprite(300,100,50,40,100);
var rectangle4=createSprite(400,100,40,100);
 var rectangle5=createSprite(500,100,40,100);
var triangle1=createSprite(100,120,40,10);
var triangle2=createSprite(300,120,50,10);
var triangle3=createSprite(500,120,40,10);

function setup() {
  createCanvas(800,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}