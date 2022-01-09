/*
Title: footer.js
Author: Lucas Hoffman
Date: 10/06/2021
Description: footer.js file for personal portfolio
*/




class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
              <div id="footer">
                  <p class="copyright">
                      Copyright &copy; 2021. Lucas Hoffman |  <a target="_blank" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development</a>
                  </p>
                  <p class="social">   
                      <a target="_blank" class="youtube" title="My Linkedin Profile" href="https://www.linkedin.com/in/lucashoffman/"><i class="fa fa-fw fa-2x fa-inverse fa-linkedin"></i></a>
                      <a target="_blank" class="github" title="My GitHub repositories" href="https://github.com/lucash0331"><i class="fa fa-fw fa-2x fa-inverse fa-github"></i></a>
                      <far target="_blank" class="github" title="My Phone Number" href="#">470-429-8477 <far class="fa fa-fw fa-2x fa-inverse far fa-phone"></i></a>
                      
                  </p>
              </div>
            
          `;
    }
  }
  
  customElements.define("footer-component", Footer);