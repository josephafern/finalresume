import React from 'react';
import {InventoryCalc} from './InventoryCalc.js';
import {Recipes} from './Recipes.js';
import {SelectedRecipe} from './SelectedRecipe.js';

export class CurrentPageM extends React.Component {
	constructor(props){
		super(props); 
	}
	
	render(){
		switch (this.props.currentPageM){
			case 'InventoryCalc':
				return <InventoryCalc 	changeState={this.props.changeState}
    									inventoryDisplay={this.props.inventoryDisplay}
    									foodInventory={this.props.foodInventory}/>;
			case 'Recipes':
				return <Recipes	changeState={this.props.changeState}
    							possibleRecipes={this.props.possibleRecipes}
    							foodInventory={this.props.foodInventory}
    							inventoryDisplay={this.props.inventoryDisplay}/>;
			case 'SelectedRecipe':
				return <SelectedRecipe	changeState={this.props.changeState}
    									selectedRecipe={this.props.selectedRecipe}/>;
		}
	}
}