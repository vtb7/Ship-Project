
var ship_running;
var ship;
var sea;
var seaImg;
function preload()
{
seaImg = loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){

 createCanvas(400,400)

 sea = createSprite(200,200,10,10);
  sea.addAnimation("running", ship_running);
  sea.scale = 0.5;

  //create a ship sprite
  ship = createSprite(200,180,20,20);
  ship.addImage("ship",seaImg);

  
  ship.velocityX = -4;
  

  
 }

 function draw() {

   background("yellow");

   if(ship.x < 0) 
  {ship.x = ship.width /2} ;

  drawSprites();




 }