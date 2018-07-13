var floor = new Image();
floor.src = "images/tile.png";
var dresser = new Image();
dresser.src = "images/dresser.png";
var s_table = new Image();
s_table.src = "images/small_table.png";
var b_table = new Image();
b_table.src = "images/b_table.png";
var s_window = new Image();
s_window.src = "images/window.png";
var cuboard = new Image();
cuboard.src = "images/cuboard.png";
var s_shelf = new Image();
s_shelf.src = "images/shelf.png";
var s_bed = new Image();
s_bed.src = "images/bed.png";
//var l_rug = new Image();
//l_rug.src = "images/rug.png";
var wall = new Image();
wall.src = "images/wall.png";


//object placement
objects_l1 =
    [[wall, wall, wall, wall, wall, wall, s_window, wall, wall, wall],
        [wall, floor, floor, dresser, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, s_bed, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, s_table, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, b_table, floor, floor, wall],
        [wall, cuboard, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, s_shelf, floor, floor, floor, wall],
        [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall]];

var main_l1 = {
    img: "url('images/wall.png')",
    dial: "You are in the midst of the room",
    invtory: "There is nothing strange!"
};
var mainDoor_l1 = {
    img: "url('images/window.png')",
    dial: "You reached the main door" + "<br>" + "You need a key to open",
    //dial: "You reached the main door" + "<br>" + "Please enter 6 digit number to open",
    //misteryItem: 515098
};
var chest_l1 = {
    img: "url('images/b_table.png')",
    dial: "You reached a chest"
    // + "<br>" + "There is a bat on the chest"
};
var keyItem_l1 = "Key";
var locker_l1 = {
    img: "url('images/cuboard.png')",
    dial: "You reached a locker" + "<br>" + "Please enter 4 digit number to open",
    invtory: ["To Headmaster of University College London", keyItem_l1],
    misteryItem: 2012
};
var bookShelf_l1 = {
    img: "url('images/shelf.png')",
    dial: "You reached a bookShelf",
    invtory: ["Math Book", "History Book", "Geography Book", "Science Book"]
};
var dresser_l1 = {
    img: "url('images/dresser.png')",
    dial: "You reached a Dresser"
};
var smallTable_l1 = {
    img: "url('images/small_table.png')",
    dial: "You reached a small table"
};
var rug_l1 = {
    img: "url('images/rug.png')",
    dial: "You reached a rug"
};
var bed_l1 = {
    img: "url('images/bed.png')",
    dial: "You reached a bed"
};

var mainDoorInvtoryButton_l1 = document.createElement("button");
var keyInvtoryButton_l1 = document.createElement("button");

var lockerInput_l1 = document.createElement("input");
var lockerButton_l1 = document.createElement("button");
var keyItemButton_l1 = document.createElement("button");

var mathButton_l1 = document.createElement("button");
var historyButton_l1 = document.createElement("button");
var geographyButton_l1 = document.createElement("button");
var scienceButton_l1 = document.createElement("button");

var scene_l1_Index;
var scene_l1 = [main_l1, mainDoor_l1, chest_l1, locker_l1, bookShelf_l1,
    dresser_l1, smallTable_l1, rug_l1, bed_l1];

function start_l1() {
    drawArrow(5,7);
    for(var column = 0; column <= 9; column++) {
        for (var row = 0; row <= 9; row++) {
            context.drawImage(objects_l1[row][column], column * 64, row * 64);
        }
    }
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
}
function loadScene_l1() {
    if(moveLeft && moveRight && moveUp && moveDown){
        sceneImage.style.background = main_l1.img;
        sceneDial.innerHTML = main_l1.dial;
        sceneInteract.innerHTML = main_l1.invtory;
    }else {
        sceneImage.style.background = scene_l1[scene_l1_Index].img;
        sceneDial.innerHTML = scene_l1[scene_l1_Index].dial;
        switch(scene_l1_Index){
            case 1:
                sceneInteract.innerHTML = "";
                sceneInteract.appendChild(mainDoorInvtoryButton_l1);
                mainDoorInvtoryButton_l1.innerHTML = "Go to Inventory";
                mainDoorInvtoryButton_l1.style.background = "orange";
                mainDoorInvtoryButton_l1.addEventListener("click", mainDoorInvtoryButtonHandler_l1, false);
                break;
            case 2:
                sceneInteract.innerHTML = "There is nothing strange!";
                break;
            case 3:
                sceneInteract.innerHTML = "";
                sceneInteract.appendChild(lockerInput_l1);
                sceneInteract.appendChild(lockerButton_l1);
                lockerInput_l1.placeholder = "Enter 4 digit number!";
                lockerInput_l1.focus();
                lockerButton_l1.innerHTML = "Open";
                lockerButton_l1.style.background = "orange";
                lockerButton_l1.addEventListener("click", lockerButtonHandler_l1, false);
                break;
            case 4:
                sceneInteract.innerHTML = "";
                sceneInteract.appendChild(mathButton_l1);
                sceneInteract.appendChild(historyButton_l1);
                sceneInteract.appendChild(geographyButton_l1);
                sceneInteract.appendChild(scienceButton_l1);
                mathButton_l1.innerHTML = bookShelf_l1.invtory[0];
                historyButton_l1.innerHTML = bookShelf_l1.invtory[1];
                geographyButton_l1.innerHTML = bookShelf_l1.invtory[2];
                scienceButton_l1.innerHTML = bookShelf_l1.invtory[3];
                mathButton_l1.style.position = "absolute";
                historyButton_l1.style.position = "absolute";
                geographyButton_l1.style.position = "absolute";
                scienceButton_l1.style.position = "absolute";
                mathButton_l1.style.top = 10 + "px";
                mathButton_l1.style.left = 165 + "px";
                mathButton_l1.style.width = 300 + "px";
                mathButton_l1.style.height = 40 + "px";
                historyButton_l1.style.top = 60 + "px";
                historyButton_l1.style.left = 165 + "px";
                historyButton_l1.style.width = 300 + "px";
                historyButton_l1.style.height = 40 + "px";
                historyButton_l1.style.background = "orange";
                geographyButton_l1.style.top = 110 + "px";
                geographyButton_l1.style.left = 165 + "px";
                geographyButton_l1.style.width = 300 + "px";
                geographyButton_l1.style.height = 40 + "px";
                scienceButton_l1.style.top = 160 + "px";
                scienceButton_l1.style.left = 165 + "px";
                scienceButton_l1.style.width = 300 + "px";
                scienceButton_l1.style.height = 40 + "px";
                mathButton_l1.addEventListener("click", mathButtonHandler_l1, false);
                historyButton_l1.addEventListener("click", historyButtonHandler_l1, false);
                geographyButton_l1.addEventListener("click", geographyButtonHandler_l1, false);
                scienceButton_l1.addEventListener("click", scienceButtonHandler_l1, false);
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                sceneInteract.innerHTML = "There is nothing strange!";
        }
    }
}
function mainDoorInvtoryButtonHandler_l1() {
    moveAudio.play();
    for (i = 0; i < item.length; i++){
        if(item[i] === keyItem_l1){
            sceneInteract.appendChild(keyInvtoryButton_l1);
            keyInvtoryButton_l1.innerHTML = "key";
            keyInvtoryButton_l1.style.background = "orange";
            keyInvtoryButton_l1.addEventListener("click", keyInvtoryButtonHandler_l1, false);
            sceneInteract.removeChild(mainDoorInvtoryButton_l1);
            mainDoorInvtoryButton_l1.removeEventListener("click", mainDoorInvtoryButtonHandler_l1, false);
        }
    }
}
function keyInvtoryButtonHandler_l1() {
    moveAudio.play();
    sceneDial.innerHTML = "The door is opened";
    //levelNum = 2;
    //moveLeft = false;
    //moveRight = false;
    moveUp = true;
    //moveDown = false;
    context.clearRect(0, 0 , canvas.width, canvas.height);
    gamearea.style.background = "black";
    changeLevelScreen();
    setTimeout(start_l2, 3000);
    sceneInteract.removeChild(keyInvtoryButton_l1);
    sceneDial.innerHTML = "You are at Level 2";

}

function lockerButtonHandler_l1() {
    moveAudio.play();
    if (lockerInput_l1.value == locker_l1.misteryItem){
        sceneDial.innerHTML = "The locker is opened" + "<br>" + "There is a letter:" + locker_l1.invtory[0] + "<br>"
        for (i = 0; i < locker_l1.invtory.length; i++){
            if (locker_l1.invtory[i] === keyItem_l1){
                sceneDial.innerHTML += "There is a: " + locker_l1.invtory[1];
                sceneInteract.appendChild(keyItemButton_l1);
                keyItemButton_l1.innerHTML = "Key Item";
                keyItemButton_l1.style.background = "orange";
                keyItemButton_l1.addEventListener("click", keyItemButtonHandler_l1, false);
                sceneInteract.removeChild(lockerInput_l1);
                sceneInteract.removeChild(lockerButton_l1);
                lockerButton_l1.removeEventListener("click", lockerButtonHandler_l1, false);
            }
        }
    }else sceneDial.innerHTML = "Locker is closed";
}
function keyItemButtonHandler_l1() {
    moveAudio.play();
    item.push(locker_l1.invtory.pop());
    sceneDial.innerHTML += "<br>" + "<span>" + "You got a: " + item + "</span>";
    sceneInteract.removeChild(keyItemButton_l1);
    keyItemButton_l1.removeEventListener("click", keyItemButtonHandler_l1, false);
    drawArrow(6,1); //to the main door
}
function mathButtonHandler_l1() {
    bookAudio.play();
    sceneDial.innerHTML = "Just a bunch of equations, is it really useful?";
}
function historyButtonHandler_l1() {
    bookAudio.play();
    sceneDial.innerHTML = "A range of eschatological beliefs that transformative events would occur on 21 December" + "<span>" + "2012" + "</span>" + ". The date was regarded as the end-date of a 5,126-year-long cycle in the Mesoamerican Long Count calendar!";
    drawArrow(1,6); //to the locker
}
function geographyButtonHandler_l1() {
    bookAudio.play();
    sceneDial.innerHTML = "A list of coordinates? Interesting!" + "<br>"
        + "Sofia, Bulgaria" + "42.6983" + "23.3199" + "<br>"
        + "London, UK" + "51.5098" + "-0.118" + "<br>"
        + "Arau, Malaysia" + "6.4297" + "100.269";
}
function scienceButtonHandler_l1() {
    bookAudio.play();
    sceneDial.innerHTML = '"In order to solve this differential equation you look at it until a solution occurs to you." - George Polya';
}
function checkCollision_l1(e){
    if (e === 37){
        moveRight = true;
        moveUp = true;
        moveDown = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l1[row][column] !== floor &&
                    objects_l1[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveLeft = false;
                    scene_l1_Index = getScene_l1(row, column);
                }
            }
        }
    }
    if (e === 39){
        moveLeft = true;
        moveUp = true;
        moveDown = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l1[row][column] !== floor &&
                    objects_l1[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveRight = false;
                    scene_l1_Index = getScene_l1(row, column);
                }
            }
        }
    }
    if (e === 40){
        moveLeft = true;
        moveRight = true;
        moveUp = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l1[row][column] !== floor &&
                    objects_l1[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    moveDown = false;
                    scene_l1_Index = getScene_l1(row, column);
                }
            }
        }
    }
    if (e === 38){
        moveLeft = true;
        moveRight = true;
        moveDown = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l1[row][column] !== floor &&
                    objects_l1[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveUp = false;
                    scene_l1_Index = getScene_l1(row, column);
                }
            }
        }
    }
}

function getScene_l1(locRow, locColumn) {
    if (locRow === 0 && locColumn === 6)
        return 1; //main door
    if (locRow === 6 && locColumn === 6 )
        return 2; //chest
    if (locRow === 7 && locColumn === 1 )
        return 3; //locker
    if (locRow === 8 && locColumn === 5 )
        return 4; //book shelf
    if (locRow === 1 && locColumn === 3)
        return 5; //Dresser
    if (locRow === 4 && locColumn === 4)
        return 6; // small table
    //if (locRow === 6 && locColumn === 4)
        return 7; //rug
    if (locRow === 2 && locColumn === 8)
        return 8; //bed
}
function drawArrow(x, y) {
    var arrowCounter = 0;
    var arrowUp = new Image();
    arrowUp.src = "images/arrowUp.png";
    var arrowDown = new Image();
    arrowDown.src = "images/arrowDown.png";
    //var floor = new Image();
    //floor.src = "images/tile.png";
    arrowIntv = setInterval(function () {
        arrowCounter ++;
        if(arrowCounter <= 10){
            if(arrowCounter%2){
                if(x !== 6)
                    context.drawImage(arrowDown, x*SIZE, y*SIZE);
                else context.drawImage(arrowUp, x*SIZE, y*SIZE);
            }else context.drawImage(floor, x*SIZE, y*SIZE);
            console.log(arrowCounter);
        }else {

            clearInterval(arrowIntv);
        }
    }, 500);
}