var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 30, 80);
  movingRect = createSprite(400, 500, 80, 30);

  fixedRect.velocityY = 3;
  movingRect.velocityY = -3;

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  
  bounceOff(movingRect,fixedRect);
  
  
  drawSprites();
}
function bounceOff(object1 ,object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2){

      object2.velocityX = object2.velocityX * -1;
      object1.velocityX = object1.velocityX * -1;
    }



    if(object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
      object2.velocityY = object2.velocityY * -1;
      object1.velocityY = object1.velocityY * -1;
  }
  
}