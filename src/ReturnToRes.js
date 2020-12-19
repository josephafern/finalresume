import React from 'react';

export class ReturnToRes extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		let inventoryDefault = {
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
		}	
		return (
			<div className='returnToRes' onClick={()=>this.props.changeState(
				{currentApp: 'resume',
				showNavbar: false,
  				showFiveDay: false,
  				currentTab: 'upcoming',
  				currentPage: 'splash',
  				cityInfo: this.props.defaultCityInfo,
  				foodInventory: [],
  				possibleRecipes: [],
  				currentPageM: 'InventoryCalc',
  				selectedRecipe: {},
  				inventoryDisplay: inventoryDefault})}>
				<div>Return to resume</div>
			</div>
		);
	}
}