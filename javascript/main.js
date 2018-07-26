//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const totalImages = 10;
var loadImages = 0;

var floor = new Image();
floor.src = "images/wood_floor.png";
floor.onload = imageLoader();
var dresser = new Image();
dresser.src = "images/dresser.png";
dresser.onload = imageLoader();
var s_table = new Image();
s_table.src = "images/small_table.png";
s_table.onload = imageLoader();
var b_table = new Image();
b_table.src = "images/b_table.png";
b_table.onload = imageLoader();
var s_window = new Image();
s_window.src = "images/window.png";
s_window.onload = imageLoader();
var cuboard = new Image();
cuboard.src = "images/cuboard.png";
cuboard.onload = imageLoader();
var s_shelf = new Image();
s_shelf.src = "images/shelf.png";
s_shelf.onload = imageLoader();
var s_bed = new Image();
s_bed.src = "images/bed.png";
s_bed.onload = imageLoader();
var l_rug = new Image();
l_rug.src = "images/rug.png";
l_rug.onload = imageLoader();
var wall = new Image();
wall.src = "images/wall.png";
wall.onload = imageLoader();


//intializes the player
var player = {
    x: 250,
    y: 250,
    image: new Image(),
    size: 32,
    direction: 0,
    animationframe: 0
}
player.image.src = "images/player.png";

function displaySafeBackground(){


    for(var column = 0; column <= 9; column++){
        for(var row = 0; row <= 9; row++){
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
function movePlayer(e) {
    //53 x 55 player
    var moveSpeed = 7;

    if (e.keyCode === 37) {
        //left arrow
        //if player is facing left
        if (player.direction === 1) {
            //if player was already going to the left
            setPlayerAnimationFrame();


            for (var column = 0; column <= 9; column++) {
                for (var row = 0; row <= 9; row++) {
                    context.drawImage(ground[row][column], column * 64, row * 64);
                    context.drawImage(objects[row][column], column * 64, row * 64);
                }
            }
        }

        function setPlayerAnimationFrame() {
            if (player.animationframe < 2) {
                //goes to the next animation frame
                player.animationframe += 1;
            } else {
                //goes to the first animation frame
                player.animationframe = 0;
            }
        }

//e is an argument implanted by javascript whenever they are dealing with an event
        function movePlayer(e) {
            //53 x 55 player
            var moveSpeed = 7;

            if (e.keyCode === 37) {
                //left arrow
                //if player is facing left
                if (player.direction === 1) {
                    //if player was already going to the left
                    setPlayerAnimationFrame();


                } else {
                    //set player to the first animation frame going to the left
                    player.animationframe = 0;
                }
                if (player.x > 15)
                    player.x -= moveSpeed;
                player.direction = 1;
            }
            if (e.keyCode === 39) {
                //right arrow
                if (player.direction == 2) {
                    setPlayerAnimationFrame();
                }
                else {
                    player.animationframe = 0;
                }
                if (player.x < 570)
                    player.x += moveSpeed;
                player.direction = 2;
            }
            if (e.keyCode === 38) {
                //up arrow
                if (player.direction == 3) {
                    setPlayerAnimationFrame();
                }
                else {
                    player.animationframe = 0;
                }
                if (player.y > 15)
                    player.y -= moveSpeed;
                player.direction = 3;
            }
            if (e.keyCode === 40) {
                //down arrow
                if (player.direction == 0) {
                    setPlayerAnimationFrame();
                }
                else {
                    player.animationframe = 0;
                }
                if (player.y < 570)
                    player.y += moveSpeed;
                player.direction = 0;
            }
            displaySafeBackground();
            context.drawImage(player.image,//specifies the image to use
                player.animationframe * player.size,//the x coordinate where to start clipping
                player.direction * player.size,//the y coordinate where to start clipping
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
        function imageLoader() {
            console.log("Running: imageLoader()");
            loadImages++;

            //once all images loaded, draw images.
            if (loadImages === totalImages) {
                ground =

                    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall]];
                //object placement
                objects =
                    [[wall, wall, wall, wall, wall, wall, s_window, wall, wall, wall],
                        [wall, floor, floor, dresser, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, s_bed, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, s_table, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, l_rug, b_table, floor, floor, wall],
                        [wall, cuboard, floor, floor, floor, floor, floor, floor, floor, wall],
                        [wall, floor, floor, floor, floor, s_shelf, floor, floor, floor, wall],
                        [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall]];

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

                context.drawImage(player.image, 0, 0, player.size, player.size, player.x, player.y, player.size, player.size);


            }
        }
    }
}