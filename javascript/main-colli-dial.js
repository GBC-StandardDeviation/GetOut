//variables for background
var canvas = document.getElementById("gamearea");
var context = canvas.getContext("2d");
const totalImages = 10;
var loadImages = 0;
var scaleScene = 1;
var column;
var row;
var moveCounter = 2;
var moveSpeed = 15;
var moveLeft = true;
var moveRight = true;
var moveUp = true;
var moveDown = true;
var sceneLevel1Index;
canvas.width = 640;
canvas.height = 640;

var gameStarted = false;
var level2Started = false;

/* wait for player to press enter to start playing */
document.body.addEventListener("keydown", function(event){

	if(event.keyCode == 13 && !gameStarted){
		startGame();
	}
	else if(event.keyCode == 13 && !level2Started){
	    startLevel2();
    }

});
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

function intro_screen2(){
    context.font = "50px Impact";
    context.fillStyle = "#0099CC";
    context.textAlign = "center";
    context.fillText("GET OUT", canvas.width/2, canvas.height/2);

    context.font = "20px Arial";
    context.fillText("Press Enter To Start Level 2... if you dare", canvas.width/2, canvas.height/2 + 50);


}


/* start game loop */
function startGame(){
	gameStarted = true;
	clearCanvas();
		loop();
}


function startLevel2() {
    context.clearRect(0, 0, 640, 640);
    intro_screen2();
    level2Started = true;
    console.log("Hello");
    loop2();

}

function loop2(){
    //environment
    var dfloor = new Image();
    dfloor.src = "images/dresser.png";
    dfloor.onload = imageLoader2;
    var dwall = new Image();
    dwall.src = "images/rug.png";
    dwall.onload = imageLoader2;

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
    function imageLoader2(){
        console.log("Running: imageLoader2()");
        loadImages++;

        //once all images loaded, draw images.
        if(loadImages === totalImages){
            ground =
                [[dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall]];
            //object placement
            objects =
                [[dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dfloor, dwall],
                    [dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall, dwall]];


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
                        objects[row][column] !== wall &&
                        player.x <= (column + 1) * 64 + moveSpeed &&
                        player.x >= (column + 1) * 64 &&
                        player.y >= row * 64 - moveSpeed - 32 &&
                        player.y <= (row + 1) * 64 + moveSpeed
                    ){
                        moveLeft = false;
                        //sceneLevel2Index = getScene(row, column);
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
                        objects[row][column] !== wall &&
                        player.x >= column * 64 - moveSpeed - 32 &&
                        player.x <= column * 64 - 32 &&
                        player.y >= row * 64 - moveSpeed - 32 &&
                        player.y <= (row + 1) * 64 + moveSpeed
                    ){
                        moveRight = false;
                        //sceneLevel1Index = getScene(row, column);
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
                        objects[row][column] !== wall &&
                        player.x >= column * 64 - moveSpeed - 32 &&
                        player.x <= (column + 1) * 64 + moveSpeed &&
                        player.y >= row * 64 - moveSpeed - 32 &&
                        player.y <= row * 64 - 32
                    ){
                        moveDown = false;
                        //sceneLevel1Index = getScene(row, column);
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
                        objects[row][column] !== wall &&
                        player.x >= column * 64 - moveSpeed - 32 &&
                        player.x <= (column + 1) * 64 + moveSpeed &&
                        player.y >= (row + 1)* 64 &&
                        player.y <= (row + 1) * 64 + moveSpeed
                    ){
                        moveUp = false;
                    }
                }
            }
        }
    }

}
/* game loop function */
function loop(){
	
	
	var mainLevel1 = {
		img: "url('images/wall.png')",
		dial: "You are in the midst of the room",
		invtory: "There is nothing strange!"
	};
	var mainDoorLevel1 = {
		img: "url('images/window.png')",
		dial: "You reached the main door" + "<br>" + "You need a key to open",
		//dial: "You reached the main door" + "<br>" + "Please enter 6 digit number to open",
		//misteryItem: 515098
	};
	var chestLevel1 = {
		img: "url('images/b_table.png')",
		dial: "You reached a chest"
			   // + "<br>" + "There is a bat on the chest"
	};
	var keyItem = "Key";
	var lockerLevel1 = {
		img: "url('images/cuboard.png')",
		dial: "You reached a locker" + "<br>" + "Please enter 4 digit number to open",
		invtory: ["To Headmaster of University College London", keyItem],
		misteryItem: 2012
	};
	var bookShelfLevel1 = {
		img: "url('images/shelf.png')",
		dial: "You reached a bookShelf",
		invtory: ["Math Book", "History Book", "Geography Book", "Science Book"]
	};
	var dresserLevel1 = {
		img: "url('images/dresser.png')",
		dial: "You reached a Dresser"
	};
	var smallTableLevel1 = {
		img: "url('images/small_table.png')",
		dial: "You reached a small table"
	};
	var rugLevel1 = {
		img: "url('images/rug.png')",
		dial: "You reached a rug"
	};
	var bedLevel1 = {
		img: "url('images/bed.png')",
		dial: "You reached a bed"
	};

	var mainDoorInvtoryButton = document.createElement("button");
	var keyInvtoryButton = document.createElement("button");
	var secondLevelButton = document.createElement("button");

	//var mainDoorInput = document.createElement("input");
	//var mainDoorButton = document.createElement("button");

	var lockerInput = document.createElement("input");
	var lockerButton = document.createElement("button");
	var keyItemButton = document.createElement("button");

	var mathButton = document.createElement("button");
	var historyButton = document.createElement("button");
	var geographyButton = document.createElement("button");
	var scienceButton = document.createElement("button");

	var sceneLevel1 = [mainLevel1, mainDoorLevel1, chestLevel1, lockerLevel1, bookShelfLevel1,
						dresserLevel1, smallTableLevel1, rugLevel1, bedLevel1];
	var gamearea = document.querySelector("#gamearea");
	var sceneImage = document.querySelector("#sceneImage");
	var sceneDial = document.querySelector("#sceneDial");
	var sceneInteract = document.querySelector("#sceneInteract");

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
	var wall = new Image();
	wall.src = "images/wall.png";
	wall.onload = imageLoader;

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

			loadScene();
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

			loadScene();
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

			loadScene();
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

			loadScene();
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
					//[wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
					//[wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
					[wall, floor, floor, dresser, floor, floor, floor, floor, floor, wall],
					[wall, floor, floor, floor, floor, floor, floor, floor, s_bed, wall],
					[wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
					//[wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
					[wall, floor, floor, floor, s_table, floor, floor, floor, floor, wall],
					[wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
					//[wall, floor, floor, floor, floor, floor, b_table, floor, floor, wall],
					[wall, floor, floor, floor, floor, l_rug, b_table, floor, floor, wall],
					[wall, cuboard, floor, floor, floor, floor, floor, floor, floor, wall],
					[wall, floor, floor, floor, floor, s_shelf, floor, floor, floor, wall],
					[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall]];


			//world map loop
			//tile size 64 x 64
			displaySafeBackground();


			//this listens for a key press only after all images have been loaded
			window.addEventListener('keydown', movePlayer, false);

			context.drawImage(player.image,0,0,player.size, player.size, player.x, player.y, player.size, player.size);

		}
	}
	loadScene();
	//function to detect collision whenever player makes a move using arrow keys
	function collision(e){
		if (e === 37){
			moveRight = true;
			moveUp = true;
			moveDown = true;
			for (row = 0; row < 10; row++){
				for (column = 0; column < 10; column++){
					if (objects[row][column] !== floor &&
						objects[row][column] !== wall &&
						player.x <= (column + 1) * 64 + moveSpeed &&
						player.x >= (column + 1) * 64 &&
						player.y >= row * 64 - moveSpeed - 32 &&
						player.y <= (row + 1) * 64 + moveSpeed
					){
						moveLeft = false;
						sceneLevel1Index = getScene(row, column);
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
						objects[row][column] !== wall &&
						player.x >= column * 64 - moveSpeed - 32 &&
						player.x <= column * 64 - 32 &&
						player.y >= row * 64 - moveSpeed - 32 &&
						player.y <= (row + 1) * 64 + moveSpeed
					){
						moveRight = false;
						sceneLevel1Index = getScene(row, column);
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
						objects[row][column] !== wall &&
						player.x >= column * 64 - moveSpeed - 32 &&
						player.x <= (column + 1) * 64 + moveSpeed &&
						player.y >= row * 64 - moveSpeed - 32 &&
						player.y <= row * 64 - 32
					){
						moveDown = false;
						sceneLevel1Index = getScene(row, column);
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
						objects[row][column] !== wall &&
						player.x >= column * 64 - moveSpeed - 32 &&
						player.x <= (column + 1) * 64 + moveSpeed &&
						player.y >= (row + 1)* 64 &&
						player.y <= (row + 1) * 64 + moveSpeed
					){
						moveUp = false;
						sceneLevel1Index = getScene(row, column);
					}
				}
			}
		}
	}
	function getScene(locRow, locColumn) {
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
		if (locRow === 6 && locColumn === 5)
			return 7; //rug
		if (locRow === 2 && locColumn === 8)
			return 8; //bed
	}
	function loadScene() {
		if(moveLeft && moveRight && moveUp && moveDown){
			sceneImage.style.background = mainLevel1.img;
			sceneDial.innerHTML = mainLevel1.dial;
			sceneInteract.innerHTML = mainLevel1.invtory;
			//canvas.width = 640;
			//moveCounter++;
			//if(moveCounter === 1)
			//exitScene();
		}else {
			//canvas.width = 320;
			//moveCounter = 0;
			sceneImage.style.background = sceneLevel1[sceneLevel1Index].img;
			sceneDial.innerHTML = sceneLevel1[sceneLevel1Index].dial;
			switch(sceneLevel1Index){
				case 1:
					sceneInteract.innerHTML = "";
					sceneInteract.appendChild(mainDoorInvtoryButton);
					mainDoorInvtoryButton.innerHTML = "Go to Inventory";
					mainDoorInvtoryButton.addEventListener("click", mainDoorInvtoryButtonHandler, false);
					break;
					/*sceneInteract.innerHTML = "";
					sceneInteract.appendChild(mainDoorInput);
					sceneInteract.appendChild(mainDoorButton);
					mainDoorInput.placeholder = "Enter 6 digit number!";
					mainDoorInput.focus();
					mainDoorButton.innerHTML = "Open";
					mainDoorButton.addEventListener("click", mainDoorButtonHandler, false);
					break;*/
				case 2:
					sceneInteract.innerHTML = "There is nothing strange!";
					//sceneInteract.innerHTML = "Press J key to get the bat";
					break;
				case 3:
					sceneInteract.innerHTML = "";
					sceneInteract.appendChild(lockerInput);
					sceneInteract.appendChild(lockerButton);
					lockerInput.placeholder = "Enter 4 digit number!";
					lockerInput.focus();
					lockerButton.innerHTML = "Open";
					lockerButton.addEventListener("click", lockerButtonHandler, false);
					break;
				case 4:
					sceneInteract.innerHTML = "";
					sceneInteract.appendChild(mathButton);
					sceneInteract.appendChild(historyButton);
					sceneInteract.appendChild(geographyButton);
					sceneInteract.appendChild(scienceButton);
					mathButton.innerHTML = bookShelfLevel1.invtory[0];
					historyButton.innerHTML = bookShelfLevel1.invtory[1];
					geographyButton.innerHTML = bookShelfLevel1.invtory[2];
					scienceButton.innerHTML = bookShelfLevel1.invtory[3];
					mathButton.style.position = "absolute";
					historyButton.style.position = "absolute";
					geographyButton.style.position = "absolute";
					scienceButton.style.position = "absolute";
					mathButton.style.top = 10 + "px";
					mathButton.style.left = 165 + "px";
					mathButton.style.width = 300 + "px";
					mathButton.style.height = 40 + "px";
					historyButton.style.top = 60 + "px";
					historyButton.style.left = 165 + "px";
					historyButton.style.width = 300 + "px";
					historyButton.style.height = 40 + "px";
					geographyButton.style.top = 110 + "px";
					geographyButton.style.left = 165 + "px";
					geographyButton.style.width = 300 + "px";
					geographyButton.style.height = 40 + "px";
					scienceButton.style.top = 160 + "px";
					scienceButton.style.left = 165 + "px";
					scienceButton.style.width = 300 + "px";
					scienceButton.style.height = 40 + "px";
					mathButton.addEventListener("click", mathButtonHandler, false);
					historyButton.addEventListener("click", historyButtonHandler, false);
					geographyButton.addEventListener("click", geographyButtonHandler, false);
					scienceButton.addEventListener("click", scienceButtonHandler, false);
					break;
				case 5:
				case 6:
				case 7:
				case 8:
					sceneInteract.innerHTML = "There is nothing strange!";
			}
		}
	}
	function mainDoorInvtoryButtonHandler() {
		for (i = 0; i < item.length; i++){
			if(item[i] === keyItem){
				sceneInteract.appendChild(keyInvtoryButton);
				keyInvtoryButton.innerHTML = "key";
				keyInvtoryButton.addEventListener("click", keyInvtoryButtonHandler, false);
				sceneInteract.removeChild(mainDoorInvtoryButton);
				mainDoorInvtoryButton.removeEventListener("click", mainDoorInvtoryButtonHandler, false);

			}
		}
	}
	function keyInvtoryButtonHandler() {
		sceneDial.innerHTML = "The door is opened";
		sceneInteract.removeChild(keyInvtoryButton);
		keyInvtoryButton.removeEventListener("click",keyInvtoryButtonHandler, false);
        sceneInteract.appendChild(secondLevelButton);
        secondLevelButton.innerHTML = "Click Here to Go to the Second Level";
        secondLevelButton.addEventListener("click", secondLevelHandler, false);
	}

	function secondLevelHandler(){
        /* intro screen welcoming player (display menu)*/
        startLevel2();
	}
	/*
	function mainDoorButtonHandler() {
		if (mainDoorInput.value == mainDoorLevel1.misteryItem){
			sceneDial.innerHTML = "The door is opened";
		}else sceneDial.innerHTML = "The door is closed";
	}
	*/
	function lockerButtonHandler() {
		if (lockerInput.value == lockerLevel1.misteryItem){
			sceneDial.innerHTML = "The locker is opened" + "<br>" + "There is a letter:" + lockerLevel1.invtory[0] + "<br>"
			for (i = 0; i < lockerLevel1.invtory.length; i++){
				if (lockerLevel1.invtory[i] === keyItem){
					sceneDial.innerHTML += "There is a: " + lockerLevel1.invtory[1];
					sceneInteract.appendChild(keyItemButton);
					keyItemButton.innerHTML = "Key Item";
					keyItemButton.addEventListener("click", keyItemButtonHandler, false);
					sceneInteract.removeChild(lockerInput);
					sceneInteract.removeChild(lockerButton);
					lockerButton.removeEventListener("click", lockerButtonHandler, false);
				}
			}
		}else sceneDial.innerHTML = "Locker is closed";
	}
	function keyItemButtonHandler() {
		item.push(lockerLevel1.invtory.pop());
		sceneDial.innerHTML += "<br>" + "You got a: " + item;
		sceneInteract.removeChild(keyItemButton);
		keyItemButton.removeEventListener("click", keyItemButtonHandler, false);
	}
	function mathButtonHandler() {
		sceneDial.innerHTML = "Just a bunch of equations, is it really useful?";
	}
	function historyButtonHandler() {
		sceneDial.innerHTML = "A range of eschatological beliefs that transformative events would occur on 21 December 2012. The date was regarded as the end-date of a 5,126-year-long cycle in the Mesoamerican Long Count calendar!";
	}
	function geographyButtonHandler() {
		sceneDial.innerHTML = "A list of coordinates? Interesting!" + "<br>"
								+ "Sofia, Bulgaria" + "42.6983" + "23.3199" + "<br>"
								+ "London, UK" + "51.5098" + "-0.118" + "<br>"
								+ "Arau, Malaysia" + "6.4297" + "100.269";
	}
	function scienceButtonHandler() {
		sceneDial.innerHTML = '"In order to solve this differential equation you look at it until a solution occurs to you." - George Polya';
	}
	/*
	function exitScene() {
		if(moveCounter === 1){
			switch (sceneLevel1Index){
				case 1:
				case 3:
					sceneInteract.removeChild(lockerInput);
					sceneInteract.removeChild(lockerButton);
					lockerButton.removeEventListener("click", lockerButtonHandler, false);
					break;
				case 4:
					sceneInteract.removeChild(mathButton);
					sceneInteract.removeChild(historyButton);
					sceneInteract.removeChild(geographyButton);
					sceneInteract.removeChild(scienceButton);
					mathButton.removeEventListener("click", mathButtonHandler, false);
					historyButton.removeEventListener("click", historyButtonHandler, false);
					geographyButton.removeEventListener("click", geographyButtonHandler, false);
					scienceButton.removeEventListener("click", scienceButtonHandler, false);
					break;
			}
		}
	}
	*/


}

function clearCanvas(){
	context.clearRect(0, 0, 640, 360);
}


