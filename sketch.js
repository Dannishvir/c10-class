var trex ,trex_running;
var ground , ground_img 
var edges
function preload ()
{
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
ground_img = loadImage("ground2.png")
 }
 


function setup(){
  createCanvas(600,200)


  edges = createEdgeSprites()
  ground = createSprite(275,190,600,5)
ground.addImage(ground_img)

  //create a trex sprite
 trex = createSprite(300,100,10,50) 
 trex.addAnimation("t",trex_running)
 trex.scale = 0.6
}

function draw(){
  background("grey")
  
  text (mouseX + "," + mouseY , mouseX , mouseY)
  
  ground.velocityX = -6

  if(keyDown("space"))
  {
trex.velocityY = -10


  }

  trex.velocityY = trex.velocityY + 1
trex.collide(ground)
  trex.collide(edges[3])
  

  if(ground.x < 10)
  {
ground.x = width/2
  }
  drawSprites()


  

}
