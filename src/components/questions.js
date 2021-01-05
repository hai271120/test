const styles = `
<style>
.container {
  width: 60wv;
  margin: 0 auto;
}

.question {
  border: 4px blude solid;
  width: 60wv;
  height: 5vh;
  padding: 10px;
  line-height: 60wv;
  text-align: center;
}
</style>`

class Questions extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this.questionData = await JSON.parse(this.getAttribute("question"))
    this.index = parseInt(this.getAttribute("index"))
    console.log(this.questionData)

    this._shadowRoot.innerHTML = await this.generateQuestion(this.questionData)
  }

  async generateQuestion(questionData) {
    const { question, answers, correctAnswer } = questionData

    let html = ``

    answers.forEach((item) => {
      html += `<answer-s id=${this.index} answer="${item}" correct="${
        item === correctAnswer
      }" key="index"></answer-s>`
    })

    return `
    ${styles}
    <div class="container">
     <div class="question">
      ${question}
     </div> 
     ${html}
    </div>`
  }
}

window.customElements.define("question-s", Questions)
