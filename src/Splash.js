import React from 'react';
import styles from './AppR.module.css';
import clear from './images/Clear.svg';
import thunder from './images/Thunderstorm.svg';
import clearNight from './images/ClearNight.svg';

export class Splash extends React.Component {
	constructor(props){
		super(props); 
	}
	
	render(){
		window.scrollTo(0,0);
		return (
			<div>
			<div className={styles.standardTemp}>
				<div className={styles.splash}>
					<h1>Welcome to RainCheck!!</h1>
					<h2>The app to check your weather.</h2>
					<div><img src={clear}/><p>Find current weather information in your city.</p></div>
					<div><img src={thunder}/><p>Get in-depth barometric readings on a variety of cities.</p></div>
					<div><img src={clearNight}/><p>Look into the future and see your 5-day forecast.</p></div>
				</div>
			</div>
			<div className={styles.footer}>
				Made by JAFernandez&copy;
			</div>
			</div>
		);
	}
}