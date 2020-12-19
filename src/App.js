import React from 'react';
import logo from './logo.svg';
import seal from './seal-light-black.png';
import {Resume} from './Resume.js';
import {RainCheck} from './RainCheck.js';
import {MealSearch} from './MealSearch.js';


const defaultCityInfo =	[
	{	name: '',
  		main: {
  			temp: ''
  		},
  		weather: [{
  			main: 'Blank'
  		}],
  		sys: {
  			sunrise: '',
  			sunset: ''
  		},
  		cod: ''
  	},
  	{	list: []
  	
  	}
];

export class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentApp: 'resume',
			showNavbar: false,
  			showFiveDay: false,
  			currentTab: 'upcoming',
  			currentPage: 'splash',
  			cityInfo: defaultCityInfo,
  			inventoryDisplay: {
				'chicken': false,
				'beef': false,
				'steak': false,
				'tilapia': false,
				'salmon': false,
				'carrots': false,
				'broccoli': false,
				'asparagus': false,
				'mushrooms': false,
				'bokchoy': false,
				'spinach': false,
				'pasta': false,
				'potatoes':false,
				'bread': false,
				'rice': false
			},
  			foodInventory: [],
  			possibleRecipes: [],
  			currentPageM: 'InventoryCalc',
  			selectedRecipe: {}
		}
		this.changeState = this.changeState.bind(this);
	}
	
	changeState(newState){
		this.setState(newState);
	}
	
	render(){
		switch(this.state.currentApp){
			case 'resume':
				return <Resume changeState={this.changeState}/>;
			case 'raincheck':
				return <RainCheck	changeState={this.changeState}
									showNavbar={this.state.showNavbar}
									showFiveDay={this.state.showFiveDay}
									currentTab={this.state.currentTab}
									currentPage={this.state.currentPage}
									cityInfo={this.state.cityInfo}
				/>;
			case 'mealsearch':
				return <MealSearch 	changeState={this.changeState}
									inventoryDisplay={this.state.inventoryDisplay}
									foodInventory={this.state.foodInventory}
									possibleRecipes={this.state.possibleRecipes}
									currentPageM={this.state.currentPageM}
									selectedRecipe={this.state.selectedRecipe}/>; 
		}
	}
  
}
