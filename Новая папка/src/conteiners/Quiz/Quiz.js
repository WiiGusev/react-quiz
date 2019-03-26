import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
//Отображение вопросов
//AnswerItem передается в AnswerList,
// а AnswerList передается в ActiveQuiz,
// а ActiveQuiz  в Quiz, а Quiz в App
class Quiz extends Component {
	state = {
		results: {}, //{[id]: 'success' 'error'}
		isFinished: false, //Закончился ли опрос
		activeQuestion: 0, //Текущий вопрос
		answerState: null,//текущий ответ пользователя { [id]: 'siccess' 'error'}
		quiz: [ //список вопросов
		{
			question: 'Какого цвета небо?',
			rightAnswerId: 1,
			id: 1,
			answers: [
			{text: 'Синий', id: 1},
			{text: 'Желтый', id: 2},
			{text: 'Красный', id: 3},
			{text: 'Зеленый', id: 4}
			]
		},
		{
			question: 'В каком году основали Спб?',
			rightAnswerId: 3,
			id: 2,
			answers: [
			{text: '1700', id: 1},
			{text: '1705', id: 2},
			{text: '1703', id: 3},
			{text: '1803', id: 4}
			]
		}
		]
	}
//при клике на ответы определяется какой Id ответа
//если он соответствует верному, то показывает новый вопрос
//иначе ошибка
onAnswerClickHandler = (answerId) => {
	//Проверка
	//При клике два раза на на один ответ, засчитывается два ответа
	//Если пользователь уже кликнул, то проверяется, правильный ли ответ
	//Если правильный, то делается return, чтобы не продолжать
	//дальнейшее выполнение метода
	if (this.state.answerState) {
		const key = Object.keys(this.state.answerState)[0]
		if (this.state.answerState[key] === 'success') {
			return
		}
	}


	 const question = this.state.quiz[this.state.activeQuestion];
	 const results = this.state.results;

	 if (question.rightAnswerId === answerId) {
	 	if (!results[question.id]) {
        results[question.id] = 'success'
      }

	 	this.setState({
	 		answerState: {[answerId]: 'success'},
	 		results
	 	})


	 	const timeout = window.setTimeout(()=>{
	 		if (this.isQuizFinished()) {
	 			this.setState({
	 				isFinished: true
	 			})
	 		}
	 		else {
	 			this.setState({
		 			activeQuestion: this.state.activeQuestion+1,
		 			answerState: null
		 		})
	 		}

	 		window.clearTimeout(timeout)
	 	}, 1000)
	 }
	 else {
	 	results[answerId] = 'error'
	 	this.setState({
	 		answerState: {[answerId]: 'error'},
	 		results
	 	})
	 }
}
//Проверка. True = если активная страница последняя(равна length), false если не последняя
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

	render() {
		return (
			<div className={classes.Quiz}>
				<div className = {classes.QuizWrapper}>
					<h1>Ответьте на вопросы</h1>

					{
					this.state.isFinished
						? <FinishedQuiz
							results = {this.state.results}
						  	 quiz = {this.state.quiz}
						  />
						: <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
							question = {this.state.quiz[this.state.activeQuestion].question}
							onAnswerClick = {this.onAnswerClickHandler}
							quizLength = {this.state.quiz.length}
							answerNumber = {this.state.activeQuestion+1}
							state = {this.state.answerState}
						  />
					}
				</div>
			</div>
		)
	}
}

export default Quiz
