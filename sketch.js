const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var t1,t2,t3,t4,t5,t6;
var c1,c2,c3,c4,c5,c6;
var bg;
var e;
var g;

function preload() {
  bg=loadImage("images/bg.jpg")
}

function setup() {
  createCanvas(1700,850);
  engine = Engine.create();
  world = engine.world;

  t1=new Trunk(50);
  t2=new Trunk(150);
  t3=new Trunk(250);
  t4=new Trunk(350);
  t5=new Trunk(450);
  t6=new Trunk(550);

  e=new Sengine(650);
  
  g=new Ground();

  c1=new Connector(e.body,t6.body);
}

function draw() {
  background(bg);
  Engine.update(engine);

  t1.display();
  t2.display(); 
  t3.display(); 
  t4.display(); 
  t5.display(); 
  t6.display(); 
  e.display(); 
  g.display();
  c1.display();
  drawSprites();
}