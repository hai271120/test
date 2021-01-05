const styles = `
<style>
.container {
  text-align: center;
}
</style>`

class Score extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.diemht = this.getAttribute("diem")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <p>Diem cua ban:</p>
      <h3 id="diem">${this.diemht}</h3>
    </div>`
  }

  static get observedAttributes() {
    return ["diem"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._shadowRoot.getElementById("diem").innerHTML = newVal
  }
}

window.customElements.define("score-s", Score)
