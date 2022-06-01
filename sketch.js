
var trex ,trex_running;
var ground , groundImage; 
var invisibleGround;
var nuvem, nuvemImage;
var cacto1
var cacto2
var cacto3
var cacto4
var cacto5
var cacto6
var cacto

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundImage = loadImage("ground2.png");
nuvemImage = loadImage ("cloud.png");
cacto1 = loadImage("obstacle1.png")
cacto2 = loadImage("obstacle2.png")
cacto3 = loadImage("obstacle3.png")
cacto4 = loadImage("obstacle4.png")
cacto5 = loadImage("obstacle5.png")
cacto6 = loadImage("obstacle6.png")

}



function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
trex.scale = 0.5

ground = createSprite(0,180,600,15);
ground.addImage("solo",groundImage );
invisibleGround = createSprite(0,190,600,15);
invisibleGround.visible = false; 


}

function draw(){
  background("white")
 
 ground.velocityX = -2;
 if (ground.x < 0){
   ground.x = 300;
 }
 
 if (keyDown("space") && trex.y >= 150){
   trex.velocityY = -13;
 }
 trex.velocityY = trex.velocityY + 0.8;

 trex.collide (invisibleGround);  

criarNuvem();
criarCacto();
  drawSprites();

}
function criarNuvem(){
 
  if(frameCount % 120 === 0){
   
    nuvem=createSprite(650,100,40,40);
    nuvem.addImage("cloud", nuvemImage);  
    nuvem.velocityX = -2 
    nuvem.scale = 0.7;
    
    nuvem.y = Math.round(random(20, 100));

    trex.depth = nuvem.depth;   
    trex.depth = trex.depth + 1;
  nuvem.lifetime=350
  }


}
function criarCacto(){
  if(frameCount % 120 === 0){
cacto=createSprite(650,170,50,50)
cacto.scale=0.5
cacto.velocityX = -4 
var rand = Math.round(random(1,6));
switch(rand){
  case 1: cacto.addImage(cacto1)
   break;
   case 2: cacto.addImage(cacto2)
   break;
   case 3: cacto.addImage(cacto3)
   break;
   case 4: cacto.addImage(cacto4)
   break;
   case 5: cacto.addImage(cacto5)
   break;
   case 6: cacto.addImage(cacto6)
   break;
   default: break;
}
cacto.lifetime=200


}
}


