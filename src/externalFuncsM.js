export const findRecipeList = (recipeList, foodInventory) => {
	return recipeList.filter(items=>
		 items.ingredients.every(item=>
			 foodInventory.includes(item)
		)
	);
}

export const inventoryDefault = {
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