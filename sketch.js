
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = new Ground(600,height,1200,20);
    tree   = new Tree(500,height,100.50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  tree.display();
  
 
}



