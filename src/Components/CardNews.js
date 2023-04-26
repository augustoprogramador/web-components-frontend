class CardNews extends HTMLElement {

    constructor() {
        super();

        // Somente os elementos dentro de shadow podem altera-los
        // const shadow = this.attachShadow({ mode: "close" });
        
        // Elementos externos ao shadow podem alterá-lo
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = "<h1>Olá, mundo!</h1>";
    }

}

customElements.define('card-news', CardNews);