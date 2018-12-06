import React from 'react';
import List from './List';
import TextTrimmer from './TextTrimmer';
import options from '../utils/heroes';

const descriptionOnClick = event => {
	console.log('hello');
};

const containerTag = 'div';
const heroRender = element => {
	return (
		<div className="hero" key={element.id}>
			<h1>{element.hero}</h1>
			<h2>{element.name}</h2>
			<img src={element.avatar} alt="" />
			<TextTrimmer text={element.description} />
		</div>
	);
};

class Home extends React.Component {
	render() {
		return (
			<div>
				<List
					options={options}
					containerTag={containerTag}
					itemRenderer={heroRender}
					className="container"
				/>
			</div>
		);
	}
}

//const Home = React.createElement('h1', null, 'hello');

export default Home;
