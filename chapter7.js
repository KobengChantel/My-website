//Modifying Douglas with JavaScript using css divs
document.getElementById("lefteye").style.backgroundColor = "green";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("righteye").style.border = "6px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("rightarm").style.backgroundColor ="orange";
document.getElementById("body").style.color = "yellow";
document.getElementById("head").style.borderTop = "20px solid brown";

document.getElementById("mouth").style.borderRadius = "40px";
document.getElementById("body").style.border = "4px black solid";
document.getElementById("mouth").style.borderradius = " pink";
document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("leftarm").style.transform =" rotate(-15deg)";


var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}