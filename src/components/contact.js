import React, {Component}  from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body"> 
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2> Alfred George Francisco Milan III</h2>
                    <img 
                            src="profile.png"
                            alt="avatar"
                            style={{height: '200px'}}
                        />
                        <p style={{width: '95%', margin: 'auto', paddingTop: '1em'}}>
                        I am a Computer Science Student from University of California, 
                        Santa Cruz with a demonstrated history of working in a four-year 
                        university bureaucracy and small office settings. I have experience, 
                        and am currently looking for opportunities into, but not limited to, Software 
                        Engineering, Data Science, Web Development, UI/UX Development, 
                        Database, and Project Management.
                        </p>
                        <p style={{width: '95%', margin: 'auto', paddingTop: '1em'}}>
                        Please feel free to check out my projects 
                        and experience on Github and LinkedIn and contact me for job opportunities!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto Condensed'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        310-344-3019
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto Condensed'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        afmilan@ucsc.edu
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto Condensed'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        My LinkedIn
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto Condensed'}}>
                                        <i className="fa fa-github" aria-hidden="true"/>
                                        My Github
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;