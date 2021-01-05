const styles = `
<style>
*{
  margin: 0;
  padding: 0;
}

.container {
  width: 40wv;
  height: 3vh;
  line-height: 4vh;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
}

.container:hover {
  color:pink;
}

.correct {
  color: green;
}

.incorrect {
 
  color: red;
}
</style>`

class Answer extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const answer = this.getAttribute("answer")
    const isCorrect = this.getAttribute("correct")
    this.index = this.getAttribute("id")

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container" id="answer">
      <p>${answer}</p>
    </div>`

    this._shadowRoot
      .getElementById("answer")
      .addEventListener("click", async () => {
        if (answered.indexOf(this.index) !== -1) {
          alert("Bạn Chỉ Được Chọn 1 Đáp án")
          return
        }

        answered.push(this.index)
        console.log(answered)

        if (isCorrect === "true") {
          diem += 10
          alert("Bạn Đã Chọn Đúng")
          this._shadowRoot.getElementById("answer").classList.toggle("correct")
        } else {
          alert("Bạn Đã Chọn Sai")
          this._shadowRoot
            .getElementById("answer")
            .classList.toggle("incorrect")
        }
        dem++

        scoreDisplay.setAttribute("diem", diem)

        if (answered.length === 5) {
          alert(`Game over! Diem cua ban la ${diem}.`)
        }
      })
  }
}

window.customElements.define("answer-s", Answer)
