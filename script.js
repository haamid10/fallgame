var character = document.getElementById("character")

function moveLeft(){
  var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left +2 + "px";
}

function moveRight(){
  var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left +2 + "px";
}

document.addEventListener("keydown", event => {
  if(event.key==="Arrowleft"){
    interval =setinterval(moveleft,1)
  }
  if(event.key==="ArrowRight"){
    interval =setinterval(moveRight,1)
  }

})