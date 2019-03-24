import React from 'react';
import classes from './AnswerItem.css';
//Отображение ответов вопросы, передаются в AnswerList

const AnswerItem = props => {
	return (
		<li className={classes.AnswerItem}>
			{props.answer.text}
		</li>
		)
}

export default AnswerItem