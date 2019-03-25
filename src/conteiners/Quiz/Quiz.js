import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
//Отображение вопросов 
//AnswerItem передается в AnswerList, 
// а AnswerList передается в ActiveQuiz, 
// а ActiveQuiz  в Quiz, а Quiz в App
class Quiz extends Component {
	state = {
		activeQuestion: 0, //Текущий вопрос
		answerState: null,//текущий ответ пользователя
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
	 const question = this.state.quiz[this.state.activeQuestion];

	 if (question.rightAnswerId === answerId) {

	 	this.setState({
	 		answerState: {[answerId]: 'success'}
	 	})


	 	const timeout = window.setTimeout(()=>{
	 		if (this.isQuizFinished()) {
	 			console.log('Finished')
	 			console.log('fin '+ this.state.activeQuestion)
	 			console.log(this.state.quiz.length)
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
	 	this.setState({
	 		answerState: {[answerId]: 'error'}
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
					<ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
					question = {this.state.quiz[this.state.activeQuestion].question}
					onAnswerClick = {this.onAnswerClickHandler}
					quizLength = {this.state.quiz.length}
					answerNumber = {this.state.activeQuestion+1}
					state = {this.state.answerState}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz