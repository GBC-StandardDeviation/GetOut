var main_l2 = {
    img: "url('images/wall.png')",
    dial: "You are in the midst of the room",
    invtory: "There is nothing strange!"
};
var mainDoor_l2 = {
    img: "url('images/window.png')",
    dial: "You reached the main door" + "<br>" + "You need a key to open",
    //dial: "You reached the main door" + "<br>" + "Please enter 6 digit number to open",
    //misteryItem: 515098
};
var chest_l2 = {
    //img: "url('images/b_table.png')",
    img: new Image(),
    dial: "You reached Tania's workstation",
    misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    isActive: false,//for Enter key press
    misteryItemMatched: false
};
chest_l2.img.src = "images/workstation.png";
var chest_l2_1 = {
    //img: "url('images/b_table.png')",
    img: new Image(),
    dial: "You reached a chest",
    //misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    //isActive: false,//for Enter key press
    //misteryItemMatched: false
};
chest_l2_1.img.src = "images/workstation.png";
var chest_l2_2 = {
    //img: "url('images/b_table.png')",
    img: new Image(),
    dial: "You reached a chest",
    //misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    //isActive: false,//for Enter key press
    //misteryItemMatched: false
};
chest_l2_2.img.src = "images/workstation.png";
var chest_l2_3 = {
    //img: "url('images/b_table.png')",
    img: new Image(),
    dial: "You reached a chest",
    //misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    //isActive: false,//for Enter key press
    //misteryItemMatched: false
};
chest_l2_3.img.src = "images/workstation.png";
var chest_l2_4 = {
    //img: "url('images/b_table.png')",
    img: new Image(),
    dial: "You reached a chest",
    //misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    //isActive: false,//for Enter key press
    //misteryItemMatched: false
};
chest_l2_4.img.src = "images/workstation.png";

//temporarily used
var keyItem_l2 = "Key";
var locker_l2 = {
    img: "url('images/cuboard.png')",
    dial: "You reached a locker" + "<br>" + "Please enter 4 digit number to open",
    invtory: ["To Headmaster of University College London", keyItem_l1],
    misteryItem: 2012
};
//temporarily used
var bookShelf_l2 = {
    img: "url('images/shelf.png')",
    dial: "You reached a bookShelf",
    invtory: ["Math Book", "History Book", "Geography Book", "Science Book"]
};
//var chestForm_l2 = document.createElement("form");
var chestInput_l2 = document.createElement("input");
var chestButton_l2 = document.createElement("button");

var scene_l2_Index;
var scene_l2 = [main_l2, mainDoor_l2, chest_l2, locker_l2, bookShelf_l2, chest_l2_1, chest_l2_2, chest_l2_3, chest_l2_4];
var chest_l2_ItemIndex;
var screen_l2 = new Image();
screen_l2.src = "images/screen.png";
var ceo = new Image();
ceo.src = "images/ceo.jpg";
var chest_l2_talk = "Hello. I'm Tania.! How do you think about me?";
var counter_l2 = 0;
objects_l2 =
    [[wall, wall, wall, wall, wall, wall, s_window, wall, wall, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, chest_l2_4.img, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, chest_l2_3.img, chest_l2_2.img, floor, floor, chest_l2.img, chest_l2_1.img, floor, wall],
        [wall, cuboard, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, s_shelf, floor, floor, floor, wall],
        [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall]];

function loadScene_l2() {
    if(moveLeft && moveRight && moveUp && moveDown){
        sceneImage.style.background = main_l2.img;
        sceneDial.innerHTML = main_l2.dial;
        sceneInteract.innerHTML = main_l2.invtory;
        start_l2();
    }else {
        sceneImage.style.background = scene_l2[scene_l2_Index].img;
        sceneDial.innerHTML = scene_l2[scene_l2_Index].dial;
        switch(scene_l2_Index){
            case 1:
                sceneInteract.innerHTML = "";
                sceneInteract.appendChild(mainDoorInvtoryButton_l1);
                mainDoorInvtoryButton_l1.innerHTML = "Go to Inventory";
                mainDoorInvtoryButton_l1.style.background = "orange";
                mainDoorInvtoryButton_l1.addEventListener("click", mainDoorInvtoryButtonHandler_l1, false);
                break;
            case 2:
                //chest_l2_awake = setInterval(wakeUp, 500);
                chest_l2.isActive = true;
                wakeUp_l2();
                //context.clearRect(0, 0 , canvas.width, canvas.height/4);
                //context.clearRect(0, canvas.height/4, canvas.width, canvas.height/4);
                //context.drawImage(ceo, 0, 0);
                context.font = "20px Impact";
                context.fillStyle = "#0099CC";
                context.textAlign = "center";
                //context.fillText("GET OUT", canvas.width/2, canvas.height/3);
                sceneInteract.innerHTML = "";
                chest_l2_ItemIndex = Math.floor(Math.random()*4);
                sceneInteract.appendChild(chestInput_l2);
                sceneInteract.appendChild(chestButton_l2);
                chestInput_l2.placeholder = "Can you guess what I want!";
                chestInput_l2.focus();
                chestButton_l2.innerHTML = "Enter";
                chestButton_l2.style.background = "orange";
                chestButton_l2.addEventListener("click", chestButtonHandler_l2, false);
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
                break;
        }
    }
}

function start_l2(){
    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 9; row++){
            //context.drawImage(groundL1[row][column], column * 64, row * 64);
            context.drawImage(objects_l2[row][column], column * 64, row * 64);
        }
    }
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
    moveLeft = true;
    moveRight = true;
    moveUp = true;
    moveDown = true;
    chest_l2.isActive = false;
    counter_l2 = 0;
    ceo.src = "images/ceo.jpg";
    chest_l2_talk = "Hello. I'm Tania.! How do you think about me?";
    timerDisplay.style.color = "white";
}
function chestButtonHandler_l2() {
    sceneDial.innerHTML = chestInput_l2.value;
    counter_l2++;
    wakeUp_l2();
}
function wakeUp_l2() {
    if(counter_l2 <= 2 && counter_l2 != 0){ //have 2 chances to get 30 second bonus for a total of 60 second bonus
        if (chestInput_l2.value.indexOf(chest_l2.misteryItem[chest_l2_ItemIndex]) != -1 && chestInput_l2.value.length <= 10){
            chest_l2.misteryItemMatched = true;
            totalTime += 30;
            //ceo.src = "images/arrowUp.png";
            chest_l2_talk = "You are a good guy!";
            timerDisplay.style.color = "orangered";
        } else {
            ceo.src = "images/ceo.jpg";
            chest_l2_talk = "Hum, interesting...";

        }
    }else if(counter_l2 > 2) {
        ceo.src = "images/ceo.jpg";
        chest_l2_talk = "Bye bye!";
    }
    chestInput_l2.value = "";
    chestInput_l2.focus();
    setTimeout(renderConver, 300);
}
function renderConver() {
    context.font = "20px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.clearRect(0, 0 , canvas.width, canvas.height/4);
    context.clearRect(0, canvas.height/4, canvas.width, canvas.height/4);
    context.drawImage(screen_l2, 64, 0, canvas.width - 64*2, canvas.height/2);
    context.drawImage(ceo, 270, 60);
    context.fillText(chest_l2_talk, canvas.width/2, canvas.height/3.5);
}
function checkCollision_l2(e){
    if (e === 37){
        moveRight = true;
        moveUp = true;
        moveDown = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveLeft = false;
                    scene_l2_Index = getScene_l2(row, column);
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
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveRight = false;
                    scene_l2_Index = getScene_l2(row, column);
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
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    moveDown = false;
                    scene_l2_Index = getScene_l2(row, column);
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
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    //objects_l1[row][column] !== l_rug &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    moveUp = false;
                    scene_l2_Index = getScene_l2(row, column);
                }
            }
        }
    }
}
function getScene_l2(locRow, locColumn) {
    if (locRow === 0 && locColumn === 6)
        return 1; //main door
    if (locRow === 6 && locColumn === 6 )
        return 2; //chest
    if (locRow === 7 && locColumn === 1 )
        return 3; //locker
    if (locRow === 8 && locColumn === 5 )
        return 4; //book shelf
    if (locRow === 6 && locColumn === 7)
        return 5; //chest 1
    if (locRow === 6 && locColumn === 3)
        return 6; // chest 2
    if (locRow === 6 && locColumn === 2)
    return 7; //chest 3
    if (locRow === 4 && locColumn === 6)
        return 8; // chest 4
}
