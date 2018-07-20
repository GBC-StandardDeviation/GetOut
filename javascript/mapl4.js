var objects_l4 =
    [[wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, desk_l3.img, desk_l3.img, floor, floor, floor, wall],
        [s_window, floor, floor, floor, desk_l3.img, desk_l3.img, floor, floor, floor, s_window],
        [wall, floor, floor, floor, desk_l3.img, desk_l3.img, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, floor, floor, floor, floor, floor, floor, floor, floor, wall],
        [wall, inventory, inventory, inventory, inventory, inventory, inventory, inventory, inventory, wall]];
function start_l4(){
    gameStarted = true;
    gamearea.style.background = "saddlebrown";
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
    sceneContent.style.background = "saddlebrown";
    sceneContent.innerHTML = "";
    sceneDial.innerHTML = "";
    sceneInteract.innerHTML = "";
}
function loadScene_l4(){

}
function checkCollision_l4(e){

}