import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";

class QuestionsService {

  async getQuestion() {
    const res = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
    console.log('question data', res.data);
    appState.question = res.data.results.map(q => new Question(q))[0]
    console.log(appState.question)
  }

  findAnswer(answer) {
    // find the question
    // after findinf the question, check if answer is correct
    let activeQuestion = appState.question
    if (activeQuestion.correct_answer == answer) {
      Pop.toast('You got it!', "success")
      this.getQuestion()
    } else {
      Pop.toast('Not quite, try again!', 'error')
    }
  }
  updateScore(name, score) {
    appState[name] += score
  }
}

export const questionsService = new QuestionsService()