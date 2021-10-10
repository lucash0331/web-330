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
              </nav>
          </div>
      </div>
          `;
    }
  }
  
  customElements.define("header-component", Header);
