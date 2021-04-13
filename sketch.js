
var fixedRect,movingrect,gameobject1,gameObject2,gameObject3;

var edges;

function setup() {
  createCanvas(400,400);
 fixedRect = createSprite(50,150,50,50);
 fixedRect.shapeColor = "lightblue";

 movingrect= createSprite(350,200,50,70)
 movingrect.shapeColor = "lightgreen"
 movingrect.velocityX = 8
 movingrect.velociyY = 7
 movingrect.debug = true
 fixedRect.debug = true

 gameobject1= createSprite(150,150,50,50);
 gameobject1.shapeColor = "yellow";

 gameObject2 = createSprite(250,150,50,50);
 gameObject2.shapeColor = "blue";

 gameObject3 = createSprite(350,150,50,50);
 gameObject3.shapeColor = "green"

 edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  
 


  //console.log(object1.x);
//  console.log(object1.x - fixedRect.x)

if(isTouching(movingrect,gameobject1))
  {
  movingrect.shapeColor = "red";
  gameobject1.shapeColor = "yellowgreen";
}

if(isTouching(movingrect,gameObject2)){
  movingrect.shapeColor = "cyan";
  gameObject2.shapeColor = "red";
}



else{
  fixedRect.shapeColor = "lightblue";
  movingrect.shapeColor = "lightgreen"
}

bounceOff(movingrect,gameobject1);
movingrect.bounceOff(edges)


  drawSprites();
}

