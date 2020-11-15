//Create variables here
var dog , happyDog , foodS , database , foodStock ;
var dodImage;
function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);

  
  dog = createSprite(300,200,30,30);
  dog.addImage(dogImage);
  
}


function draw() {  

  background(46 , 139 , 87);
  foodStock = database.ref( 'food');
  foodStock.on("value",readStock);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }



  drawSprites();

  textSize(4);
  fill("white");
  text("Note: Press Up Arrow To Feed the Dog",100,20);
  
  //add styles here

}

function writeStock(x){
  if (x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    food: x
  })
}

function readStock(data){
  foodS = data.val();
}