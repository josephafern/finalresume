import React from 'react';
import selector from './navbar-selector.png';
import srch from './mag-glass.png';
import styles from './AppR.module.css';

var cityName;

export class NavBar extends React.Component {	
	
	constructor(props){
		super(props);
		this.changeVisibility = this.changeVisibility.bind(this);
		this.handleTabChange = this.handleTabChange.bind(this);
		this.handleCitySearch = this.handleCitySearch.bind(this);
		this.pressedEnter = this.pressedEnter.bind(this);
	}
	
	changeVisibility(){
		this.props.changeState({showNavbar: !this.props.showNavbar});
	}
	
	handleTabChange(tabName){
		this.props.changeState({currentTab: tabName});
	}
	
	handleCitySearch(){
		this.props.searchCity(cityName.value);
	}
	
	pressedEnter(event){
		if (event.key==='Enter'){
			this.props.searchCity(cityName.value);
		}
	}
	
	render(){
		return (<div className={this.props.showNavbar?`${styles.overall} ${styles.smooth}`:styles.overall}>
				<div className={styles.heading}>
					<img id={styles.selector} src={selector} onClick={this.props.currentPage==='current'?this.changeVisibility:()=>{}}/>
					<div className={styles.title}><p>Rain</p><p className={styles.one}>Check</p></div>
					
					<input placeholder='Ex: San Francisco, US' ref={(input)=>{cityName=input;}} onKeyPress={this.pressedEnter}/>
					<div onClick={this.handleCitySearch}><img className={styles.searchBtn} src={srch}/></div>
					
				</div>
				<div className={styles.choices}>
					<a href='#rightnow'><div onClick={(this.props.currentTab!=='rightnow')?()=>this.handleTabChange('rightnow'):()=>{}}>Right Now</div></a>
					<a href='#indepth'><div onClick={(this.props.currentTab!=='indepth')?()=>this.handleTabChange('indepth'):()=>{}}>In-Depth</div></a>
					<a href='#upcoming'><div onClick={(this.props.currentTab!=='upcoming')?()=>this.handleTabChange('upcoming'):()=>{}}>Upcoming</div></a>
				</div>
				</div>);
	}
}

