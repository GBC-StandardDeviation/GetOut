//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const SIZE = 64;
var item = [];
var column;
var row;
var moveSpeed = 7;
var moveLeft;// = false;
var moveRight;// = false;
var moveUp;// = false;
var moveDown;// = false;

canvas.width = 640;
canvas.height = 640;
var gameStarted = false;
var arrowIntv;
var backgroundAudio = new Audio();
backgroundAudio.src = "sound/ambience_backgroundsound_one.mp3";
var bookAudio = new Audio();
bookAudio.src = "sound/book_flipping.mp3";
var moveAudio = new Audio();
moveAudio.src = "sound/moving_sound_one.mp3";
const totalTime = 60 * 2; //2 minute; equivalent to calling restart function 120 times;
var timeLeft = totalTime;
var minuteCount;
var secondCount;

var gamearea = document.querySelector("#gamearea");
var  stage = document.querySelector("#stage");
var sceneContent = document.querySelector("#sceneContent");
var sceneDial = document.querySelector("#sceneDial");
var sceneInteract = document.querySelector("#sceneInteract");
var levelInput = document.querySelector("#levelInput");
var levelButton = document.querySelector("#levelButton");
var timerDisplay = document.querySelector("#timerDisplay");
var levelNum = 0;
var startCounterIntv;
var count;
var timerIntv;
var inventory = new Image();
inventory.src = "images/box.png";
var gameEnd = false;
var title = new Image();
title.src = "images/Menu/getout.png";
var developBy = new Image();
developBy.src = "images/Menu/createdanddev.png";
var author = new Image();
author.src = "images/Menu/standarddeviation.png";
var introCounter = -1;
var intro = [
    "London, 26th April 2018…",
    "The city is exposed to the toxic...",
    "and high level of radiation...",
    "during the unusual explosion from the Lab...",
    "We are failed to contain the contamination...",
    "and all the evacuation had to be delayed...",
    "In this urgency, all the safe doors in buildings are activated...",
    "For your own safety, find the nearest BUNKER immediately!"
];
var skipIntro = new Image();
skipIntro.src = "images/Menu/skipIntro.png";
var player = {
    x: undefined,
    y: undefined,
    image: new Image(),
    size: 32,
    direction: 0,
    animationframe: 0
}
player.image.src = "images/player.png";

/* wait for player to press enter to start playing */
document.body.addEventListener("keydown", function(event){
    backgroundAudio.play();
    if(event.keyCode == 13 && !gameStarted && introEnd){
        startGame();
    }
    if (event.keyCode == 13 && gameStarted && chest_l2.isActive)
        chestButtonHandler_l2();
    if(gameEnd)
        restart();
});
document.body.addEventListener("keypress", function(event){
    if(gameEnd)
        restart();
});
window.addEventListener('keydown', movePlayer, false);

var introIntv = setTimeout(intro_screen, 1000);
var introEnd = false;

/* intro screen welcoming player (display menu)*/
function intro_screen() {
    if (introCounter < 8 && !introEnd) {
        if(introCounter == -1){
            context.drawImage(developBy, 100, 250);
            context.drawImage(author, 150, 300);
            stage.style.background = "url('images/Menu/runaway.gif')";
        }else {
            stage.style.background = "url('images/Menu/intro" + introCounter + ".jpg')";
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "white";
            context.textAlign = "center";
            context.font = "20px Georgia";
            context.fillText(intro[introCounter], canvas.width / 2, canvas.height / 2 + 50);
            context.drawImage(skipIntro, 270, 450);
        }
        setTimeout(intro_screen, 4000);
        introCounter++;
    } else {
        clearTimeout(introIntv);
        introEnd = true;
        menu();
    }
}
function menu() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(title, 60, 150);
    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "20px Georgia";
    context.fillText("Press Enter To Start...", canvas.width/2, canvas.height/2 + 50);
    //sceneContent.style.background = "url('images/tania.png')";
    stage.style.background = "black";
}
function startGame(){
    context.clearRect(0,0, canvas.width, canvas.height);
    stage.style.background = "darkkhaki";
    count = 0;
    startCounterIntv = setInterval(startCounter, 1000);
    timerIntv = setInterval(displayTimer, 1000);
    timerDisplay.style.display = "block";
    levelInput.style.display = "block";
    levelButton.style.display = "block";
    levelButton.addEventListener("click", levelButtonHandler, false);
    levelNum = 1;
    loop();
}
/* start game loop */
function loop(){
    console.log(levelNum);
    context.clearRect(0, 0 , canvas.width, canvas.height);
    gamearea.style.background = "black";
    if (levelNum == 1){
        player.x = 200;
        player.y = 200;
        setTimeout(start_l1, 1100);
    }else if(levelNum == 2){
        player.x = 100;
        player.y = 265;
        setTimeout(start_l2, 1100);
    }else if(levelNum == 3) {
        player.x = 100;
        player.y = 265;
        setTimeout(start_l3, 1100);
    }else sceneDial.innerHTML = "Enter level number again";
}
function levelButtonHandler() {
    moveAudio.play();
    clearInterval(arrowIntv);
    gameStarted = false;
    moveLeft = false;
    moveRight = false;
    moveUp = false;
    moveDown = false;
    levelNum = levelInput.value;
    loop();
}

function movePlayer(e){
    //53 x 55 player
    if(gameStarted)
    context.clearRect(player.x, player.y,player.size,player.size);
    if(e.keyCode === 37){
        //left arrow
        //if player is facing left
        moveAudio.play();
        if(gameStarted){
            if(levelNum == 1){
                loadScene_l1();
                checkCollision_l1(37);
            }else if(levelNum == 2){
                loadScene_l2();
                checkCollision_l2(37);
            }else if(levelNum == 3){
                loadScene_l3();
                checkCollision_l3(37);
            }
        }

        if (moveLeft && gameStarted){
            if(player.direction===1){
                //if player was already going to the left
                setPlayerAnimationFrame();
            }else{
                //set player to the first animation frame going to the left
                player.animationframe = 0;
            }
            if(player.x > SIZE + moveSpeed){
                player.x -= moveSpeed;
            }
            player.direction = 1;
        }
    }
    if(e.keyCode === 39){
        //right arrow
        moveAudio.play();
        if(gameStarted){
            if(levelNum == 1){
                loadScene_l1();
                checkCollision_l1(39);
            }else if(levelNum == 2){
                loadScene_l2();
                checkCollision_l2(39);
            }else if(levelNum == 3){
                loadScene_l3();
                checkCollision_l3(39);
            }
        }

        if (moveRight && gameStarted){
            if(player.direction==2){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.x < canvas.width - SIZE - moveSpeed - 32){
                player.x += moveSpeed;
            }
            player.direction = 2;
        }
    }
    if(e.keyCode === 38){
        //up arrow
        moveAudio.play();
        if(gameStarted){
            if(levelNum == 1){
                loadScene_l1();
                checkCollision_l1(38);
            }else if(levelNum == 2){
                loadScene_l2();
                checkCollision_l2(38);
            }else if(levelNum == 3){
                loadScene_l3();
                checkCollision_l3(38);
            }
        }

        if (moveUp && gameStarted){
            if(player.direction==3){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y > SIZE + moveSpeed){
                player.y -= moveSpeed;
            }
            player.direction = 3;
        }
    }
    if(e.keyCode === 40){
        //down arrow
        moveAudio.play();
        if(gameStarted){
            if(levelNum == 1){
                loadScene_l1();
                checkCollision_l1(40);
            }else if(levelNum == 2){
                loadScene_l2();
                checkCollision_l2(40);
            }else if(levelNum == 3){
                loadScene_l3();
                checkCollision_l3(40);
            }
        }

        if (moveDown && gameStarted){
            if(player.direction==0){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y < canvas.height - SIZE - moveSpeed - 32){
                player.y += moveSpeed;
            }
            player.direction = 0;
        }
    }
    if(gameStarted){
        context.drawImage(
            player.image,//specifies the image to use
            player.animationframe*player.size,//the x coordinate where to start clipping
            player.direction*player.size,//the y coordinate where to start clipping
            32,//the width of the clipped image
            32,//the height of the clipped image
            player.x,//the x coordinate of where to place the image on the canvas
            player.y,//the y coordinate of where to place the image on the canvas
            player.size,//the width of the image to use
            player.size);//the height of the image to use
    }
}
function setPlayerAnimationFrame(){
    if(player.animationframe < 2){
        //goes to the next animation frame
        player.animationframe += 1;
    }else{
        //goes to the first animation frame
        player.animationframe = 0;
    }
}
function startCounter() {
    if(timeLeft === 0){
        context.clearRect(0, 0, canvas.width, canvas.height);
        end_screen();
        clearInterval(startCounterIntv);
        levelInput.style.display = "none";
        levelButton.style.display = "none";
        sceneContent.style.background = "darkkhaki";
        sceneContent.innerHTML = "";
        sceneDial.innerHTML = "";
        sceneInteract.innerHTML = "";
        gameStarted = true;
        gameEnd = true;
    }
}
function displayTimer() {
    minuteCount = Math.floor(timeLeft/60);
    secondCount = timeLeft % 60;
    timeLeft --;
    timerDisplay.innerHTML = "Time left: " + minuteCount + " minutes " + secondCount + " seconds...";
    if (timeLeft === -1){
        clearInterval(timerIntv);
    }
}
function end_screen(){
    gamearea.style.background = "black";
    context.font = "50px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.fillText("GAME OVER!", canvas.width/2, canvas.height/2);
    context.font = "20px Arial";
    context.fillText("Press any key to restart!", canvas.width/2, canvas.height/2 + 50);
}
function restart() {
    location.reload();
}
gamearea.addEventListener("click", getCoor, false);
function getCoor(e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    //sceneDial.innerHTML = mouseX + " " + mouseY;
    if(levelNum == 3){
        if (mouseX >= 578 && mouseX <=582 && mouseY >=531 && mouseY <= 535){ //Gold Coast, Queensland, Australia
            context.clearRect(0, 0, canvas.width, canvas.height);
            gamearea.style.background = "black";
            door_l3_Intv = setInterval(openDoor_l3, 2000);
        }
    }
    if(levelNum == 0){
        if (mouseX >= 280 && mouseX <=378 && mouseY >=460 && mouseY <= 494){ //skip Intro Button
            introEnd = true;
            menu();
            clearTimeout(introIntv);
        }
    }
}
