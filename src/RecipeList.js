import salmonbroc from './instant-pot-salmon.jpg'
import chickenbroc from './chickenbroc.jpg'
import tilapiabroc from './til-bro-rice.jpg'
import burger from './burger.jpg'
import asianmeatloaf from './asianmeatloaf.jpg'
import steakasp from './steak-asp.jpg'
import steakcar from './steak-car.jpg'
import steakbro from './steak-bro.jpg'
import pesto from './pesto.jpg'
import griltil from './grilled-tilapia.jpg'
import ballsrice from './balls-rice.jpg'
import ballspasta from './balls-pasta.jpg'
import tilasppot from './til-asp-pot.jpg'
import chickmush from './chick-mush.jpg'
import misosalmon from './miso-salmon.jpg'
import misomash from './miso-mash.jpg'
import misochick from './miso-chick.jpg'
import chickspin from './chick-spin.jpg'
import salmush from './salmon-mush.jpg'
import friedchick from './fried-chick.jpg'


export const recipeList = [
	{ 	name: 'Baked Salmon',
		sides: 'w/ Broccoli and Rice',
		ingredients: [ 'salmon', 'broccoli', 'rice' ],
		img: salmonbroc,
		prep: '20 min',
		cook: '15 min',
		description: [	'1) Preheat oven to 400 degrees', 
						'2) Season salmon fillet with salt, pepper, garlic powder, oregano and rosemary', 
						'3) Drizzle olive oil over the broccoli in a bowl and then season lightly with salt and pepper',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Bake all together for 20 min']
	},
	{	name: 'Baked Chicken',
		sides: 'w/ Broccoli and Rice',
		ingredients: [ 'chicken', 'broccoli', 'rice'],
		img: chickenbroc,
		prep: '20 min',
		cook: '25 min',
		description: [	'1) Preheat oven to 400 degrees',
						'2) Season chicken breast with salt and pepper, then drizzle and rub with olive oil',
						'3) Drizzle olive oil over the broccoli in a bowl and then season lightly with salt and pepper',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Bake all together for 20 min']
	},
	{	name: 'Baked Tilapia',
		sides: 'w/ Broccoli and Rice',
		ingredients: ['tilapia', 'broccoli', 'rice'],
		img: tilapiabroc,
		prep: '10 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 425 degrees',
						'2) Chop broccoli, mix in bowl with light salt, pepper and olive oil',
						'3) Season salmon fillet with light salt, pepper and olive oil',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Bake all together for 20 minutes'
		]
	},
	{	name: 'Hamburgers',
		sides: 'w/ Baked Fries',
		ingredients: ['beef', 'potatoes', 'bread'],
		img: burger,
		prep: '20 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 450 degrees',
						'2) Chop potatoes into desired fry shape, season in bowl with salt, pepper and olive oil',
						'3) Mix one pound of ground beef with 1/2 tsp of salt and 1/2 tsp of pepper',
						'4) Shape ground beef into desired number of flat patties',
						'5) Bake fries for 20-25 minutes',
						'6) Heat skillet to medium high heat',
						'7) Cook burgers for 4 minutes on each side'
						
		]
	},
	{	name: 'Asian Meatloaf',
		sides: 'w/ Sauteed Bok Choy and Mashed Potatoes',
		ingredients: ['beef', 'bokchoy', 'potatoes'],
		img: asianmeatloaf,
		prep: '20 min',
		cook: '18 min',
		description: [	'1) Preheat oven to 450 degrees and set a pot of water to boil',
						'2) Chop potatoes into cubes and set aside',
						'3) Chop bok choy into square pieces and set aside',
						'4) Season ground beef with salt, pepper and chili flakes (if possible, add mixture of sambal oelek, hoisin sauce and miso paste)',
						'5)	Bake meatloaf and boil potatoes simultaneously for 16-18 minutes',
						'6) While they are cooking, heat a skillet to medium high heat',
						'7) Sautee bok choy in oil for 4 minutes, season with salt and pepper',
						'8) Mash potatoes and serve'
		]
	},
	{	name: 'Grilled Steak',
		sides: 'w/ Mashed Potatoes and Asparagus',
		ingredients: ['steak', 'potatoes', 'asparagus'],
		img: steakasp,
		prep: '15 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 400 degrees and set a pot of water to boil',
						'2) Chop off bottoms of asparagus, then season with olive oil, salt and pepper',
						'3) Chop potatoes into cubes and set aside',
						'4) Bake asparagus for 18 minutes',
						'5) Boil potatoes for 15 minutes, then mash and season with butter, salt and pepper',
						'6) Heat skillet on medium high heat',
						'7) Drizzle olive oil in pan and sear the steak for 4 minutes on both sides'
		]
	},
	{	name: 'Grilled Steak',
		sides: 'w/ Mashed Potatoes and Carrots',
		ingredients: ['steak', 'potatoes', 'carrots'],
		img: steakcar,
		prep: '15 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 400 degrees and set a pot of water to boil',
						'2) Chop carrots into desired shape, then season with olive oil, salt and pepper',
						'3) Chop potatoes into cubes and set aside',
						'4) Bake carrots for 20 minutes',
						'5) Boil potatoes for 15 minutes, then mash and season with butter, salt and pepper',
						'6) Heat skillet on medium high heat',
						'7) Drizzle olive oil in pan and sear the steak for 4 minutes on both sides'
		]
	},
	{	name: 'Grilled Steak',
		sides: 'w/ Rice and Broccoli',
		ingredients: ['steak', 'rice', 'broccoli'],
		img: steakbro,
		prep: '15 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 400 degrees',
						'2) Chop broccoli into pieces, then season with olive oil, salt and pepper',
						'3) Bake broccoli for 20 minutes',
						'4) Mix rice and water in a pot, heat on high until boiling, then immediately turn heat down to simmer',
						'5) Heat skillet on medium high heat',
						'6) Drizzle olive oil in pan and sear the steak for 4 minutes on both sides'
		]
	},
	{	name: 'Chicken Pesto',
		sides: 'w/ Fettuccini and Broccoli',
		ingredients: ['chicken', 'pasta', 'broccoli'],
		img: pesto,
		prep: '15 min',
		cook: '30 min',
		description: [	'(Requires store-bought pesto)',
						'1) Preheat oven at 400 degrees and set a pot of water to boil',
						'2) Chop broccoli into pieces, then season with olive oil, salt, and pepper',
						'3) Chop chicken breast into cubes, then season with olive oil, salt and pepper',
						'4) Boil pasta for box-specified time, then drain in a colander',
						'5) Bake chicken and broccoli for 22 minutes',
						'6) Mix pasta, cooked chicken, broccoli and pesto sauce together. Optional: Add pinenuts'
		]
	},
	{	name: 'Tumeric Tilapia',
		sides: 'w/ Rice and Asparagus',
		ingredients: ['tilapia', 'rice', 'asparagus'],
		img: griltil,
		prep: '15 min',
		cook: '20 min',
		description: [	'(Requires tumeric)',
						'1) Preheat oven to 425 degrees',
						'2) Chop ends of asparagus off, set aside',
						'3) Season asparagus with salt, pepper and olive oil',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Season tilapia fillet with salt, pepper, tumeric and olive oil',
						'6) Bake fish and vegetables for 16 minutes'
		]
	},
	{	name: 'Meatballs',
		sides: 'w/ Broccoli and Rice',
		ingredients: ['beef', 'broccoli', 'rice'],
		img: ballsrice,
		prep: '20 min',
		cook: '20 min',
		description: [	'1) Preheat oven to 425 degrees',
						'2) Chop broccoli into pieces, set aside in bowl',
						'3) Season broccoli with salt, pepper, and olive oil',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Season ground beef with salt and pepper',
						'6) Shape into meatballs and place in a baking dish',
						'7) Bake broccoli and meatballs for 20 minutes'
		]
	},
	{	name: 'Meatballs',
		sides: 'w/ Broccoli and Pasta',
		ingredients: ['beef', 'broccoli', 'pasta'],
		img: ballspasta,
		prep: '20 min',
		cook: '30 min',
		description: [	'1) Preheat oven to 425 degrees',
						'2) Chop broccoli into pieces, set aside in bowl',
						'3) Season broccoli with salt, pepper, and olive oil',
						'4) Set pasta to boil with water, cook until al dente',
						'5) Season ground beef with salt and pepper',
						'6) Shape into meatballs and place in a baking dish',
						'7) Bake broccoli and meatballs for 20 minutes'
		]
	},
	{	name: 'Fried Tilapia',
		sides: 'w/ Asparagus and Roasted Potatoes',
		ingredients: ['tilapia', 'asparagus', 'potatoes'],
		img: tilasppot,
		prep: '25 min',
		cook: '45 min',
		description: [  '1) Preheat oven to 400 degrees', 
						'2) Chop ends of asparagus and potatoes into cubes, season in bowl with salt, pepper and olive oil',
						'3) Roast potatoes and asparagus for 25 minutes',
						'4) Season tilapia fillet with salt, pepper, garlic powder, oregano and rosemary', 
						'5) Heat olive oil in skillet at medium high',
						'6) Fry tilapia 3 minutes on both sides'
		]
	},
	{	name: 'Grilled Chicken',
		sides: 'w/ Mushrooms and Roasted Potatoes',
		ingredients: ['chicken', 'mushrooms', 'potatoes'],
		img: chickmush,
		prep: '25 min',
		cook: '35 min',
		description: [  '1) Preheat oven to 400 degrees', 
						'2) Slice mushrooms and cube potatoes, season in bowl with salt, pepper and olive oil',
						'3) Set aside mushrooms',
						'4) Roast potatoes for 25 minutes',
						'5) Season chicken breast with salt, pepper, and oregano', 
						'6) Heat olive oil in skillet at medium high',
						'7) Grill mushrooms for 4 minutes, set aside',
						'8) Grill chicken for 4 minutes on both sides',
						'9) Combine and serve'
		]
	},
	{	name: 'Miso Salmon',
		sides: 'w/ Bok Choy and Rice',
		ingredients: ['salmon', 'bokchoy', 'rice'],
		img: misosalmon,
		prep: '20 min',
		cook: '25 min',
		description: [	'(Requires miso marinade)',
						'1) Preheat oven to 400 degrees', 
						'2) Season salmon fillet with salt, pepper and miso marinade', 
						'3) Chop bok choy, then season lightly with salt, pepper and olive oil',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Bake all together for 20 min'
		]
	},
	{	name: 'Miso Salmon',
		sides: 'w/ Asparagus and Mashed Potatoes',
		ingredients: ['salmon', 'asparagus', 'potatoes'],
		img: misomash,
		prep: '20 min',
		cook: '25 min',
		description: [	'(Requires miso marinade)',
						'1) Preheat oven to 400 degrees', 
						'2) Season salmon fillet with salt, pepper and miso marinade', 
						'3) Chop asparagus, then season lightly with salt, pepper and olive oil',
						'4) Boil potatoes for 20 min',
						'5) Bake salmon and asparagus for 20 min',
						'6) Mash potatoes and serve'
		]
	},
	{	name: 'Miso Chicken',
		sides: 'w/ Bok Choy and Rice',
		ingredients: ['chicken', 'bokchoy', 'rice'],
		img: misochick,
		prep: '20 min',
		cook: '30 min',
		description: [	'(Requires miso marinade)',
						'1) Preheat oven to 400 degrees', 
						'2) Season chicken breast with salt, pepper and miso marinade', 
						'3) Chop Bok Choy, then season lightly with salt, pepper and olive oil',
						'4) Set rice to boil with water, once boiling lower to simmer until cooked',
						'5) Bake chicken and bok choy for 20 min'
		]
	},
	{	name: 'Grilled Chicken',
		sides: 'w/ Spinach and Pasta',
		ingredients: ['chicken', 'spinach', 'pasta'],
		img: chickspin,
		prep: '20 min',
		cook: '20 min',
		description: [ 	'1) Season chicken breast with salt, pepper, and oregano', 
						'2) Heat olive oil in skillet at medium high',
						'3) Grill spinach for 2 minutes, set aside',
						'4) Grill chicken for 4 minutes on both sides',
						'5) Boil pasta until al dente',
						'6) Combine and serve'
		]
	},
	{	name: 'Grilled Salmon',
		sides: 'w/ Asparagus, Mushrooms and Rice',
		ingredients: ['salmon', 'asparagus', 'mushrooms', 'rice'],
		img: salmush,
		prep: '25 min',
		cook: '20 min',
		description: [ 	'1) Chop ends of asparagus and slice mushrooms, season with salt, pepper and olive oil, set aside',
						'2) Season salmon fillet with salt, pepper, chili flakes and oregano', 
						'3) Heat olive oil in skillet at medium high',
						'4) Grill salmon for 3 minutes on both sides',
						'5) Bake asparagus and mushrooms for 18 min',
						'6) Set rice to boil with water, once boiling lower to simmer until cooked',
						'7) Combine and serve'
		]
	},
	{	name: 'Fried Chicken',
		sides: 'w/ Mashed Potatoes and Gravy',
		ingredients: ['chicken', 'potatoes'],
		img: friedchick,
		prep: '30 min',
		cook: '25 min',
		description: [  '(Requires store-bought gravy)',
						'1) Chop potatoes into cubes',
						'2) Boil potatoes in water for 20 min',
						'3) Season chicken breast with salt, pepper, garlic powder, oregano and rosemary', 
						'4) Heat olive oil in skillet at medium high',
						'5) Fry chicken 4 minutes on both sides'
		]
	}
]