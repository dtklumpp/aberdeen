let biff = "boff";
console.log({biff});

let count = 0;

// for firstpage

$('.butt').on('click', () => {
    count++;
    console.log('boo!-'+count);
    $('.ghost').toggle();
})

$('.butt1').on('click', () => {
    count++;
    console.log('foo!-'+count);
    $('.page1').toggle();
})

$('.butt2').on('click', () => {
    count++;
    console.log('bar!-'+count);
    $('.page2').toggle();
})

// for index page

$('.button1').on('click', () => {
    $('.hideit').toggle();
})
$('.button2').on('click', () => {
    count++;
    console.log('countit!-'+count);
    $('.countit').text("countit!--"+count)
})

function showContent(){
    $('.hideit').toggle();
}

// making navbar with Web Components

class NavBar extends HTMLElement {
    // constructor(){
    //     super();
    //     // super.connectedCallback();
    // }
    connectedCallback() {
        // super();
        // super.connectedCallback();

        // this.innerHTML = `
        // <div class="overflow2">
        //     <a href="./index.html"><button>index</button></a>
        //     <a href="./firstpage.html"><button>firstpage</button></a>
        //     <a href="./page3.html"><button>page3</button></a>
        //     <button>nada</button>
        //     <a href="./gridpage.html"><button>gridpage</button></a>
        //     <a href="./varspage.html"><button>css-vars</button></a>
        // </div>
        // `;

        this.innerHTML = 
        `
            <navbar>
            main nav content goes here via extension           
            </navbar>     
        `;
    }
}
customElements.define('main-nav', NavBar);


//making NavBar with Jquery

const jqnav = $('#jqnav');
jqnav.text('jqnav is here!');

console.log("jqnav didn't throw an error");

jqnav.css('color', 'red');
jqnav.addClass('header');

// jqnavs.eq(0)
// .html 
// .text
// .before()
// .after()
// .append()
// .prepend()
// .remove()
// $('img').attr('src')
// .toggleClass()

//effects
//stop event propagation
//target
//currentTarget

newdiv = $('<div/>');
newdiv.text('hiya');
jqnav.append(newdiv);
