




class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                 <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue Universities Web Development Degree</a>
                 
                 <a href="https://github.com/lucash0331?tab=repositories">GitHub repositories</a>
                 
                 <a href="https://www.youtube.com/c/bellevueuniversity">Bellevue Universities Youtube channel</a>
                 
                 <a href="https://github.com/buwebdev/web-330">Bellevue Universities Github</a>
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);