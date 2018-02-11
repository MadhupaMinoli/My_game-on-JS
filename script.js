var blackCutiee = null;
function carSpeed() {
    var car = document.getElementsByClassName("car");
    for (var i = 0; i < 8; i++) {

        var rand =parseFloat(Math.random()*3+2).toFixed(1);
        car[i].style.animationDuration=rand+"s";
    }
}
var x=setInterval(function () {
    $('#carSound').trigger('load');
    $('#carSound').trigger('play');
},180);


function init() {
    $('#blackCutiee').fadeIn("slow");
    $('#levelUp').trigger('load');
    $('#levelUp').trigger('play');
    // $('#carSound').play();
    blackCutiee = document.getElementById('blackCutiee');
    blackCutiee.style.position = 'absolute';
    blackCutiee.style.left = 50 + 'vw';
    blackCutiee.style.top = '125px';
    window.addEventListener('keydown', moveSelection);
    carSpeed();

}
var finish = document.getElementById('finish');

function moveRight(){
  if (blackCutiee.style.left != 95 + "vw") {
    blackCutiee.style.left = parseInt(blackCutiee.style.left) + 5 + 'vw';
  }
}

function moveLeft(){
  if (blackCutiee.style.left != 0 + "vw"){
    blackCutiee.style.left = parseInt(blackCutiee.style.left) - 5 + 'vw';
  }
}

function moveUp(){

  if (blackCutiee.style.top != 125 + "px") {
      $('#blackCutiee').attr("src","images/cross.gif");
    blackCutiee.style.top = parseInt(blackCutiee.style.top) - 40 + 'px';
    scrollBy(0,5);

  }
}
function moveDown(){

    if (blackCutiee.style.top!=1605+"px") {
        $('#blackCutiee').attr("src","images/cross.gif");
        blackCutiee.style.top = parseInt(blackCutiee.style.top) + 40 + 'px';
scrollBy(0,5);
    }
}



function moveSelection(evt) {
  switch (evt.keyCode) {
      case 37:
      moveLeft();
      break;
      case 39:
      moveRight();
      break;
      case 38:
      moveUp();
      break;
      case 40:
      moveDown();
      break;
      default: wait();
      }

}




var collision = setInterval(collisionDetect, 50);

function collisionDetect() {
    var car = document.getElementsByClassName("car");
    var isaac = document.getElementById('blackCutiee');
    for (var i = 0; i < 8; i++) {

        if (isaac.offsetLeft < car[i].offsetLeft + car[i].offsetWidth &&
            isaac.offsetLeft + isaac.offsetWidth > car[i].offsetLeft &&
            isaac.offsetTop < car[i].offsetTop + car[i].offsetHeight &&
            isaac.offsetHeight + isaac.offsetTop > car[i].offsetTop) {
            $('#blackCutiee').attr("src","images/hit.gif");

             $('#crash').trigger('load');
            $('#crash').trigger('play');

            car[i].style.setProperty("animation", "none", "important");
            $('#blackCutiee').fadeOut("slow");

            modal.style.display="block";

        }

    }
}
var win = setInterval(Finished, 100);

var count=1;
function Finished() {
    if (blackCutiee.offsetTop > finish.offsetTop) {

        if(count==6){
            $('#winSound').trigger('load');
            $('#winSound').trigger('play');
            $('#blackCutiee').attr("src","images/wait.gif");
            $('#blackCutiee').fadeOut("slow");

            modal2.style.display="block";
}
else{
            $('#blackCutiee').fadeOut("slow");
            level.style.display="block";
        }
    }
}


var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var level = document.getElementById('level');
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var play = document.getElementById('play');

play.onclick=function () {
    level.style.display="none";
    count+=1;
    window.scrollTo(0, 0);
    init();
}

span.onclick = function() {
    modal.style.display = "none";
    window.scrollTo(0, 0);

    window.location.reload();
    $('#blackCutiee').fadeIn("slow");
}
span1.onclick = function() {
    modal.style.display = "none";
    window.scrollTo(0, 0);

    window.location.reload();
    $('#blackCutiee').fadeIn("slow");
}
span2.onclick = function() {
    modal.style.display = "none";
    window.scrollTo(0, 0);

    window.location.reload();
    $('#blackCutiee').fadeIn("slow");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}
window.onload = init;

