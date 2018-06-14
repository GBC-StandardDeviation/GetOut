
var canvas1 = document.getElementById("inventory");
var ctx = canvas1.getContext('2d');
canvas1.width = 50;
canvas1.height = 640;

bgImg = new Image();
bgImg.src = "images/box.png";
//const SIZE = 64;
var IX=0; IY=0;
var map = [ //blank inventory
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],

];

bgImg.onload=function(){
    drawInventory();
};



function drawInventory(){ // draw the inventory
    for(var row = 0; row < map.length;row++){
        Y = row * SIZE;
        for (var col = 0; col < map[row].length;col++){
            X = col * SIZE;
            ctx.drawImage(bgImg,
                IX,IY,SIZE,SIZE,
                X, Y, SIZE, SIZE);
        }
    }


}

//push item in array
const item = [];
itemImg = new Image();
itemImg.src = "images/item/1.png";

var demo1 = 0;
function pickUp(e) {

    if (e.keyCode == 74)// press J to pick up
    {
        if (  383<= player.x <= 418 && player.y == 355 && player.direction ==0
          || 376<=player.y<=404 && player.x == 362 && player.direction == 2) //the location where the demo item is hidden
        {

            switch(demo1)
            {
                case 0:
                    alert("You have receive demo item");
                    item.push("item1");
                    ctx.drawImage(itemImg,
                        8,10,32,32);
                    demo1++;
                case 1:
                    alert("There is nothing on the table");
                    demo1=1;
            }
           

        }


    }console.log(item);
    console.log(demo1);
    console.log(player.x,player.y)
    console.log(player.direction);
}

window.addEventListener('keydown', pickUp, false);

var canvas1 = document.getElementById("inventory");
var ctx = canvas1.getContext('2d');
canvas1.width = 50;
canvas1.height = 640;

bgImg = new Image();
bgImg.src = "images/Dungeon_A1.png";
const SIZE = 64;
var mapX=0; mapY=33;
var map = [
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
];
bgImg.onload=function(){
    drawInventory();
};
window.addEventListener('keydown', pickUp, false);
function pickUp(event) {

        if (event.keyCode == 74)// key J
        {
            map.splice(0,1,"1");
        }console.log(map[0][0]);

    }


function drawInventory(){
    for(var row = 0; row < map.length;row++){
        Y = row * SIZE;
        for (var col = 0; col < map[row].length;col++){
            if(map[row][col]===1){
                mapX = 50;
            }
            else if(map[row][col]===0){
                mapX = 0;
            }
            X = col * SIZE;
            ctx.drawImage(bgImg,
                mapX,mapY,SIZE,SIZE,
                X, Y, SIZE, SIZE);
        }
    }


}

