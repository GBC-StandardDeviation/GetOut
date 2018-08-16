var floor_l3 = new Image();
floor_l3.src = "images/tile-trans.png";
var main_l3 = {
    dial: "You are in the midst of the room",
    invtory: "There is nothing strange!"
};
var desk_l3 = {
    img: new Image(),
    dial: "There is a map on the desk" + "<br>" + "Use mouse to navigate!",
    map: new Image()
};
desk_l3.img.src = "images/desk_l3.png";
desk_l3.map.src = "images/world-physical-map.png";
var mainDoor_tol2 = {
    dial: "Back to room C460!"
};
var scene_l3_Index;
var scene_l3 = [main_l3, mainDoor_tol2, desk_l3, floor_l3, floor_l3, floor_l3, floor_l3, floor_l3];
var counter_l3 = 0;
var door_l3_Intv;

var objects_l3 =
    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [wall, floor, floor, floorcrack, floor, floor, floorcrack, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floorcrack, floor, floor, floor, floor, floor, floor, floor, wall],
        [s_window, floor, floor, floorcrack, desk_l3.img, floor_l3, floor_l3, floorcrack, floor, wall],
        [wall, floorcrack, floor, floor, floor_l3, floor_l3, floor_l3, floor, floor, wall],
        [wall, floor, floor, floor, floorcrack, floor, floor, floorcrack, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floorcrack, floor, floor, floor, floorcrack, floor, floor, wall],
        [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [setting, inventory, inventory, inventory, inventory, inventory, inventory, inventory, inventory, setting]];

function start_l3(){
    gameStarted = true;
    context.clearRect(0, 0 , canvas.width, canvas.height);
    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 10; row++){
            context.drawImage(objects_l3[row][column], column * 64, row * 64);
        }
    }
    player.x = 100;
    player.y = 265;
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
    unlockPlayer();
    gamearea.style.display = "block";
    stage.style.display = "none";
}
function loadScene_l3(){
    if(moveLeft && moveRight && moveUp && moveDown){
        //stage.style.display = "none";
        //gamearea.style.display = "block";
        sceneInteract.innerHTML = "";
        sceneContent.innerHTML = "";
        sceneDial.innerHTML = main_l3.dial;
    }else {
        //stage.style.display = "block";
        //gamearea.style.display = "none";
        sceneInteract.innerHTML = "";
        sceneDial.innerHTML = scene_l3[scene_l3_Index].dial;
        switch(scene_l3_Index){
            case 1: // main door to level 2
                gameStarted = false;
                levelNum = 2;
                player.x = 530;
                player.y = 260;
                sceneDial.innerHTML = "";
                setTimeout(start_l2, 500);
                break;
            case 2: //desk
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                gameStarted = false;
                context.drawImage(desk_l3.map, 0, 0);
                context.font = "20px Impact";
                context.fillStyle = "black";
                context.textAlign = "center";
                context.fillText("Use mouse to navigate!", canvas.width/2, canvas.height/2 - 20);
                break;
        }
    }
}
function checkCollision_l3(e){
    if (e === 37){
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== floorcrack &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    lockPlayer();
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 39){
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== floorcrack &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    lockPlayer();
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 40){
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== floorcrack &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    lockPlayer();
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 38){
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== floorcrack &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    lockPlayer();
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
}
function getScene_l3(locRow, locColumn) {
    if (locRow === 4 && locColumn === 4 )
        return 2; //desk
    if (locRow === 4 && locColumn === 0)
        return 1; //door to level 2
    if (locRow === 4 && locColumn === 5)
        return 3; //floor_l3
    if (locRow === 4 && locColumn === 6)
        return 4; //floor_l3
    if (locRow === 5 && locColumn === 4)
        return 5; //floor_l3
    if (locRow === 5 && locColumn === 5)
        return 6; //floor_l3
    if (locRow === 5 && locColumn === 6)
        return 7; //floor_l3
}
function drawMap_l3() {
    context.drawImage(desk_l3.map, 0, 0);
}

function openDoor_l3() {
    counter_l3 ++;
    clearInterval(timerIntv);
    if(counter_l3 == 1){
        gamearea.style.background = "url('images/closed_door_l3.png')";
    }
    if(counter_l3 == 2){
        gamearea.style.background = "url('images/open_door_l3.png')";
    }
    if(counter_l3 == 3){
        clearInterval(door_l3_Intv);
        sceneDial.style.background = "black";
        gamearea.style.background = "black";
        context.font = "30px Impact";
        context.fillStyle = "#0099CC";
        context.textAlign = "center";
        context.fillText("Do you think that you will be safe in the Bunker?", canvas.width/2, canvas.height/2);
        context.font = "20px Arial";
        context.fillText("Get out of here!!!", canvas.width/2, canvas.height/2 + 50);
        context.fillText("Press any key to play again...", canvas.width/2, canvas.height/2 + 80);
        gameEnd = true;
        timerDisplay.style.display = "none";
        messageBar.style.display = "none";
    }
}