
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine1;
var world1;
var ball;
//var wall;
//var bin;
//var ground;
var rightside;
var leftside;
var bottomGround;

function setup() {
	createCanvas(1800, 700);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	};
	var ground_options = {
		isStatic:true
	}
	var wall_options ={
		isStatic:true	
	}
	engine1 = Engine.create();
	world1 = engine1.world;

	//Create the Bodies Here.
	ball = Bodies.circle(300,20,20,ball_options);
	World.add(world1,ball);
	bottomGround = new ground(900,695,1800,10);
	leftside = new ground(1100,620,20,120);
	rightside = new ground(1350,620,20,120);

	//ground = Bodies.rectangle(400,395,400,10,ground_options)
	//World.add(World1,ground)

	//wall = Bodies.rectangle(625,50,10,50,wall_options)
	//World.add(World1,wall)
	
	//bin = Bodies.rectangle(725,50,10,50,wall_options)
	//World.add(World1,bin)

	Engine.run(engine1);
  
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5});
//Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:5,y:-10});
}	
}


function draw() {
	//Fill("black");
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");
 
  
  bottomGround.display();
  leftside.display();
  rightside.display();
  

ellipse(ball.position.x,ball.position.y,20);
//rect(ground.position.x,ground.position.y,400,10);
//rect(wall.position.x,wall.position.y,10.50);
//rect(bin.position.x,bin.position.y,10,50);

Engine.update(engine1);

  //drawSprites();
 
}



