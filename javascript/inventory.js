
var can1=document.getElementById("inventory");
var ctx=can1.getContext("2d");
ctx.font = "12px Impact";
ctx.fillStyle = "#0099CC";
ctx.fillText("Item|         Description",4,12);

var itemImg = new Image();
itemImg.src = "images/item/1.png";

function btn1() { //use this function to call out inventory window.

    if(can1.style.display=="none"){
            can1.style.display="block";
        }
        else {
            can1.style.display="none";
        }
}


