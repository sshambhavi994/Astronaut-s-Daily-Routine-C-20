var bath, drink, eat, gym, backgroundImg, move, sleep, astronaut, brush;

function preload(){
  bath = loadAnimation("bath1.png","bath2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  backgroundImg = loadImage("iss.png");
  move = loadAnimation("move1.png","move.png","move1.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png")
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("drinking",drink);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("exercising",gym);
  astronaut.addAnimation("moving",move);
  astronaut.addAnimation("brushing",brush)
  
  astronaut.scale = 0.1;
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  textSize(20)
  fill("white")
  text("Brushing = UP ARROW",30,30);
  text("Bathing = LEFT ARROW",30,50);
  text("Eating = RIGHT ARROW",30,70);
  text("Drinking = D KEY",30,90);
  text("Moving = M KEY",30,110);
  text("Exercising = DOWN ARROW",30,130);
  text("Sleeping = S KEY",30,150)
}

function keyPressed(){
  if (keyCode === DOWN_ARROW){
    astronaut.changeAnimation("exercising",gym);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }

  if (keyCode === LEFT_ARROW){
    astronaut.changeAnimation("bathing",bath);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }

  if (keyCode === RIGHT_ARROW){
    astronaut.changeAnimation("eating",eat);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }

  if (keyCode === 77){
    astronaut.velocityY = 0;
    astronaut.velocityX = -2;
    astronaut.changeAnimation("moving",move)
  }

  if (keyCode === UP_ARROW){
    astronaut.changeAnimation("brushing",brush)
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }

  if (keyCode === 68){
    astronaut.changeAnimation("drinking",drink)
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }
  
  if (keyCode === 83){
    astronaut.changeAnimation("sleeping",sleep);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    astronaut.x = 400;
    astronaut.y = 200;
  }
  

}