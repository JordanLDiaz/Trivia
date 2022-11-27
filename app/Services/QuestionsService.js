import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";

class QuestionsService {

  async getQuestions() {
    // const response = await fetch('https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple')
    // console.log('get question res', response);
    // const data = await response.json()
    // console.log('the data', data);

    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple')
    console.log('question data', response.data);
    appState.questions = response.data.results.map(questionData => new Question(questionData))
  }

  findAnswer(answer, id) {
    // debugger
    // find the question
    // after findinf the question, check if answer is correct
    let activeQuestion = appState.questions
    if (activeQuestion.correct_answer == answer) {
      Pop.toast('You got it!', "success")
      this.getQuestions()
    } else {
      Pop.toast('Not quite, try again next time!', 'error')
    }
  }

}



export const questionsService = new QuestionsService()