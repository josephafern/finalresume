import React from 'react';
import logo from './logo.svg';
import fruits from './fruits-main.png'
import styles from './AppM.module.css';
import {CurrentPageM} from './CurrentPageM.js';
import {ReturnToRes} from './ReturnToRes.js';

export class MealSearch extends React.Component {
  constructor(props){
  	super(props);
  }
  
  render(){
  	return (
  	<div>
  			<ReturnToRes 	changeState={this.props.changeState}
  							/>
    <div className={styles.App}>
    	<CurrentPageM 	changeState={this.props.changeState}
    					inventoryDisplay={this.props.inventoryDisplay}
    					currentPageM={this.props.currentPageM}
    					selectedRecipe={this.props.selectedRecipe}
    					foodInventory={this.props.foodInventory}
    					possibleRecipes={this.props.possibleRecipes}/>
    </div>
    </div>
  	);
  }  
}

