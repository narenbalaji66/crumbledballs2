
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var bin,binImage;

function preload()
{
  binImage = loadImage("dustbin.png")	
}

function setup() {
	createCanvas(800, 700);
bin=createSprite(600,510,10,10)
bin.addImage(binImage)
bin.scale=0.5;

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,600,800,20)

	paper = new Paper(100,100,20)
   
	dustbin1 = new Dustbin(560,530,20,100)
  dustbin2 = new Dustbin(640,530,20,100)
  dustbin3 = new Dustbin(600,560,110,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  drawSprites()
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-63})
  }
}



