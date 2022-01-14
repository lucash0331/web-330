<<<<<<< HEAD
/*
Title: header.js
Author: Lucas Hoffman
Date: 10/06/2021
Description: header.js file for personal portfolio
*/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="cbp-af-header">
          <div class="cbp-af-inner">
              <h1>Lucas Hoffman</h1>
              <nav>
                  <a href="index.html">Home</a>
                  <a href="about.html">About</a>
                  <a href="projects.html">Projects</a>
                  <a href="resume.html">Resume</a>
                  <a href="hoffman-diagrams.html">Diagrams</a>
              </nav>
          </div>
      </div>
          `;
    }
  }
  
  customElements.define("header-component", Header);
=======
/*
Title: header.js
Author: Lucas Hoffman
Date: 10/06/2021
Description: header.js file for personal portfolio
*/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="cbp-af-header">
          <div class="cbp-af-inner">
              <h1>Lucas Hoffman</h1>
              <nav>
                  <a href="index.html">Home</a>
                  <a href="about.html">About</a>
                  <a href="projects.html">Projects</a>
                  <a href="devops.html">Devops</a>
                  <a href="resume.html">Resume</a>
                  <a href="hoffman-diagrams.html">Diagrams</a>
              </nav>
          </div>
      </div>
          `;
    }
  }
  
  customElements.define("header-component", Header);
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
