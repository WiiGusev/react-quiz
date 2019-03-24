import React from 'react';
import classes from './AnswerList.css';
import AnswerItem from './AnswerItem/AnswerItem';
//Получение массива ответов и вывод на экран
const AnswerList = props => (
	<ul className={classes.AnswerList}>
		{ props.answers.map((answer, index) => {
			return (
				<AnswerItem
					key={index} 
					answer={answer}
				/>
				)
		})
	}
	</ul>
)
export default AnswerList