import React, {Component}  from 'react';

class About extends Component{
    render(){
        return(
            <div className="about-body"> 
                    <center><img 
                            src="profile_circle.png"
                            alt="avatar"
                            style={{height: '400px'}}
                        />
                        <p style={{width: '95%', margin: 'auto', paddingTop: '1em'}}>
                        My name is Alfred George Francisco Milan III and I recently 
                        graduated with a Bachelor's of Science (B.Sci) in Computer 
                        Science from the University of California, Santa Cruz (UCSC). 
                        I have experience in web development - namely, front-end web dev – 
                        and data cleansing and mining, but am interested in pursuing software 
                        engineering and product and database management related roles as well. 
                        </p>
                        <p style={{width: '95%', margin: 'auto', paddingTop: '1em'}}>
                        If you navigate to the Resume, you will see my resume complete with 
                        my recent work experience. If you navigate the "Projects" section of 
                        this website, you'll see some of the various projects I've worked on.
                        </p>
                        <p style={{width: '95%', margin: 'auto', paddingTop: '1em'}}>
                        I have experience working with React, Bootstrap, Python (Pandas, 
                        skitlearn), MySQL, LaTeX, Scrum/Agile, Vue.js, and Web2Py. I am 
                        currently working on enhancing my technical skills by learning new 
                        languages, such as R (and more of Python), as well as new frameworks 
                        like Node and Django. I am looking for a full-time job and am actively 
                        applying to technical related jobs. Some roles I am open to include 
                        software engineer, full-stack web developer, front-end web dev, technology 
                        analyst, data analyst, database analyst, and product manager. I value 
                        culture, impact, and mission in a company I aspire to work in. Please feel 
                        free to contact me for job opportunities!
                        </p>
                        </center>
             </div>
        )
    }
}

export default About;