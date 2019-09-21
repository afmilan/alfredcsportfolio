import React, {Component}  from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>  
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <center><img
                        src= "profile.png"
                        alt="avatar"
                        className="avatar-img"
                        width="30%"
                        /></center>
                        <div className="banner-text">
                            <h1> Alfred George Francisco Milan III </h1>
                            <hr/>
                            <p> HTML/CSS | Bootstrap | Javascript | React | Bootstrap | Python (Pandas) | Django
                            </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href=" https://www.linkedin.com/in/alfred-george-milan-iii-223b72132/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/afmilan" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/georgemill23/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
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