import React, {Component}  from 'react';

class Resume extends Component{
    render(){
        return(
            <div className="resume-body">
                <center>
                <img
                    src= "resume.png"
                    alt="avatar"
                    className="avatar-img"
                    width="50%"
                    />
                    </center>
            </div>
        )
    }
}

export default Resume;