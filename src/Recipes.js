import React from 'react';
import styles from './AppM.module.css';

export class Recipes extends React.Component{
	constructor(props){
		super(props);
		this.resetPage = this.resetPage.bind(this);
		this.selectRecipe = this.selectRecipe.bind(this);
	}
	
	resetPage(inventory){
		this.props.changeState({currentPageM: 'InventoryCalc', inventoryDisplay: inventory, foodInventory: [], possibleRecipes: []});
	}
	
	selectRecipe(recipe){
		this.props.changeState({currentPageM: 'SelectedRecipe', selectedRecipe: recipe});
	}
	
	render(){
		window.scrollTo(0,0);
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
			<div>
			<header className={styles.recipeHead}>Pantryfied
			<div className={`${styles.itemBox} ${styles.reset}`} onClick={()=>{this.resetPage(inventoryDefault)}}>Reset</div> 
    		</header>
    		<main className={styles.recipes}>
    		<div className={styles.recipeContainer}>
    		{this.props.possibleRecipes.map(recipe=>{
    			return (<div className={styles.recipe} onClick={()=>{this.selectRecipe(recipe)}}>
    				<img src={recipe.img} className={styles.recipePhoto}/>
    				<div className={styles.description}>
    				<h2>{recipe.name}</h2>
    				<p>{recipe.sides}</p>
    				
    				</div>
    			</div>);})}
    		</div>
    		</main>
    		</div>
		);
	}
}