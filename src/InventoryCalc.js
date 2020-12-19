import React from 'react';
import fruits from './fruits-main.png'
import styles from './AppM.module.css';
import {findRecipeList} from './externalFuncsM.js'
import {recipeList} from './RecipeList.js'

let possibleRecipeList;

export class InventoryCalc extends React.Component {
	constructor(props){
		super(props);
		this.itemSelection = this.itemSelection.bind(this);
		this.findRecipes = this.findRecipes.bind(this);
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
	}
	
	itemSelection(item){
		if (!this.props.foodInventory.includes(item)){
			this.props.foodInventory.push(item);
		} else {
			this.props.foodInventory.splice(this.props.foodInventory.indexOf(item), 1);
		}
		this.props.inventoryDisplay[item] = !this.props.inventoryDisplay[item];
		this.props.changeState({inventoryDisplay: this.props.inventoryDisplay, foodInventory: this.props.foodInventory});
	}
	
	findRecipes(){
		possibleRecipeList = findRecipeList(recipeList, this.props.foodInventory);
		this.props.changeState({currentPageM: 'Recipes', possibleRecipes: possibleRecipeList});
	}
	
	render(){
		return (
		<div>
    	<main className={styles.invCalc}>
    	<header>Pantryfied 
    	</header>
    	
    	<div className={styles.itemCountContainer}>
		<h1 className={styles.headhead}>The best place to find delicious, easy recipes for what you have on hand!</h1>
    	<p>Select the items you currently have:</p>
    	<div className={styles.itemCount}>
    		<h1>Meat</h1>
    		<div className={this.props.inventoryDisplay.chicken?`${styles.itemBox} ${styles.check}`:styles.itemBox} onClick={()=>this.itemSelection('chicken')}>Chicken Breast</div>
    		<div className={(this.props.inventoryDisplay.beef?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('beef')}>Ground Beef</div>
    		<div className={(this.props.inventoryDisplay.steak?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('steak')}>Steak</div>
    		<div className={(this.props.inventoryDisplay.tilapia?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('tilapia')}>Tilapia</div>
    		<span><div className={(this.props.inventoryDisplay.salmon?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('salmon')}>Salmon</div></span>
    	</div>
    	<div className={styles.itemCount}>
    		<h1>Vegetables</h1>
    		<div className={(this.props.inventoryDisplay.carrots?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('carrots')}>Carrots</div>
    		<div className={(this.props.inventoryDisplay.broccoli?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('broccoli')}>Broccoli</div>
    		<div className={(this.props.inventoryDisplay.asparagus?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('asparagus')}>Asparagus</div>
    		<div className={(this.props.inventoryDisplay.mushrooms?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('mushrooms')}>Mushrooms</div>
    		<div className={(this.props.inventoryDisplay.bokchoy?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('bokchoy')}>Bok Choy</div>
    		<div className={(this.props.inventoryDisplay.spinach?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('spinach')}>Spinach</div>
    	</div>
    	<div className={styles.itemCount}>
    		<h1>Starches</h1>
    		<div className={(this.props.inventoryDisplay.pasta?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('pasta')}>Pasta</div>
    		<div className={(this.props.inventoryDisplay.potatoes?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('potatoes')}>Potatoes</div>
    		<div className={(this.props.inventoryDisplay.bread?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('bread')}>Bread</div>
    		<div className={(this.props.inventoryDisplay.rice?`${styles.itemBox} ${styles.check}`:styles.itemBox)} onClick={()=>this.itemSelection('rice')}>Rice</div>
    	</div>
    	<div className={styles.searchBtn} onClick={this.findRecipes}>Search!</div>
    	</div>
    	<img src={fruits} className={styles.fruitsMain}/>
    	</main>
    	
    	</div>
		);
	}
}
