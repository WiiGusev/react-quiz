import React from 'react';
import classes from './MenuToggle.css';

const MenuToggle = props => {
	const cls = [
	classes.MenuToggle,
	'fa'
	]

	if (props.isOpen) {
		cls.push('fa-times')
		cla.push(classes.open)
	} else {
		cls.push('fa-bars')
	}

	return (
		<i className= {cls.join(' ')}
		onClick{props.onToggle}
		/>
	)
}

export default MenuToggle