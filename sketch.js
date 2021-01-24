const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,600,20);

  for(var k = 0; k<=width; k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j =40; j<=width; j+=50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width -10; j+=50){
    plinkos.push(new Plinko(j,175));
  }

}

function draw() {
  background(180);  
  Engine.update(engine);

  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }

  

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

}