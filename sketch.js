const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos=[]
var particles=[]
var division=[]
var divisionHeight=300;
var score=0
var ground
var engine,world

function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world

  ground=new Ground(240,780,480,20)

for (var k=0 ; k<=480 ; k=k+80) {
  division.push(new Division(k,800-divisionHeight/2,10,divisionHeight));
}

for (var j=40 ; j<=480 ; j=j+50){
  plinkos.push(new Plinko(j,75));
console.log(j)
}


}
function draw() {
  background("black");  
  Engine.update(engine)



ground.display()
for (var j=0 ; j<division.length ; j++) {
division[j].display()  
}
for (var n=0 ; n<plinkos.length ; n++) {
  plinkos[n].display()
}
  drawSprites();
}