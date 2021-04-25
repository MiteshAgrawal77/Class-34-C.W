const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15
var ground;
var bob;

function setup() {
  createCanvas(1600,600);

  myengine = Engine.create();
  myworld = myengine.world;

  rect1 = new Building(1200,300,70,70);  
  rect2 = new Building(1200,300,70,70);
  rect3 = new Building(1200,300,70,70);  
  rect4 = new Building(1200,300,70,70);
  rect5 = new Building(1200,300,70,70);  
  rect6 = new Building(1200,300,70,70);
  rect7 = new Building(800,300,70,70);  
  rect8 = new Building(800,300,70,70);
  rect9 = new Building(800,300,70,70);  
  rect10 = new Building(800,300,70,70);
  rect11 = new Building(800,300,70,70);  
  rect12 = new Building(800,300,70,70);
  rect13 = new Building(700,300,70,70);
  rect14 = new Building(700,300,70,70);  
  rect15 = new Building(700,300,70,70);

  ground = new Ground(800,390,1600,30)
  
  
  bob = new Ball(400,200,40);

}

function draw() {
  Engine.update(myengine)
  background("black"); 

  rect1.display()
  rect2.display()
  rect3.display()
  rect4.display()
  rect5.display()
  rect6.display()
  rect7.display()
  rect8.display()
  rect9.display()
  rect10.display()
  rect11.display()
  rect12.display()
  rect13.display()
  rect14.display()
  rect15.display()

  ground.display()
  bob.display()
}