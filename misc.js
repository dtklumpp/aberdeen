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
    
    // elem.value = ""
    // elem.innerText = ""
    // elem.innerHTMl = ""
    // textContent (excludes links?)
    // elem.append
    // elem.appendChild
    // elem.before
    // elem.after
    // elem.addEventListener
    // elem.onclick
    // elem.focus()
}

const prompter = document.querySelector('#prompter');
prompter.onclick = promptIt;

function promptIt() {
    let input = prompt("write to the console!");
    console.log(input);
}

