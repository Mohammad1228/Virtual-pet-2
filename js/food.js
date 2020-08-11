class Food{
constructor(){
this.milkImg =loadImage("Milk.png");

//bottle=createSprite(100,100,10,10);
//bottle.addImage("Milk",milkImg);
this.foodStock;
this.lastFed;

}
display(){
    //needs to be checked
    image(this.milkImg,200,200)

}
getFoodStock(){
    FoodStockref=Database.ref('Food');
    FoodStockref.on("value",(data)=>{
        this.foodStock = data.val()

    });
}
updateFoodStock(){

}
deductFood(){

}













}