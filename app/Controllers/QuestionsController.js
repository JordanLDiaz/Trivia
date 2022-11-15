import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawQuestions() {
  // Use Math.random() to create a random number, then multiply it by 10. Also wrap it in Math.floor... ex: Math.floor(Math.random() * 10)
  let randomNumber = Math.floor(Math.random() * 10)
  let question = appState.questions[randomNumber]
  // let template = ''
  // questions.forEach(q => template += q.QuestionTemplate)    commented out because we created randomNumber and let the questions = appstate.questions at the randomNumber
  setHTML('questions', question.QuestionTemplate)
}
export class QuestionsController {
  constructor() {
    console.log('hello from cards controller');
    this.getQuestions()
    appState.on('questions', _drawQuestions)
  }

  async getQuestions() {
    console.log('getting questions');
    await questionsService.getQuestions()
    console.log('got the questions');
    let activeQuestion = appState.activeQuestion
  }

  findAnswer(id) {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target
    let answer = form.answer.value
    console.log(answer);
    questionsService.findAnswer(answer, id)
  }
}