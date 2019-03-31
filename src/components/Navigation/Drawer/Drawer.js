import React, {Component} from 'react';
import classes from './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
	{to: '/', label: 'Список', exact: true},
	{to: '/auth', label: 'Авторизация', exact: false},
	{to: '/quiz-creator', label: 'Создать тест', exact: false}
]

class Drawer extends Component {
	renderLinks() {
		return links.map((link, index) => {
			return (
				<li key={index}>
			<a>link {link}</a>
			</li>
		)})
	}

	render() {
		const cls = [classes.Drawer]

		if (!this.props.isOpen) {
			cls.push(classes.close)
		}
		return (
			<React.Fragment>
				<nav className={cls.join(' ')}>
					<ul> 
						{ this.renderLinks() }
					</ul>
				</nav>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
			</React.Fragment>
		)
	}
}

export default Drawer