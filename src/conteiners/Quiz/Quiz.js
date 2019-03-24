import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
	state = {
		qiuz: [] 
	}

	render() {
		return (
			<div className={classes.Quiz}>
				<div className = {classes.QuizWrapper}>
					<h1> Quiz title</h1>
					<ActiveQuiz />
				</div>
			</div>
		)
	}
}

export default Quiz