var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 640;

var wallImg = new Image;
window.onload=wallImg.src = "images/Dungeon_A4.png";
var floorImg = new Image;
window.onload = floorImg.src = "images/Inside_A2.png";
var wallImg2 = new Image;
window.onload=wallImg2.src = "images/Inside_A4.png";

var l_rug = new Image();
window.onload=l_rug.src = "images/rug.png";



const SIZE = 64;
var sourceX , sourceY ;
var destX , destY ;

/*var doorWay = [
    [1,1,1,1,1,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0,1,1,1,1],

];
window.onload=function(){
    drawDoorWay()
};

function drawDoorWay(){
    for(var row = 0; row < doorWay.length;row++){
        destY = row * 160;

        for (var col = 0; col < doorWay[row].length;col++){

            if(doorWay[row][col]===1){
                sourceX = 0;
                sourceY=160;
                context.drawImage(wallImg,
                    sourceX,sourceY,SIZE,160,
                    destX, destY, SIZE, 160);

            }
            else if(doorWay[row][col]===0){
                sourceX = 64;
                sourceY=290;
                context.drawImage(floorImg,
                    sourceX,sourceY,SIZE,94,
                    destX, destY, SIZE, 160);
            }destX = col * SIZE;
            }
    }
}*/

/*var rightCorridor = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1],

];
window.onload=function(){
    drawRightCorridor()
};

function drawRightCorridor(){
    for(var row = 0; row < rightCorridor.length;row++){
        destY = row * 160;

        for (var col = 0; col < rightCorridor[row].length;col++){

            if(rightCorridor[row][col]===1){
                sourceX = 0;
                sourceY=160;
                context.drawImage(wallImg,
                    sourceX,sourceY,SIZE,160,
                    destX, destY, SIZE, 160);

            }
            else if(rightCorridor[row][col]===0){
                sourceX = 64;
                sourceY=290;
                context.drawImage(floorImg,
                    sourceX,sourceY,SIZE,94,
                    destX, destY, SIZE, 160);
            }destX = col * SIZE;
            }
    }
}*/
/*var leftCorridor = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1],

];
window.onload=function(){
    drawLeftCorridor()
};

function drawLeftCorridor(){
    for(var row = 0; row < leftCorridor.length;row++){
        destY = row * 160;

        for (var col = 0; col < leftCorridor[row].length;col++){

            if(leftCorridor[row][col]===1){
                sourceX = 0;
                sourceY=160;
                context.drawImage(wallImg,
                    sourceX,sourceY,SIZE,160,
                    destX, destY, SIZE, 160);

            }
            else if(leftCorridor[row][col]===0){
                sourceX = 64;
                sourceY=290;
                context.drawImage(floorImg,
                    sourceX,sourceY,SIZE,94,
                    destX, destY, SIZE, 160);
            }destX = col * SIZE;
            }
    }
}*/
/*var room1 = [ // room on map left
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
];
window.onload=function(){
    drawRoom1()
};

function drawRoom1(){
    for(var row = 0; row < room1.length;row++){
        destY = row * SIZE;

        for (var col = 0; col < room1[row].length;col++){
            if(room1[row][col]===0){
                sourceX = 64;
                sourceY=290;
                context.drawImage(floorImg,
                    sourceX,sourceY,SIZE,SIZE,
                    destX, destY, SIZE, SIZE);
            }
           else if(room1[row][col]===1) {
                sourceX = 320;
                sourceY = 320;
                context.drawImage(floorImg,
                    sourceX, sourceY, SIZE, SIZE,
                    destX, destY, SIZE, SIZE);
            }
            destX = col * SIZE;
        }
    }
}*/
/*var topCorridor = [ 
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,1],
    [3,3,0,0,0,0,0,0,0,0,3],


];
window.onload=function(){
    drawTopCorridor()
};

function drawTopCorridor(){
    for(var row = 0; row < topCorridor.length;row++) {
        destY = row * SIZE;

        for (var col = 0; col < topCorridor[row].length; col++) {
            if (topCorridor[row][col] === 0) {
                sourceX = 64;
                sourceY = 0;
                context.drawImage(floorImg,
                    sourceX, sourceY, SIZE, 160,
                    destX, destY, SIZE, 130);
            }
            else if (topCorridor[row][col] === 1) {
                sourceX = 320;
                sourceY = 320;
                context.drawImage(wallImg2,
                    sourceX, sourceY, SIZE, 160,
                    destX, destY, SIZE, 130);

            }
            destX = col * SIZE;
        }
    }
}*/

/*var room2 = [ // room on map right
    [2,2,2,2,2,2,2,2,2,2,2],
    [2,2,0,0,0,0,0,0,0,0,2],
    [2,2,0,0,0,0,0,0,0,0,2],
    [2,2,0,0,0,0,0,0,0,0,2],
    [0,0,0,0,0,0,0,0,0,0,2],
    [0,0,0,0,0,0,0,0,1,0,2],
    [0,0,0,0,0,0,0,0,1,0,2],
    [2,2,0,0,0,0,0,0,0,0,2],
    [2,2,0,0,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2],
];
window.onload=function(){
    drawRoom2()
};

function drawRoom2(){
    for(var row = 0; row < room2.length;row++){
        destY = row * SIZE;

        for (var col = 0; col < room2[row].length;col++){
            if(room2[row][col]===0){
                sourceX = 64;
                sourceY=191;
                context.drawImage(floorImg,
                    sourceX,sourceY,SIZE,SIZE,
                    destX, destY, SIZE, SIZE);
            }
           else if(room2[row][col]===1) {
                sourceX = 384;
                sourceY = 289;
                context.drawImage(floorImg,
                    sourceX, sourceY, SIZE, 160,
                    destX, destY, SIZE, 130);
            }
            else if(room2[row][col]===2) {
                sourceX = 0;
                sourceY = 97;
                context.drawImage(wallImg2,
                    sourceX, sourceY, SIZE, SIZE,
                    destX, destY, SIZE, SIZE);
            }
            destX = col * SIZE;
        }
    }
}*/
var room3 = [ //room on map top
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
];
window.onload=function(){
    drawRoom3()
};

function drawRoom3() {
    for (var row = 0; row < room3.length; row++) {
        destY = row * SIZE;

        for (var col = 0; col < room3[row].length; col++) {
            if (room3[row][col] === 0) {
                sourceX = 64;
                sourceY = 191;
                context.drawImage(floorImg,
                    sourceX, sourceY, SIZE, SIZE,
                    destX, destY, SIZE, SIZE);
            }
            else if (room3[row][col] === 1) {
                sourceX = 384;
                sourceY = 289;
                context.drawImage(floorImg,
                    sourceX, sourceY, SIZE, 160,
                    destX, destY, SIZE, 130);
            }
            else if (room3[row][col] === 2) {
                sourceX = 0;
                sourceY = 0;
                context.drawImage(l_rug,
                    sourceX, sourceY, SIZE, SIZE,
                    destX, destY, SIZE, SIZE);
            }
            destX = col * SIZE;
        }
    }
}


