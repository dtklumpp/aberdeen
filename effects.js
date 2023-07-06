console.log('effects page');

const rote = document.getElementById('rotate');

rote.onclick = swapAngle;

let swapped = 0;
function swapAngle(){
    swapped = 1 - swapped;
    if(swapped) rote.style.transform = "rotate(15deg)"
    else rote.style.transform = "rotate(-15deg)";
}

const reload = document.getElementById('reload');
reload.onclick = reloadPage;
function reloadPage(){
    window.location.reload();
}

const closeButton = document.getElementById('close');
closeButton.onclick = () => {
    // window.close();
    // window.open('','_self').close()
    console.log("can't seem to do this")
}

$( function() {
    $( "#slider" ).slider();
} );

// $( "#slider" ).slider();

$( function() {
    $( "#sortable" ).sortable();
} );
