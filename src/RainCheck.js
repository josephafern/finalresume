import React from 'react';
import styles from './AppR.module.css';
import {NavBar} from './NavBar.js';
import {CurrentPageR} from './CurrentPageR.js';
import {formatFiveDay} from './externalFuncsR.js';
import {ReturnToRes} from './ReturnToRes.js';

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

export class RainCheck extends React.Component {
	constructor(props){
  		super(props);
  		this.searchCity = this.searchCity.bind(this);
  	}
  
  	searchCity(cityName){
  		let cityInformation = ['https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=imperial&appid=0a4fef9e6eefaa836135cf2a6805480b', 
  							'https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&units=imperial&appid=0a4fef9e6eefaa836135cf2a6805480b'];
  		if (cityName!==this.props.cityInfo[0].name){
  			Promise.all(cityInformation.map(url=>fetch(url).then(res => res.json()))).then(([current, fiveDay]) => {
  				if (current.cod!=="404"){
  					var currentFiveDay = fiveDay;
  					currentFiveDay.list = formatFiveDay(currentFiveDay);
          			this.props.changeState({cityInfo: [current, currentFiveDay], currentPage: 'current'});
          		} else {
          			this.props.changeState({cityInfo: defaultCityInfo, currentPage: 'broken', showNavbar: false});
          		}
  			});
  		}
  	}
  
  	render(){
  		return (
  			<div>
  			<ReturnToRes 	changeState={this.props.changeState}
  							defaultCityInfo={defaultCityInfo}/>
			<div className={styles.App}>
    		<NavBar showNavbar={this.props.showNavbar} 
    				currentTab={this.props.currentTab} 
    				changeState={this.props.changeState}
    				searchCity={this.searchCity}
    				currentPage={this.props.currentPage}/>
    		<CurrentPageR 	currentPage={this.props.currentPage} 
    						cityInfo={this.props.cityInfo}
    						showFiveDay={this.props.showFiveDay}
    						changeState={this.props.changeState}
    						showNavbar={this.props.showNavbar}/>
   			</div>
   			</div>
 		);
  	}
}
