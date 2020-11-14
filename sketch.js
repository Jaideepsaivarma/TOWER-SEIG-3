
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1;
var bg = "IMG/bg1.png";
var backgroundImg;
var score = 0;


function preload() {
  getBackgroundImg();
}


function setup() {
  createCanvas(1450, 600);
  rand = random(1,2);


	engine = Engine.create();
	world = engine.world;
	//Creating ground
  platform1 = new Ground(1200,300,250,20);
  platform2 = new Ground(600,400,200,20);
	block1G = new Green(1120,260,40,40);
	block2G = new Green(1160,260,40,40);
	block3G = new Green(1200,260,40,40);
	block4G = new Green(1240,260,40,40);
	block5G = new Green(1280,260,40,40);
	block6W = new White(1120,220,40,40);
	block7W = new White(1160,220,40,40);
	block8B = new Blue(1200,220,40,40);
	block9W = new White(1240,220,40,40);
	block10W = new White(1280,220,40,40);
	block11 = new Orange(1120,180,40,40);
	block12 = new Orange(1160,180,40,40);
	block13 = new Orange(1200,180,40,40);
	block14 = new Orange(1240,180,40,40);
  block15 = new Orange(1280,180,40,40);
  block16 = new White(520,380,40,40);
  block17 = new Orange(560,380,40,40);
  block18 = new Orange(600,380,40,40);
  block19 = new White(640,380,40,40);
  block20 = new White(680,380,40,40);
  block21 = new White(520,350,40,40);
  block22 = new White(560,350,40,40);
  block23 = new Orange(600,350,40,40);
  block24 = new White(640,350,40,40);
  block25 = new White(680,350,40,40);
  block26 = new White(680,300,40,40);
  block27 = new White(520,300,40,40);
  block28 = new Orange(560,300,40,40);
  block29 = new Orange(600,300,40,40);
  block30 = new Orange(640,300,40,40);
  //block25 = new White(680,150,40,40);
 
	ball1 = new Box(1160,20,40,40);
	SlingShotA = new SlingShot(ball1.body,{x:100, y:120});
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 
  if(backgroundImg)
  background(bg);
//console.log(mouseX);
  rectMode(CENTER);
  platform1.display();
  platform2.display();
  block1G.display();
  block2G.display();
  block3G.display();
  block4G.display();
  block5G.display();
  block6W.display();
  block7W.display();
  block8B.display();
  block9W.display();
  block10W.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  ball1.display();
  SlingShotA.display();


  
 
  
  
  drawSprites();
  textSize(30);
  fill("blue")
  text("SCORE : "+score,550,50);
 
}
function mouseDragged(){
    
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
    SlingShotA.fly();
    gameState = "launched";
    score = score+10;
}
function keyPressed(){
  if(keyCode===32){
    ball1.x = 100;
    ball1.y = 120;
    SlingShotA.attach(ball1.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "IMG/bg.png";
  }
  else{
      bg = "IMG/bg2.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}



