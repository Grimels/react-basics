import React from 'react';

export default class List extends React.Component {
	renderItem(element) {
		return (
			<li key={element.id}>
				<h3>{element.hero}</h3>
				<img src={element.avatar} alt="" />
				<h4>{element.name}</h4>
				<p>{element.description}</p>
			</li>
		);
	}

	render() {
		const {
			options = [],
			containerTag = 'ul',
			itemRenderer = this.renderItem
		} = this.props;
		let listItems = options.map(itemRenderer);

		switch (containerTag) {
		case 'div':
			return <div className={this.props.className}>{listItems}</div>;
		case 'ul':
			return <ul>{listItems}</ul>;
		default:
			throw Error('Wrong container tag!');
		}
	}
}
