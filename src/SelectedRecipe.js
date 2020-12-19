import React from 'react';
import styles from './AppM.module.css';
import arrow from './black-arrow.png'

const inventoryDefaul = {
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

export class SelectedRecipe extends React.Component {
	constructor(props){
		super(props);	
		this.resetPage = this.resetPage.bind(this);
		this.lastPage = this.lastPage.bind(this);
	}
	
	resetPage(inventory){
		this.props.changeState({currentPageM: 'InventoryCalc', selectedRecipe: {}, inventoryDisplay: inventory, foodInventory: [], possibleRecipes: []});
	}
	
	lastPage(){
		this.props.changeState({currentPageM: 'Recipes', selectedRecipe: {}});
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
			<div>
				<header className={styles.selectedHead}>Pantryfied
					
					<img src={arrow} className={styles.arrow} onClick={this.lastPage}/>
					<div className={`${styles.itemBox} ${styles.reset}`} onClick={()=>{this.resetPage(inventoryDefault)}}>Reset</div> 
					
    			</header>
				<main className={styles.selRec}>
				<div className={styles.singleRecipeContainer}>
					<div className={styles.singleRecipe}>
						<div className={styles.description}>
						<h1>{this.props.selectedRecipe.name}</h1>
						<p>{this.props.selectedRecipe.sides}</p>
						</div>
						<img src={this.props.selectedRecipe.img} className={styles.recipePhotoMain}/>
						<div className={styles.singleSummary}>
							<h3>Prep time: <br/>{this.props.selectedRecipe.prep}</h3>
							<h3>Cook time: <br/>{this.props.selectedRecipe.cook}</h3>
						</div>
						<div>
						{this.props.selectedRecipe.description.map(item=>{
							return (<p>{item}</p>);
						})}
						</div>
					</div>
				</div>
				</main>
			</div>
		);
	}
}