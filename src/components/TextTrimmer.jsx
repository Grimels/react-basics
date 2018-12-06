import React from 'react';

export default class TextTrimmer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { flag: false };
	}

	clickedOn = event => {
		this.setState({ flag: !this.state.flag });
		event.preventDefault();
	};

	render() {
		const { text = 'lorem', maxLength = 100 } = this.props;

		if (text.length < maxLength) return <p>{text}</p>;
		if (this.state.flag) {
			return (
				<p>
					{text}
					<a onClick={this.clickedOn} href="#">
						{' '}
						{'<<<'}
					</a>
				</p>
			);
		} else {
			return (
				<p>
					{text.substr(0, maxLength - 3)}
					<a onClick={this.clickedOn} href="#">
						{' '}
						{'>>>'}
					</a>
				</p>
			);
		}
	}
}
