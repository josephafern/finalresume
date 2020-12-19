import React from 'react';
import {findWeatherCode, timeOfDay, dayOfWeek, fiveDayCode} from './externalFuncsR.js';
import selector from './navbar-selector.png';
import styles from './AppR.module.css';

let weatherCode;
let sunTracker;

export class Weather extends React.Component {
	constructor(props){
		super(props);
		this.changeVisibility = this.changeVisibility.bind(this);
	}
	
	changeVisibility(){
		this.props.changeState({showFiveDay: !this.props.showFiveDay});
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
	}
	
	render(){
		
		sunTracker = timeOfDay(this.props.cityInfo[0].sys.sunrise, this.props.cityInfo[0].sys.sunset, this.props.cityInfo[0].timezone);
		weatherCode = findWeatherCode(this.props.cityInfo[0].weather[0].main, this.props.cityInfo[0].weather[0].description, sunTracker.dayOrNight);
		return (
			<div>
			<div className={this.props.showNavbar?`${styles.main} ${styles.smooth}`:styles.main}>
				<div className={styles.weatherHeader}>
					<img src={weatherCode}/>
					<h1>{Math.floor(this.props.cityInfo[0].main.temp)}&#8457;<br/><p>Feels like {Math.floor(this.props.cityInfo[0].main.feels_like)}&#8457;</p></h1>
					<div className={styles.weatherInfo}><h2>The current weather for {this.props.cityInfo[0].name} is {this.props.cityInfo[0].weather[0].description}.</h2><h3>Local time: {sunTracker.current}</h3><p>Sunrise: {sunTracker.sunrise}AM</p><p>Sunset: {sunTracker.sunset}PM</p></div>
				</div>		
				<div className={styles.inDepthContainer}>
					<h2>In-Depth Look:</h2>
					<h3>Pressure: </h3><p>{this.props.cityInfo[0].main.pressure} mb</p>
					<h3>Humidity: </h3><p>{this.props.cityInfo[0].main.humidity}%</p>
					<h3>Wind Speed: </h3><p>{this.props.cityInfo[0].wind.speed}mph facing {this.props.cityInfo[0].wind.deg===undefined?'0':this.props.cityInfo[0].wind.deg}&#176;</p>
				</div>
				<div className={styles.fiveDayContainer}>
					<div className={this.props.showFiveDay?`${styles.fiveDayOverall} ${styles.smooth}`:styles.fiveDayOverall}>
					<div className={styles.header}>
						<img id={styles.selector} src={selector} onClick={this.changeVisibility}/>
						5-Day Forecast
					</div>
					<div className={styles.days}>
						{this.props.cityInfo[1].list.map((obj, index)=>{
							return (<div className={styles.daysItem} key={index}>
									<p>{dayOfWeek(obj.day)}</p>
									<img src={fiveDayCode(obj.weather)}/>
									<div className={styles.temps}><span>High: </span><p>{Math.floor(obj.high)}</p></div>
									<div className={styles.temps}><span>Low: </span><p>{Math.floor(obj.low)}</p></div>
									</div>
							);
						})}
					</div>
					</div>
					
				</div>
				<div className={`${styles.footer} ${styles.two}`}>
						Made by JAFernandez&copy;
					</div>
			</div>
			<div id={styles.rightnow}></div>
			<div id={styles.indepth} className={styles.indepth} ></div>
			<div id={styles.upcoming} className={styles.upcoming}></div>
			</div>
		);
	}
}