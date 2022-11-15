import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.category = data.category
    this.type = data.type
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get QuestionTemplate() {
    return `
    <div class="col-6">
    <div class="bg-light elevation-2 rounded text-center p-3">
      <h2>${this.question}</h2>
      <h4>Category: <span> ${this.category} </span></h4>
      <!-- SECTION Answer options -->
      <form onsubmit="app.questionsController.findAnswer('${this.id}')">
      <div> 
      <input type="radio" id="answer-1" name="answer" value="${this.correct_answer}">
      <label for="answer-1">${this.correct_answer}</label><br>
      </div>
      <div>
      <input type="radio" id="answer-2" name="answer" value="${this.incorrect_answers[0]}">
      <label for="answer-2">${this.incorrect_answers[0]}</label><br>
      </div>
      <div>
      <input type="radio" id="answer-3" name="answer" value="${this.incorrect_answers[1]}">
      <label for="answer-3">${this.incorrect_answers[1]}</label>
      </div>
      <div>
      <input type="radio" id="answer-4" name="answer" value="${this.incorrect_answers[2]}">
      <label for="answer-4">${this.incorrect_answers[2]}</label>
      </div>
        <div class="row justify-content-center">
          <button class="btn btn-outline-success w-50 m-3">Submit Answer</button>
        </div>
      </form>
    </div>
  </div>
    `
  }
}