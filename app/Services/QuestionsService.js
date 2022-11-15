import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";

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
    debugger
    // find the question
    // after findinf the question, check if answer is correct

    if (answer == found.correct_answer) {

    }
  }

}



export const questionsService = new QuestionsService()