import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
//Отображение вопросов 
//AnswerItem передается в AnswerList, 
// а AnswerList передается в ActiveQuiz, 
// а ActiveQuiz  в Quiz, а Quiz в App
class Quiz extends Component {
	state = {
		activeQuestion: 0,
		quiz: [
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

onAnswerClickHandler = (answerId) => {
	 console.log('Answer Id: ', answerId);

	 this.setState({
	 	activeQuestion: this.state.activeQuestion+1
	 })
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
					/>
				</div>
			</div>
		)
	}
}

export default Quiz