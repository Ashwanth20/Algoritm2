var fixedRect, movingRect;
var touched;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100, 100, 80, 30);
  gameObject1 = createSprite(100, 100, 80, 80);
  gameObject2 = createSprite(200, 100, 80, 80);
  gameObject3 = createSprite(300, 100, 80, 80);
  gameObject4 = createSprite(400, 100, 80, 80);


  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(gameObject2, movingRect)){
    movingRect.shapeColor = "green";
    gameObject2.shapeColor  = "green";
  }
  else{
    gameObject2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }


  touched = isTouching(gameObject2, movingRect);
  console.log(touched);

  drawSprites();
}