//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const totalImages = 10;
const SIZE = 64;
var item = [];
var loadImages = 0;
var column;
var row;
var moveCounter = 2;
var moveSpeed = 7;
var moveLeft = true;
var moveRight = true;
var moveUp = true;
var moveDown = true;

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
var totalTime;
var minuteCount;
var secondCount;

var gamearea = document.querySelector("#gamearea");
var sceneImage = document.querySelector("#sceneImage");
var sceneDial = document.querySelector("#sceneDial");
var sceneInteract = document.querySelector("#sceneInteract");
var levelInput = document.querySelector("#levelInput");
var levelButton = document.querySelector("#levelButton");
var timerDisplay = document.querySelector("#timerDisplay");
var levelNum = 1;
var startCounterIntv;
var count;
var timerIntv;

var player = {
    x: 200,
    y: 200,
    image: new Image(),
    size: 32,
    direction: 0,
    animationframe: 0
}
player.image.src = "images/player.png";

/* wait for player to press enter to start playing */
document.body.addEventListener("keydown", function(event){
    backgroundAudio.play();
    if(event.keyCode == 13 && !gameStarted){
        startGame();
    }
    if (event.keyCode == 13 && gameStarted && chest_l2.isActive)
        chestButtonHandler_l2();
});
window.addEventListener('keydown', movePlayer, false);

intro_screen();

/* intro screen welcoming player (display menu)*/
function intro_screen(){
    context.font = "50px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.fillText("GET OUT", canvas.width/2, canvas.height/2);

    context.font = "20px Arial";
    context.fillText("Press Enter To Start ... if you dare", canvas.width/2, canvas.height/2 + 50);
}



function startGame(){
    gameStarted = true;
    count = 0;
    //startCounterIntv = setInterval(restart, 1000);
    timerIntv = setInterval(displayTimer, 1000);
    totalTime = 60 * 1/2; //1/2 minute; equivalent to calling restart function 30 times
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
    if (levelNum == 1){
        start_l1();
        loadScene_l1();
    }else if(levelNum == 2){
        changeLevelScreen();
        setTimeout(start_l2, 3000);
    }else sceneDial.innerHTML = "Enter level number again";
}
function levelButtonHandler() {
    moveAudio.play();
    clearInterval(arrowIntv);
    levelNum = levelInput.value;
    loop();
}

function movePlayer(e){
    //53 x 55 player
    if(e.keyCode === 37){
        //left arrow
        //if player is facing left
        moveAudio.play();
        if(levelNum == 1){
            loadScene_l1();
            checkCollision_l1(37);
        }else if(levelNum == 2){
            loadScene_l2();
            checkCollision_l2(37);
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
                context.drawImage(floor, player.x, player.y,player.size,player.size);
                player.x -= moveSpeed;
            }
            player.direction = 1;
        }
    }
    if(e.keyCode === 39){
        //right arrow
        moveAudio.play();
        if(levelNum == 1){
            loadScene_l1();
            checkCollision_l1(39);
        }else if(levelNum == 2){
            loadScene_l2();
            checkCollision_l2(39);
        }
        if (moveRight && gameStarted){
            if(player.direction==2){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.x < canvas.width - SIZE - moveSpeed - 32){
                context.drawImage(floor, player.x, player.y,player.size,player.size);
                player.x += moveSpeed;
            }
            player.direction = 2;
        }
    }
    if(e.keyCode === 38){
        //up arrow
        moveAudio.play();
        if(levelNum == 1){
            loadScene_l1();
            checkCollision_l1(38);
        }else if(levelNum == 2){
            loadScene_l2();
            checkCollision_l2(38);
        }
        if (moveUp && gameStarted){
            if(player.direction==3){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y > SIZE + moveSpeed){
                context.drawImage(floor, player.x, player.y,player.size,player.size);
                player.y -= moveSpeed;
            }

            player.direction = 3;
        }
    }
    if(e.keyCode === 40){
        //down arrow
        moveAudio.play();
        if(levelNum == 1){
            loadScene_l1();
            checkCollision_l1(40);
        }else if(levelNum == 2){
            loadScene_l2();
            checkCollision_l2(40);
        }
        if (moveDown && gameStarted){
            if(player.direction==0){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y < canvas.height - SIZE - moveSpeed - 32){
                context.drawImage(floor, player.x, player.y,player.size,player.size);
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
//function to restart Game after a period of time
function restart() {
    //count ++;
    //if(count === 31){ //restart Game at the 31st second
    if(totalTime === 0){
        context.clearRect(0, 0, canvas.width, canvas.height);
        end_screen();
        clearInterval(startCounterIntv);
        gameStarted = false;
        levelInput.style.display = "none";
        levelButton.style.display = "none";
    }
}
function displayTimer() {
    minuteCount = Math.floor(totalTime/60);
    secondCount = totalTime % 60;
    totalTime --;
    timerDisplay.innerHTML = "Time left: " + minuteCount + " minutes " + secondCount + " seconds...";
    if (totalTime === -1){
        clearInterval(timerIntv);
    }
}
function end_screen(){
    context.font = "50px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.fillText("GAME OVER...HAHAHA...", canvas.width/2, canvas.height/2);
    context.font = "20px Arial";
    context.fillText("Press Enter to restart!", canvas.width/2, canvas.height/2 + 50);
}
function changeLevelScreen(){
    moveLeft = false;
    moveRight = false;
    moveUp = false;
    moveDown = false;
    gamearea.style.background = "black";
    context.clearRect(0, 0 , canvas.width, canvas.height);
    context.font = "50px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.fillText("GET OUT", canvas.width/2, canvas.height/2);
    context.font = "20px Arial";
    context.fillText("How dare you...next room awaits you!", canvas.width/2, canvas.height/2 + 50);
}

