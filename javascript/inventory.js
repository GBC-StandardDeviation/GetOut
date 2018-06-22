
var can1=document.getElementById("inventory");
var ctx=can1.getContext("2d");
ctx.font = "12px Georgia";
ctx.fillStyle = "black";
ctx.fillText("Item| Description",4,12);



var itemImg = new Image();//key image
itemImg.src = "images/item/1.png";

function btn1() { //use this function to call out inventory window.

    if(can1.style.display=="none"){
            can1.style.display="block";
            can1.style.background="green";
        }
        else {
            can1.style.display="none";
        }
}


