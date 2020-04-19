const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5;
var triangle1,triangle2,triangle3;
var ground;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  rectangle1 = new  Rectangle(200,100,40,100);
  rectangle2 = new  Rectangle(250,100,40,100);
  rectangle3 = new  Rectangle(300,100,60,100,100);
  rectangle4 = new  Rectangle(350,100,40,100);
    rectangle5 = new Rectangle(400,100,40,100);
   triangle1 = new  Triangle(200,120,40,10);
   triangle2 = new  Triangle(300,120,60,10);
  triangle3 = new  Triangle(400,120,40,10);

}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  rectangle1.display(); 
  rectangle2.display(); 
  rectangle3.display(); 
  rectangle4.display(); 
  rectangle5.display(); 
  triangle1.display(); 
  triangle2.display(); 
 triangle3.display(); 
  drawSprites();
}