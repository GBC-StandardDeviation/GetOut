//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const totalImages = 9;
var loadImages = 0;
var column;
var row;
var moveSpeed = 7;
var moveLeft = true;
var moveRight = true;
var moveUp = true;
var moveDown = true;

var floor = new Image();
floor.src = "images/wood_floor.png";
floor.onload = imageLoader;
var dresser = new Image();
dresser.src = "images/dresser.png";
dresser.onload = imageLoader;
var s_table = new Image();
s_table.src = "images/small_table.png";
s_table.onload = imageLoader;
var b_table = new Image();
b_table.src = "images/b_table.png";
b_table.onload = imageLoader;
var s_window = new Image();
s_window.src = "images/window.png";
s_window.onload = imageLoader;
var cuboard = new Image();
cuboard.src = "images/cuboard.png";
cuboard.onload = imageLoader;
var s_shelf = new Image();
s_shelf.src = "images/shelf.png";
s_shelf.onload = imageLoader;
var s_bed = new Image();
s_bed.src = "images/bed.png";
s_bed.onload = imageLoader;
var l_rug = new Image();
l_rug.src = "images/rug.png";
l_rug.onload = imageLoader;

//intializes the player
var player = {
    x: 200,
    y: 200,
    image: new Image(),
    size: 32,
    direction: 0,
    animationframe: 0
}
player.image.src = "images/player.png";
/*
function displaySafeBackground(){

    for(var column = 0; column <= 9; column++){
        for(var row = 0; row <= 9; row++){
            context.drawImage(ground[row][column], column * 64, row * 64);
            context.drawImage(objects[row][column], column * 64, row * 64);
        }
    }
}
*/
function displaySafeBackground(){

    for(column = 0; column <= 9; column++){
        for(row = 0; row <= 9; row++){
            context.drawImage(ground[row][column], column * 64, row * 64);
            context.drawImage(objects[row][column], column * 64, row * 64);
        }
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

//e is an argument implanted by javascript whenever they are dealing with an event
function movePlayer(e){
    //53 x 55 player
    //var moveSpeed = 7;

    if(e.keyCode === 37){
        //left arrow
        //if player is facing left
        collision(37);
        if (moveLeft){
            if(player.direction===1){
                //if player was already going to the left
                setPlayerAnimationFrame();
            }else{
                //set player to the first animation frame going to the left
                player.animationframe = 0;
            }
            if(player.x > 15)
                player.x -= moveSpeed;
            player.direction = 1;
        }
    }
    if(e.keyCode === 39){
        //right arrow
        collision(39);
        if (moveRight){
            if(player.direction==2){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.x < 570)
                player.x += moveSpeed;
            player.direction = 2;
        }
    }
    if(e.keyCode === 38){
        //up arrow
        collision(38);
        if (moveUp){
            if(player.direction==3){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y > 15)
                player.y -= moveSpeed;
            player.direction = 3;
        }
    }
    if(e.keyCode === 40){
        //down arrow
        collision(40);
        if (moveDown){
            if(player.direction==0){
                setPlayerAnimationFrame();
            }
            else{
                player.animationframe = 0;
            }
            if(player.y < 570)
                player.y += moveSpeed;
            player.direction = 0;
        }
    }
    displaySafeBackground();
    context.drawImage(player.image,//specifies the image to use
        player.animationframe*player.size,//the x coordinate where to start clipping
        player.direction*player.size,//the y coordinate where to start clipping
        32,//the width of the clipped image
        32,//the height of the clipped image
        player.x,//the x coordinate of where to place the image on the canvas
        player.y,//the y coordinate of where to place the image on the canvas
        player.size,//the width of the image to use
        player.size);//the height of the image to use
}

var ground = {};
var objects = {};

//function to monitor when all the images have been loaded and then draws the background
function imageLoader(){
    console.log("Running: imageLoader()");
    loadImages++;

    //once all images loaded, draw images.
    if(loadImages === totalImages){
        ground =
            [[floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor]];
        //object placement
        objects =
            [[floor, floor, floor, dresser, floor, floor, s_window, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, s_bed],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, s_table, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, l_rug, b_table, floor, floor, floor],
                [cuboard, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, floor, floor, floor, floor, floor],
                [floor, floor, floor, floor, floor, s_shelf, floor, floor, floor, floor]];


        //world map loop
        //tile size 64 x 64
        displaySafeBackground();


        //this listens for a key press only after all images have been loaded
        window.addEventListener('keydown', movePlayer, false);

        context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);


    }
}
//function to detect collision whenever player makes a move using arrow keys
function collision(e){
    if (e === 37){
        moveRight = true;
        moveUp = true;
        moveDown = true;
        for (row = 0; row < 10; row++){
            for (column = 0; column < 10; column++){
                if (objects[row][column] !== floor &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.x >= (column + 1) * 64 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    //alert("You reached an object" + row + " " + column);
                    moveLeft = false;
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
                if (objects[row][column] !== floor &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= column * 64 - 32 &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    //alert("You reached an object" + row + " " + column);
                    moveRight = false;
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
                if (objects[row][column] !== floor &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= row * 64 - moveSpeed - 32 &&
                    player.y <= row * 64 - 32
                ){
                    //alert("You reached an object" + row + " " + column);
                    moveDown = false;
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
                if (objects[row][column] !== floor &&
                    player.x >= column * 64 - moveSpeed - 32 &&
                    player.x <= (column + 1) * 64 + moveSpeed &&
                    player.y >= (row + 1)* 64 &&
                    player.y <= (row + 1) * 64 + moveSpeed
                ){
                    //alert("You reached an object" + row + " " + column);
                    moveUp = false;
                }
            }
        }
    }
}
