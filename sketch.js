
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var paper1;
var dustbin1,d2,d3;
var ground1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new paper(100,100);
	dustbin1=new dustbin(500,630,200,20);
	d2=new dustbin(500,580,20,80);
	d3=new dustbin(700,580,20,80);
ground1=new ground(0,650,1600,10);

	Engine.run(engine);
  
}


function draw() {


	
  background(0);
  paper1.display();
  dustbin1.display();
  ground1.display();
d2.display()
d3.display()
 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-16})
	}
}



