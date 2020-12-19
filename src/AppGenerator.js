import React from 'react';

export class AppGenerator extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			switch(this.props.currentApp){
				case 'raincheck':
					return <RainCheck />;
				case 'mealsearch':
					return <MealSearch />;
			}
		);
	}
}