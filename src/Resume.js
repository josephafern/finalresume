import React from 'react';
import seal from './seal-light-black.png';
import './App.css';

export class Resume extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
    <div>
      
		<div className='overall'>
		<div className="header">
				<h1>Joseph Aurelio Fernandez</h1>
		</div>
		<div className="nav">
			<a href="#objective"><div className="nav-btn single-word">Objective</div></a>
			<a href="#education"><div className="nav-btn single-word">Education</div></a>
			<a href="#rel-exp"><div className="nav-btn single-word">Experience</div></a>
			
			<a href="#portfolio"><div className="nav-btn single-word">Portfolio</div></a>
		</div>
		<div className="main">
				<div id='objective'></div>
				<div className="objective">
					<h2>
						<span>Objective:</span>
					</h2>
			<div id="objective-grid">
				<img src={seal}/>
				<p>Stanford graduate skilled in analytical research, project management and content editing, looking to learn from and contribute to the success of an organization.</p>	
			</div>
			</div>
			<div id='education'></div>
			<div className="education">
				<h2><span>Education:</span></h2>
				<div className="year-row">
					<div className="left">
						Sept. 2012 - Jun. 2016:
					</div>
					<div className="right">
						<span>Stanford University:</span>
						<br/>
						Combined Major in Philosophy & Religious Studies
					</div>
					<div className="left">
						Aug. 2008 - Jun. 2012:
					</div>
					<div className="right">
						<span>Maritime & Science Technology (MAST) Academy</span>
						<br/>
						Concentration in Oceanic and Atmospheric Sciences
					</div>
				</div>
			</div>
			<div id='rel-exp'></div>
			<div className="rel-exp">
				<h2><span>Experience:</span></h2>
				<h3>Computer Science Background - </h3>
				<p>Core CS curriculum at Stanford. These courses 
				provided an extensive experience in systems architecture,
				memory management and performance optimization. I am 
				proficient in HTML, CSS and (soon to be) Javascript.</p>
				<h3>Pre-Colonial & Contemporary Philosophy - </h3>
				<p>Series of courses focused on philosophical ideologies
				and the sociological implications of their effects on human 
				history and behavior. Maintaining a concentration in pre-modern 
				Taoist, Existential and Romantic philosophies, I've gained a 
				unique perspective on different theories of ontology and 
				sociology, acquiring insight into historical movements and their 
				relation to both ancient and contemporary modes of thought. 
				Through this program, I've been given thorough experience in 
				critical analysis, writing and editing.</p>
			</div>
			<div id='portfolio'></div>
			<div className='portfolio'>
				<h2><span>Portfolio:</span></h2>
				<div className='port-grid'>
				<div className='port-item' onClick={()=>this.props.changeState({currentApp: 'raincheck'})}>Rain<br/>Check</div>
				<div className='port-item' onClick={()=>this.props.changeState({currentApp: 'mealsearch'})}>Meal<br/>Search</div>
				</div>
			</div>
		</div>
		</div>
    </div>
  );
	
	}

}