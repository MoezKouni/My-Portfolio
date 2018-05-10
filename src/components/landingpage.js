import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Projects from './projects';

class Landing extends Component{
	render() {
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1 className="textanim">Full Stack Web Developer</h1>
							<hr/>
							<p className="skillsanim">HTML/CSS | React | PHP | Adobe Illustrator | Adobe Photoshop | Adobe XD</p>

							<div className="social-links">


							  {/* Linkedin */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer" className="linked">
									<i className="fa fa-linkedin-square" aria-hidden="true"/>
								</a>

							  {/* Facebook */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer" className="FB">
									<i className="fa fa-facebook-square" aria-hidden="true"/>
								</a>
				

							</div>
							
						</div>
					</Cell>
				</Grid>	
			</div>
			)
	}
}

export default Landing;