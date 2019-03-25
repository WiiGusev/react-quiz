import React from 'react';
import classes from './AnswerItem.css';
//Отображение ответов вопросы, передаются в AnswerList

const AnswerItem = props => { 
	// console.log(props);

	return (
		<li 
			className={classes.AnswerItem} 
			onClick={()=> props.onAnswerClick(props.answer.id)}
		>
			{props.answer.text}

		</li>

		)
}

export default AnswerItem