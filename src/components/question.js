const styles = `
<style>
.container {
  text-align: center;
}
</style>`

class Question extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.cauhoiht = this.getAttribute("question")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
     <p>Cau <span id="question">${this.cauhoiht}</span></p>
    </div>`
  }

  static get observedAttributes() {
    return ["question"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._shadowRoot.getElementById("question").innerHTML = newVal
  }
}

window.customElements.define("question-c", Question)
