<<<<<<< HEAD
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
var scene_l3 = [main_l3, desk_l3, mainDoor_tol2, floor_l3, floor_l3, floor_l3, floor_l3, floor_l3];
var counter_l3 = 0;
var door_l3_Intv;

var objects_l3 =
    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [s_window, floor, floor, floor, desk_l3.img, floor_l3, floor_l3, floor, floor, wall],
        [wall, floor, floor, floor, floor_l3, floor_l3, floor_l3, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [setting, inventory, inventory, inventory, inventory, inventory, inventory, inventory, inventory, setting]];

function start_l3(){
    gameStarted = true;
    gamearea.style.background = "darkkhaki";
    context.clearRect(0, 0 , canvas.width, canvas.height);
    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 9; row++){
            context.drawImage(objects_l3[row][column], column * 64, row * 64);
        }
    }
    player.x = 100;
    player.y = 265;
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
    moveLeft = true;
    moveRight = true;
    moveUp = true;
    moveDown = true;
    sceneContent.style.background = "darkkhaki";
    sceneContent.innerHTML = "";
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
}
function loadScene_l3(){
    if(moveLeft && moveRight && moveUp && moveDown){
        sceneContent.innerHTML = "";
        sceneContent.style.background = "darkkhaki";
        sceneDial.innerHTML = main_l3.dial;
        sceneInteract.innerHTML = main_l3.invtory;
    }else {
        sceneContent.style.background = scene_l3[scene_l3_Index].imgDiv;
        sceneDial.innerHTML = scene_l3[scene_l3_Index].dial;
        switch(scene_l3_Index){
            case 1: //desk
                gameStarted = false;
                moveDown = false;
                moveUp = false;
                moveRight = false;
                moveLeft = false;
                context.clearRect(0, 0, canvas.width, canvas.height);
                gamearea.style.background = "black";
                setTimeout(drawMap_l3, 1100);
                break;
            case 2: // main door to level 2
                gameStarted = false;
                levelNum = 2;
                moveLeft = false;
                moveRight = false;
                moveUp = false;
                moveDown = false;
                context.clearRect(0, 0 , canvas.width, canvas.height);
                gamearea.style.background = "black";
                setTimeout(start_l2, 1100);
                player.x = 530;
                player.y = 260;
                sceneDial.innerHTML = "You are in room C460";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                sceneDial.innerHTML = "There is nothing strange!";
                break;
        }
    }
}
function checkCollision_l3(e){
    if (e === 37){
        if (gameStarted){
            moveRight = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveLeft = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 39){
        if (gameStarted){
            moveLeft = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveRight = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 40){
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveUp = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    moveDown = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 38){
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveUp = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
}
function getScene_l3(locRow, locColumn) {
    if (locRow === 4 && locColumn === 4 )
        return 1; //desk
    if (locRow === 4 && locColumn === 0)
        return 2; //door to level 2
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
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
    clearInterval(timerIntv);
    if(counter_l3 == 1){
        gamearea.style.background = "url('images/closed_door_l3.png')";
    }
    if(counter_l3 == 2){
        gamearea.style.background = "url('images/open_door_l3.png')";
    }
    if(counter_l3 == 3){
        clearInterval(door_l3_Intv);
        stage.style.background = "black";
        sceneContent.style.background = "black";
        //sceneContent.style.background = "url('images/tania.png')";
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
    }
=======
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
var scene_l3 = [main_l3, desk_l3, mainDoor_tol2, floor_l3, floor_l3, floor_l3, floor_l3, floor_l3];
var counter_l3 = 0;
var door_l3_Intv;

var objects_l3 =
    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [s_window, floor, floor, floor, desk_l3.img, floor_l3, floor_l3, floor, floor, wall],
        [wall, floor, floor, floor, floor_l3, floor_l3, floor_l3, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [setting, inventory, inventory, inventory, inventory, inventory, inventory, inventory, inventory, setting]];

function start_l3(){
    gameStarted = true;
    gamearea.style.background = "darkkhaki";
    context.clearRect(0, 0 , canvas.width, canvas.height);
    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 9; row++){
            context.drawImage(objects_l3[row][column], column * 64, row * 64);
        }
    }
    player.x = 100;
    player.y = 265;
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
    moveLeft = true;
    moveRight = true;
    moveUp = true;
    moveDown = true;
    sceneContent.style.background = "darkkhaki";
    sceneContent.innerHTML = "";
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
}
function loadScene_l3(){
    if(moveLeft && moveRight && moveUp && moveDown){
        sceneContent.innerHTML = "";
        sceneContent.style.background = "darkkhaki";
        sceneDial.innerHTML = main_l3.dial;
        sceneInteract.innerHTML = main_l3.invtory;
    }else {
        sceneContent.style.background = scene_l3[scene_l3_Index].imgDiv;
        sceneDial.innerHTML = scene_l3[scene_l3_Index].dial;
        switch(scene_l3_Index){
            case 1: //desk
                gameStarted = false;
                moveDown = false;
                moveUp = false;
                moveRight = false;
                moveLeft = false;
                context.clearRect(0, 0, canvas.width, canvas.height);
                gamearea.style.background = "black";
                setTimeout(drawMap_l3, 1100);
                break;
            case 2: // main door to level 2
                gameStarted = false;
                levelNum = 2;
                moveLeft = false;
                moveRight = false;
                moveUp = false;
                moveDown = false;
                context.clearRect(0, 0 , canvas.width, canvas.height);
                gamearea.style.background = "black";
                setTimeout(start_l2, 1100);
                player.x = 530;
                player.y = 260;
                sceneDial.innerHTML = "You are in room C460";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                sceneDial.innerHTML = "There is nothing strange!";
                break;
        }
    }
}
function checkCollision_l3(e){
    if (e === 37){
        if (gameStarted){
            moveRight = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveLeft = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 39){
        if (gameStarted){
            moveLeft = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveRight = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 40){
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveUp = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    moveDown = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
    if (e === 38){
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l3[row][column] !== floor &&
                    objects_l3[row][column] !== wall &&
                    objects_l3[row][column] !== inventory &&
                    objects_l1[row][column] !== setting &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveUp = false;
                    scene_l3_Index = getScene_l3(row, column);
                }
            }
        }
    }
}
function getScene_l3(locRow, locColumn) {
    if (locRow === 4 && locColumn === 4 )
        return 1; //desk
    if (locRow === 4 && locColumn === 0)
        return 2; //door to level 2
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
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
    clearInterval(timerIntv);
    if(counter_l3 == 1){
        gamearea.style.background = "url('images/closed_door_l3.png')";
    }
    if(counter_l3 == 2){
        gamearea.style.background = "url('images/open_door_l3.png')";
    }
    if(counter_l3 == 3){
        clearInterval(door_l3_Intv);
        stage.style.background = "black";
        sceneContent.style.background = "black";
        //sceneContent.style.background = "url('images/tania.png')";
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
    }
>>>>>>> 5303871feff029dc852f268701612e5c5e480f8c
}