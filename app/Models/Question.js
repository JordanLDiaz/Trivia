import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.choices = [...data.incorrect_answers, data.correct_answer]
    // this.incorrect_answers = data.incorrect_answers
  }

  get QuestionTemplate() {
    return `
      <div class="col-6">
        <div class="bg-light elevation-2 rounded text-center p-3">
          <h2>${this.question}</h2>
          <div>
            <div> 
            ${this.MultipleTemplate}
            </div>
          </div>
        </div>
      </div>
      `
  }

  get MultipleTemplate() {
    this.choices.sort(() => Math.random() - 0.5)
    this.choices.sort(() => Math.random() - 0.5)
    this.choices.sort(() => Math.random() - 0.5)
    let template = ''

    this.choices.forEach(c => template += `<button onclick="app.questionsController.findAnswer('${c}')" class="btn btn-light border border-dark rounded m-1">${c}</button>`)
    return template
  }
}