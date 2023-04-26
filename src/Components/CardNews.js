class Cardnews extends HTMLElement {

    constructor() {
        super();

        // Somente os elementos dentro de shadow podem altera-los
        // const shadow = this.attachShadow({ mode: "close" });
        
        // Elementos externos ao shadow podem alterá-lo
        const shadow = this.attachShadow({ mode: "open" });
        // shadow.innerHTML = "<h1>Olá, mundo!</h1>";

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');
        
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card-left');

        const autor = document.createElement('span');
        autor.textContent = `By ${this.getAttribute('autor') || 'Anonymous'}`;
        
        const linkTitle = document.createElement('a');
        linkTitle.textContent = `${this.getAttribute('title')}`;
        linkTitle.href = this.getAttribute('url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card-right');

        const newsImg = document.createElement('img');
        newsImg.alt = 'Foto da notícia';
        newsImg.src = this.getAttribute('src') || 'assets/default-img.png';

        cardLeft.append(autor);
        cardLeft.append(linkTitle);
        cardLeft.append(newsContent);
        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 80%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, .75);
                justify-content: space-between;
            }
            
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card-left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card-left > p {
                color: rgb(69, 69, 69);
            }
            
            .card-left > span {
                font-weight: 400;
            }
            
            .card-left, .card-right {
                border: 1px solid blue;
            }
            
            img {
                width: 180px;
                height: 200px;
            }
        `;

        return style;
    }

}

customElements.define('card-news', Cardnews);