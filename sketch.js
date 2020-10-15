
var monkey , monkey_running, monkeyimage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
var survivalTime=0;
function preload(){

  
  
  monkeyimage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkeyimage)

  monkey.scale = 0.1;
  
 
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  
obstacleGroup=new Group();
FoodGroup=new Group();
  
}
  

function draw() {
  background("white")
   if(ground.x<0) {
    ground.x=ground.width/2;
  }
if(keyDown("space")&& monkey.y >= 100) {
     monkey.velocityY = -12;
  
  
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  stroke="black";
  textSize(20);
  fill("black");
  survivalTime=survivalTime+Math.round(getFrameRate()/60) 
  text("Survival Time: "+ survivalTime, 100,50);
  Spawnfood();
  spawnObstacles();        
  monkey.collide(ground);
  drawSprites()
}

function Spawnfood(){
  
  
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
    banana.y=Math.round (random(120,200));
   banana.velocityX = -6;

  banana.addImage(bananaImage);
    banana.scale=0.1
    
    FoodGroup.add(banana)
    banana.lifetime=250
    
    
    banana.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
     
    
  
}
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
    
    obstacle.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
  }
}
  




