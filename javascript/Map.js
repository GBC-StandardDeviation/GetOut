var map2 = [
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],
];
var canvas1 = document.getElementById("gamearea");
var ctx = canvas1.getContext('2d');
var X,Y;
var IX=0; IY=0;
bgImg = new Image();
bgImg.src = "images/Dungeon_A1.png";
const SIZE = 64;
function drawMap2(){ // draw the inventory
    for(var row = 0; row < map2.length;row++){
        Y = row * SIZE;
        console.log( map2.length);
        for (var col = 0; col < map2.length;col++){
            X = col * SIZE;
            console.log(X);
            console.log(col);

        }ctx.drawImage(bgImg,
            IX,IY,SIZE,SIZE,
            X, Y, SIZE, SIZE);
    }
}
window.onload=function()
{
  drawMap2();
};