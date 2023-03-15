import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawQuestion() {
  let newTrivia = appState.question
  setHTML('active-question', newTrivia.QuestionTemplate)
}

function _drawScore(player) {
  setText(`${player}-score`, appState[player])
}

export class QuestionsController {
  constructor() {
    // console.log('hello from controller');
    this.getQuestion()
    appState.on('question', _drawQuestion)
    appState.on('ta', () => _drawScore('ta'))
    appState.on('class', () => _drawScore('class'))
  }

  async getQuestion() {
    try {
      await questionsService.getQuestion()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  findAnswer(answer) {
    try {
      questionsService.findAnswer(answer)
      console.log(answer);
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  updateScore(name, score) {
    questionsService.updateScore(name, score)
  }
}