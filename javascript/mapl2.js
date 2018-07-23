var main_l2 = {
    //imgDiv: "url('images/screen.png')",
    dial: "You are in the midst of the room",
    invtory: "There is nothing strange!"
};
var mainDoor_l2 = {
    imgDiv: "url('images/tile-trans.png')",
    dial: "To the meeting room!",
};
var chest_l2 = { //Tania
    img: new Image(), //for drawing object on canvas
    imgDiv: "url('images/screen.png')",
    dial: "Hi, I'm Tania...I'm so happy today!",
    misteryItem: ["a", "b", "c", "d"],//need to add many more characters since player has 2 chances to input up to 10 characters
    isActive: false,//for Enter key press
    misteryItemMatched: false
};
chest_l2.img.src = "images/workstation.png";
var chest_l2_1 = { //Tom
    img: new Image(),
    imgDiv: "url('images/screen.png')",
    dial: "Don't bother me!"
};
chest_l2_1.img.src = "images/workstation.png";
var chest_l2_2 = { //David
    img: new Image(),
    imgDiv: "url('images/screen.png')",
    dial: "I'm leaving to Chicago tomorrow!",
};
chest_l2_2.img.src = "images/workstation.png";
var chest_l2_3 = { //Lina
    img: new Image(),
    imgDiv: "url('images/screen.png')",
    dial: "Gold coast is a safe place.",
};
chest_l2_3.img.src = "images/workstation.png";
var chest_l2_4 = { //Jenifer
    img: new Image(),
    imgDiv: "url('images/screen.png')",
    dial: "Hic hic...",
};
chest_l2_4.img.src = "images/workstation.png";
var mainDoor_tol1 = {
    dial: "You cannot come back!"
};
var chestImage_l2 = document.createElement("div");
var chestInput_l2 = document.createElement("input");
var chestButton_l2 = document.createElement("button");

var scene_l2_Index;
var scene_l2 = [main_l2, mainDoor_l2, chest_l2, chest_l2_1, chest_l2_2, chest_l2_3, chest_l2_4, mainDoor_tol1];
var chest_l2_ItemIndex;

var player_l2_talk;
var player_l2_talkInventory = [];
var chest_l2_talk; //Tania's talk
var counter_l2 = 2; //the max number of times player enters text to chat with Tania
var alreadySaid = false;
var objects_l2 =
    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, chest_l2_4.img, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [s_window, floor, floor, floor, floor, floor, floor, floor, floor, s_window],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, chest_l2_3.img, floor, chest_l2_2.img, floor, chest_l2.img, floor, chest_l2_1.img, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, inventory, inventory, inventory, inventory, inventory, inventory, inventory, inventory, wall]];

function start_l2(){
    gameStarted = true;
    gamearea.style.background = "saddlebrown";
    context.clearRect(0, 0 , canvas.width, canvas.height);
    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 9; row++){
            context.drawImage(objects_l2[row][column], column * 64, row * 64);
        }
    }
    //player.x = 100;
    //player.y = 265;
    context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);
    moveLeft = true;
    moveRight = true;
    moveUp = true;
    moveDown = true;
    sceneContent.style.background = "saddlebrown";
    sceneContent.innerHTML = "";
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
}

function loadScene_l2() {
    if(moveLeft && moveRight && moveUp && moveDown){
        sceneContent.innerHTML = "";
        sceneContent.style.background = "saddlebrown";
        sceneDial.innerHTML = main_l2.dial;
        sceneInteract.innerHTML = main_l2.invtory;
        chest_l2.isActive = false;
        counter_l2 = 2;
        alreadySaid = false;
        timerDisplay.style.color = "white";
    }else {
        sceneDial.innerHTML = scene_l2[scene_l2_Index].dial;
        switch(scene_l2_Index){
            case 1: //main door to level 3
                gameStarted = false;
                levelNum = 3;
                moveLeft = false;
                moveRight = false;
                moveUp = false;
                moveDown = false;
                gamearea.style.background = "black";
                context.clearRect(0, 0 , canvas.width, canvas.height);
                setTimeout(start_l3, 1100);
                sceneDial.innerHTML = "You are in the meeting room";
                break;
            case 2: //Tania's workstation
                chest_l2.isActive = true;
                sceneDial.style.color = "saddlebrown";
                sceneContent.style.background = scene_l2[scene_l2_Index].imgDiv;
                sceneDial.innerHTML = scene_l2[scene_l2_Index].dial;
                sceneInteract.innerHTML = "";
                chest_l2_ItemIndex = Math.floor(Math.random()*4);
                sceneContent.appendChild(chestImage_l2);
                chestImage_l2.style.background = "url('images/ceo.png')";
                chestImage_l2.style.position = "absolute";
                chestImage_l2.style.width = 150 + "px";
                chestImage_l2.style.height = 150 + "px";
                chestImage_l2.style.top = 50 + "px";
                chestImage_l2.style.left =  220 + "px";
                sceneInteract.innerHTML = "Enter text below to chat with her";
                sceneInteract.appendChild(chestInput_l2);
                sceneInteract.appendChild(chestButton_l2);
                chestInput_l2.style.position = "absolute";
                chestInput_l2.style.top = 100 + "px";
                chestInput_l2.style.left = 150 + "px";
                chestButton_l2.style.position = "absolute";
                chestButton_l2.style.top = 100 + "px";
                chestButton_l2.style.left = 330 + "px";
                chestInput_l2.placeholder = "Can you guess what I want!";
                chestInput_l2.focus();
                chestButton_l2.innerHTML = "Press Enter";
                chestButton_l2.style.background = "orange";
                chestButton_l2.addEventListener("click", chestButtonHandler_l2, false);
                break;
            case 3: // chest 1 - Tom's workstation
            case 4: // chest 2 - David's workstation
            case 5: // chest 3 - Lina's workstation
            case 6: // chest 4 - Jenifer's workstation
            case 7: // main door to level 1
                //sceneInteract.innerHTML = "There is nothing strange!";
                break;
        }
    }
}

function chestButtonHandler_l2() {
    player_l2_talk = chestInput_l2.value;
    sceneDial.innerHTML = "You: " + player_l2_talk;
    counter_l2 --;
    alreadySaid = false;
    wakeUp_l2();
}

function wakeUp_l2() {
    console.log(player_l2_talkInventory);
    if(player_l2_talkInventory.length != 0){
        for(i = 0; i <player_l2_talkInventory.length; i++){
            if(player_l2_talk == player_l2_talkInventory[i]) {
                alreadySaid = true;
            }
        }
    }
    if (player_l2_talkInventory.length == 0 || !alreadySaid)
        player_l2_talkInventory.push(player_l2_talk);

    if(counter_l2 <=1 && counter_l2 >= 0){ //player has 2 chances to get 30 second bonus for a total of 60 second bonus
        if (player_l2_talk.length > 10){
            chest_l2_talk = "Sorry, but you talked too much";
        } else if(alreadySaid){
            chest_l2_talk = "You've already said that to me!";

        }else if(player_l2_talk.indexOf(chest_l2.misteryItem[chest_l2_ItemIndex]) == -1)
            chest_l2_talk = "Hum, interesting...but I don't like it!";
        else {
            if(timeLeft < totalTime - 30)
                timeLeft += 30;
            else
                timeLeft += (totalTime - timeLeft);
            chest_l2_talk = "You've got more time!";
            timerDisplay.style.color = "orangered";
        }
    }else chest_l2_talk = "Bye bye!";

    sceneDial.innerHTML += "<br>" + "Tania: " + chest_l2_talk;
    chestInput_l2.value = "";
    chestInput_l2.focus();
}

function checkCollision_l2(e){
    if (e === 37){
        if (gameStarted){
            moveRight = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    objects_l2[row][column] !== inventory &&
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
        if (gameStarted){
            moveLeft = true;
            moveUp = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    objects_l2[row][column] !== inventory &&
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
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveUp = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    objects_l2[row][column] !== inventory &&
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
        if(gameStarted){
            moveLeft = true;
            moveRight = true;
            moveDown = true;
        }
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects_l2[row][column] !== floor &&
                    objects_l2[row][column] !== wall &&
                    objects_l2[row][column] !== inventory &&
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
    if (locRow === 4 && locColumn === 9)
        return 1; //main door to level 3 - the meeting room
    if (locRow === 6 && locColumn === 6 )
        return 2; //Tania's workstation
    if (locRow === 6 && locColumn === 8)
        return 3; //chest 1 - Tom's workstation
    if (locRow === 6 && locColumn === 4)
        return 4; // chest 2 - David's workstation
    if (locRow === 6 && locColumn === 2)
        return 5; //chest 3 - Lina's workstation
    if (locRow === 2 && locColumn === 1)
        return 6; // chest 4 - Jenifer's workstation
    if (locRow === 4 && locColumn === 0)
        return 7; // main door to level 1
}
