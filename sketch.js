const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine =Engine.create();
  world = engine.world;
 for(var k = 0; k<=width; k=k+ 80){
   divisions.push(new Box(k, height-divisionHeight/2, 10, divisionHeight));
 }
 ground = new Ground(width/2, height, width, 10);
 for(var i = 75; i <= height-400; i=i+100){

 
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Ball(j,i));
  }
  for(var j = 15; j<=width-10; j=j+50){
plinkos.push(new Ball(j, i+50));
  }
}
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for(var i = 0; i< divisions.length; i++){
    divisions[i].display();
  }
  for(var i = 0; i< plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 12, 12));
  }
  for(var i = 0; i< particles.length; i++){
    particles[i].display();
  }
}
