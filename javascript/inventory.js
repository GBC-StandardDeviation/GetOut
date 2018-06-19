var i=0;
var can1=document.getElementById("inventory");
var ctx=can1.getContext("2d");

var itemImg = new Image();
itemImg.src = "images/item/1.png";

function btn1() { //use this function to call out inventory window.
    i++;
        if(i%2==0){
            document.getElementById("inventory").style.zIndex ="1";
            document.getElementById("inventory").style.border = "2px solid black";

        }
        else {
            document.getElementById("inventory").style.zIndex ="-1";

        }
}


