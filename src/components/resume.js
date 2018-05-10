import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
	render() {
		return(
			<div>
				<Grid> 
					<Cell col={4}  className='anim'>
						<div style={{textAlign:'center'}}>
							<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
							alt="avatar"
							style={{height:'200px'}}
							/>
						</div>

						<h2 style={{paddingTop:'2em'}}>Moez El Kouni</h2>
						<h4 style={{color:'grey'}}>Programmer</h4>
						<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
						<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>	
						<h5>Address</h5>
						<p>1 Hacker Way Menlo Park, 94025</p>
						<h5>Phone</h5>
						<p>(216) 54 042 343</p>
						<h5>Email</h5>
						<p>example@gmail.com</p>
						<h5>Web</h5>
						<p>mywebsite.com</p>
						<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>

					</Cell>
					
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>


						<Education
							startYear={2007}
							endYear={2011}
							schoolName="Lycée Hammam Sousse"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

						<Education
							startYear={2011}
							endYear={2017}
							schoolName="ESSTHS"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>

					<h2>Experience</h2>

					<Experience
							startYear={2017}
							endYear={2018}
							jobName="Technicien"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

					<Experience
							startYear={2017}
							endYear={2018}
							jobName="Technicien"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						/>

					<hr style={{borderTop:'3px solid #e22947'}}/>	

					<h2>Skills</h2>
					<Skills 
						skill="Illustrator"
						progress={90}

					/>
					<Skills 
						skill="Photoshop"
						progress={90}

					/>
					<Skills 
						skill="HTML/CSS"
						progress={80}

					/>
					<Skills 
						skill="React"
						progress={70}

					/>
<					Skills 
						skill="Javascript"
						progress={50}

					/>
					
					




					</Cell>

				</Grid>
			</div>
			)
	}
}

export default Resume;