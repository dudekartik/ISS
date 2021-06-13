var bg;
var sc1;
var sc2;
var sc3;
var sc4;
var iss;
var spaceraft;
var hasDocked = false;
var issImage;

function preload(){
bg = loadImage("spacebg.jpg");
sc1 = loadImage("spacecraft1.png");
sc2 = loadImage("spacecraft2.png");
sc3 = loadImage("spacecraft3.png");
sc4 = loadImage("spacecraft4.png");
issImage = loadImage("iss.png");
}

function setup() {
  createCanvas(1100,450);
  
  iss = createSprite(400,250,10,10)
  iss.addImage(issImage);
  iss.scale = 0.9

  spacecraft = createSprite(370,370,5,5)
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.3;
}

function draw() {
  background(bg);
  
  if (keyIsDown(RIGHT_ARROW)) {
    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(sc4)
    spacecraft.scale = 0.3
}
  if (keyIsDown(LEFT_ARROW)) {
    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(sc3)
    spacecraft.scale = 0.3
}
if (keyIsDown(UP_ARROW)) {
  spacecraft.y=spacecraft.y-2
  spacecraft.addImage(sc2)
  spacecraft.scale = 0.3
}
if (keyWentUp("up")) {
  spacecraft.addImage(sc1)
  spacecraft.scale = 0.3
}
if (keyWentUp("right")) {
  spacecraft.addImage(sc1)
  spacecraft.scale = 0.3
}
if (keyWentUp("left")) {
  spacecraft.addImage(sc1)
  spacecraft.scale = 0.3
}

if(!hasDocked){    
 spacecraft.x=spacecraft.x+random(-1,1);
}

if(spacecraft.y <=(iss.y+70)&&spacecraft.x<+(iss.x-10)){
hasDocked = true
textSize(25);
fill("white")
text("Docking Sucessful!", 600,300)
}

  drawSprites();
}