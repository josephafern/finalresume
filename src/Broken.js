import React from 'react';
import styles from './AppR.module.css';
import sadFace from './images/sad-face.png';

export class Broken extends React.Component {
	constructor(props){
		super(props); 
	}
	
	render(){
		window.scrollTo(0,0);
		return (
			<div>
			<div className={styles.standardTemp}>
				<div className={styles.broken}>
				<img src={sadFace}/>
				Oops! Sorry. We couldn't find that city. Please try another one.
				</div>
			</div>
			<div className={styles.footer}>
				Made by JAFernandez&copy;
			</div>
			</div>
		);
	}
}