const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground1;


function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world

box1=new box(130,20,40,70)
box2=new box(100,100,40,70)
ground1=new Ground(400,200,800,40)
}

function draw() {
  background("yellow");  
  Engine.update(engine)
   
box1.display();
   box2.display();
   ground1.display();

  drawSprites();
}