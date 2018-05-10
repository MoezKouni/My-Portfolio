import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={activeTab:0};
	}
toggleCategories(){
	if(this.state.activeTab===0){
		return(
		<div className="projects-grid">	

	{/* PROJECT 1 */}
			<Card shadow={5} style={{minWidth:'450', margin:'auto'}} className="projects-anim1">
				<CardTitle style={{color:'#fff', height:'176px', background:'url(https://www.simplilearn.com/ice9/course_images/160x160/React.js-simplilearn.svgz) center / cover'}}>
					React Projects #1
				</CardTitle>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore	
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>Dribble</Button>
				</CardActions>
				<CardMenu>
					<IconButton name="share" style={{color:'#fff'}}/>
				</CardMenu>
			</Card>

{/* PROJECT 2 */}
			<Card shadow={5} style={{minWidth:'450', margin:'auto'}} className="projects-anim2">
				<CardTitle style={{color:'#fff', height:'176px', background:'url(https://www.simplilearn.com/ice9/course_images/160x160/React.js-simplilearn.svgz) center / cover'}}>
					React Projects #2
				</CardTitle>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore	
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>Dribble</Button>
				</CardActions>
				<CardMenu>
					<IconButton name="share" style={{color:'#fff'}}/>
				</CardMenu>
			</Card>

{/* PROJECT 3 */}
			<Card shadow={5} style={{minWidth:'450', margin:'auto'}} className="projects-anim3">
				<CardTitle style={{color:'#fff', height:'176px', background:'url(https://www.simplilearn.com/ice9/course_images/160x160/React.js-simplilearn.svgz) center / cover'}}>
					React Projects #3
				</CardTitle>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore	
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>Dribble</Button>
				</CardActions>
				<CardMenu>
					<IconButton name="share" style={{color:'#fff'}}/>
				</CardMenu>
			</Card>	
		</div>			
			)
	}
	else if (this.state.activeTab===1) {
		return(
			<div className="projects-tab0"><h1>This is Adobe Illustrator</h1></div>
			)
	}
	else if (this.state.activeTab===2) {
		return(
			<div><h1>This is Adobe Photoshop</h1></div>
			)
	}
	else {
		return(
			<div><h1>This is Adobe XD</h1></div>
			)
	}
}
	

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>React</Tab>
					<Tab>Adobe Illustrator</Tab>
					<Tab>Adobe Photoshop</Tab>
					<Tab>Adobe XD</Tab>
				</Tabs>

				
				<Grid>
					<Cell col={12}>
					<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>	
					
				
			</div>
			)
	}
}

export default Projects;