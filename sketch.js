/*


write your own story

*/
var girl, girlImg;
var bg, bgImg;





function preload(){
 girlImg = loadAnimation("Girl-1.png", "Girl-2.png", "Girl-3.png", "Girl-4.png",);
 bgImg = loadImage("Background.png");
}



function setup() {
  createCanvas(1000, 1000);
  girl = createSprite(500,500);
  girl.addAnimation("GirlRunning",girlImg);
  //girl.depth = +10
  

  bg = createSprite(500,500);
  bg.addImage(bgImg);
  bg.velocityX = -5;
  bg.scale = 0.7
  
}

function draw() {
  background("0");
  
 if (bg.x > 0 ){
    bg.x = width/2
}
  
  drawSprites();

}

