import React from 'react';
import {Weather} from './Weather.js';
import {Splash} from './Splash.js';
import {Broken} from './Broken.js';

export class CurrentPageR extends React.Component {
	constructor(props){
		super(props); 
	}
	
	render(){
		switch (this.props.currentPage){
			case 'splash':
				return <Splash/>;
			case 'current':
				return <Weather cityInfo={this.props.cityInfo} showFiveDay={this.props.showFiveDay} changeState={this.props.changeState} showNavbar={this.props.showNavbar}/>;
			case 'broken':
				return <Broken/>;
		}
	}
}