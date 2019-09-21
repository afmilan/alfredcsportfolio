import React, {Component}  from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div  className="projects-grid">
                {/* Okinawa Project */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(Okinawa.png) center / cover'}}> Okinawa Memories Initiative </CardTitle>
                    <CardText>
                    The Okinawa Memory Initiative is a faculty-led undergraduate research group within UCSC’s History Department that serves as the historical archive for faculty, undergraduate researchers, and Okinawa residents
                    </CardText>
                    <CardActions border>
                        <center><Button colored a href="https://github.com/afmilan/Okinawa-Initiative" rel="noopener noreferrer" target="_blank">
                            Github
                        </Button>
                        <Button colored a href="http://afternoon-peak-37346.herokuapp.com/home" rel="noopener noreferrer" target="_blank">
                            Live Demo
                        </Button>
                        </center>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab ===1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(latex.png) center / cover'}}> Technical Writing in CS </CardTitle>
                    <CardText>
                    A list of LaTeX projects for my technical writing class at UCSC. This includes a LaTeX manual, a Patent, an abstract criticism of published journals, and a 10-paged research paper on "Data Mining on Twitter for Improving Public Health and Safety."
                    </CardText>
                    <CardActions border>
                        <center>
                        <Button colored a href="https://github.com/afmilan/LaTeX" rel="noopener noreferrer" target="_blank">
                            Github
                        </Button>
                        </center>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    
                    <Tab>LaTeX</Tab>
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