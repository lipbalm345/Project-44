
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	user = new Player(400,600);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDOWN(ARROW_UP)){
		user.velocity.x = 0;
		user.velocity.y = 3;
  }
  if(keyDOWN(ARROW_DOWN)){
	user.velocity.x = 0;
	user.velocity.y = -3;
}
if(keyDOWN(ARROW_LEFT)){
	user.velocity.x = -3;
	user.velocity.y = 0;
}
if(keyDOWN(ARROW_RIGHT)){
	user.velocity.x = 3;
	user.velocity.y = 0;
}
  
  drawSprites();
 
}



