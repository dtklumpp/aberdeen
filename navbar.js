// MAKING NAVBAR WITH WEB COMPONENTS

class NavBar extends HTMLElement {
    // constructor(){
    //     super();
    //     // super.connectedCallback();
    // }
    connectedCallback() {
        // super();
        // super.connectedCallback();

        this.innerHTML = `
        <div class="header">
            <a href="./index.html"><button>index</button></a>
            <a href="./firstpage.html"><button>firstpage</button></a>
            <a href="./page3.html"><button>page3</button></a>
            <button>nada</button>
            <a href="./gridpage.html"><button>gridpage</button></a>
            <a href="./varspage.html"><button>css-vars</button></a>
            <a href="./fetch.html"><button>fetch</button></a>
            <a href="./storage.html"><button>storage</button></a>
            <a href="./import.html"><button>import</button></a>
            <a href="./chat.html"><button>chat</button></a>
            <a href="./misc.html"><button>misc</button></a>
            <a href="./cdns.html"><button>CDNs</button></a>
            <a href="./effects.html"><button>effects</button></a>
        </div>
        `;

        // this.innerHTML = 
        // `
        //     <navbar>
        //     main nav content goes here via extension           
        //     </navbar>     
        // `;
    }
}
customElements.define('main-nav', NavBar);
