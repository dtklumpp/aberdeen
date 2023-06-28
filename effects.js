console.log('effects page');

const rote = document.getElementById('rotate');

rote.onclick = swapAngle;

let swapped = 0;
function swapAngle(){
    swapped = 1 - swapped;
    if(swapped) rote.style.transform = "rotate(15deg)"
    else rote.style.transform = "rotate(-15deg)";
}
