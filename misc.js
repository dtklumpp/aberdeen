console.log('misc page');

const focusit = document.getElementById('focusit');
const tofocus = document.getElementById('tofocus');
focusit.onclick = () => tofocus.focus();

const pasteTarget = document.getElementById('paste-target');
const divTarget = document.getElementById('div-target');
async function pasteit(){
    console.log('pasteit fxn');
    navigator.clipboard.writeText("PASTED IT BAM")

    //oh wow this needs permissions
    let clip = await navigator.clipboard.readText();

    pasteTarget.value = clip;

    divTarget.innerText = clip;
}

