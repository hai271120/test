import { Data } from "./utils.js"

const styles = `
<style>
.container {
  margin: 0 auto;
  width: 60vw;
}

@media (max-width: 729px) {
  .container {
    width: 100%;
  }
}
</style>`

class Game extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
    </div>`

    let diem = 0
    let dem= 0
    const questionList = await Data()
    console.log(questionList)

    window.diem = diem
    window.dem= dem
    window.answered = []

    let questionHTML = ``

    questionList.map((item, index) => {
      questionHTML += `
      <question-c question="${index + 1}"></question-c>
      <question-s id="question-d" index="${index}" question='${JSON.stringify(
        item
      )}'></question-s>`
    })

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <score-s id="diem"></score-s>
      ${questionHTML}
    </div>`

    this._shadowRoot.getElementById("diem").setAttribute("diem", diem)

    window.scoreDisplay = this._shadowRoot.getElementById("diem")
    window.questionCount = this._shadowRoot.getElementById("question")
    window.questionD = this._shadowRoot.getElementById("question-d")
  }
}

window.customElements.define("game-s", Game)
