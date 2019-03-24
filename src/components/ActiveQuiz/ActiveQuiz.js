import React from 'react';
import classes from './ActiveQuiz.css';
import AnswerList from './AnswerList/AnswerList';
//Отображение текущего вопроса
const ActiveQuiz = props => (
	<div className ={classes.ActiveQuiz}>
		<p className={classes.Question}>
			<span>
				<strong> 2. </strong>
				&nbsp; Вопрос
			</span>

			<small> 4 из 12 </small>
		</p>
		<AnswerList answers={props.answers}/>
	</div>
)

export default ActiveQuiz