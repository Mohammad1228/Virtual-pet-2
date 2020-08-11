var Dog;
var HappyDog;
var Database;
var FoodS,FoodStock;
var milkImg;
var feed;
var moreFood;

var fedTime, lastFed,foodobj;




function preload(){
Dog=loadImage("Dog.png");
HappyDog=loadImage("happydog.png");
//milkImg=loadImage("Milk.png");

}
function setup() {
  createCanvas(1000,1000);
  doggy =createSprite(250, 250, 50, 50);
  doggy.addImage("Dog1",Dog);
  doggy.addImage("happy",HappyDog)
  doggy.scale=0.5;

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  //feed.mousepressed(feedDog);

  moreFood=createButton("Add Food");
  moreFood.position(900,95);

  Database=firebase.database();

  
  
  
  foodobj=new Food();



}

function draw() {
  background(46, 139, 87);  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    doggy.changeImage("happy");
    


  }
  if(keyWentUp(UP_ARROW)){
    doggy.changeImage("Dog1");


  }
  Feed.mousePressed(feedDog);


  fill(255,255,254);
textSize(15);
if(lastFed>=12){
    text("Last Fed; "+lastFed%12+"PM",350,30);
}else if(lastFed==0){
    text("Last Fed: 12 AM",350,20)
}else{
    text("Last Feed: "+lastFed+"AM",350,30);
}

foodobj.getFoodStock();

  drawSprites();
  textSize(20);
  fill("red");
  stroke("blue");
  text("food supply:"+FoodS,100,200);

}





function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }


  Database.ref('/').update({
    Food:x
  })


}
function feedDog(){
dog.addImage(HappyDog);
foodobj.updateFoodStock(foodobj.foodStock-1);
database.ref('/').update({
Food:foodobj.getFoodStock(),
FeedTime:hour()
})





}