var isaac = null;
function carSpeed() {
    var car = document.getElementsByClassName("car");
    for (var i = 0; i < 8; i++) {

        var rand = (Math.random()*10)
        car[i].style.animationDuration=rand+"s";
    }
}



function init() {
    $('#levelUp').trigger('load');
    $('#levelUp').trigger('play');
    // $('#carSound').play();
  isaac = document.getElementById('isaac');
  isaac.style.position = 'absolute';
  isaac.style.left = 50 + 'vw';
  isaac.style.top = '125px';
  window.addEventListener('keydown', moveSelection);
   carSpeed();

  //   var round = window.localStorage.getItem("round");
  //   console.log(round);
  //   if(!round ){
  //       console.log(round);
  //       window.localStorage.setItem("round", 10);
  //   }
  //   var round = window.localStorage.getItem("round");
  //   carSpeed();
    // var car1 = document.getElementById('car1');
    // var rand = Math.random()*round;
    // car1.style.animationDuration = rand+"s";
    // console.log(round, rand);

}

var finish = document.getElementById('finish');

function moveRight(){
  if (isaac.style.left != 95 + "vw") {
    isaac.style.left = parseInt(isaac.style.left) + 5 + 'vw';
  }
}

function moveLeft(){
  if (isaac.style.left != 0 + "vw"){
    isaac.style.left = parseInt(isaac.style.left) - 5 + 'vw';
  }
}

function moveUp(){

  if (isaac.style.top != 125 + "px") {
      $('#isaac').attr("src","images/cross.gif");
    isaac.style.top = parseInt(isaac.style.top) - 40 + 'px';

  }
}
function moveDown(){

    if (isaac.style.top!=1605+"px") {
        $('#isaac').attr("src","images/cross.gif");
        isaac.style.top = parseInt(isaac.style.top) + 40 + 'px';

    }
}

function wait() {
    $('#isaac').attr("src","images/wait.gif");
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
function hitMessage() {
    alert('Oops! You\'ve been hit by a car!')
    window.scrollTo(0,0);
    window.location.reload();
}
var collision = setInterval(collisionDetect, 50);

function collisionDetect() {
    var car = document.getElementsByClassName("car");
    var isaac = document.getElementById('isaac');
    for (var i = 0; i < 8; i++) {

        if (isaac.offsetLeft < car[i].offsetLeft + car[i].offsetWidth &&
            isaac.offsetLeft + isaac.offsetWidth > car[i].offsetLeft &&
            isaac.offsetTop < car[i].offsetTop + car[i].offsetHeight &&
            isaac.offsetHeight + isaac.offsetTop > car[i].offsetTop) {

            $('#isaac').attr("src","images/hit.gif");

            $('#isaac').css("height","200px");
            $('#isaac').css("width","200px");

            $('#isaac').stop();
            setTimeout(hitMessage, 250);


        }

    }
}
var win = setInterval(Finished, 100);

function winMessage() {
    alert("You Win! Congrats!!!!!!!");
    window.scrollTo(0, 0);

    window.location.reload();
    }

var count=1;
function Finished() {
    if (isaac.offsetTop > finish.offsetTop) {

        // window.location.reload();
        // var round = window.localStorage.getItem("round");
        // if(round && round>1){
        //     window.localStorage.setItem("round",round-1 );
        //
        // }


         alert("Level" +count+ ":You Win!");


        count+=1;
window.scrollTo(0,0)
        init();
        if(count==5){
            $('#winSound').trigger('load');
            $('#winSound').trigger('play');
    setTimeout(winMessage, 50);
}
        //
        // $('#isaac').attr("src","images/wait.gif");
        // $('#isaac').stop();
        //
        // setTimeout(winMessage, 50);
    }
}
window.onload = init;

