import React, {Component} from "react";
import './ProjectDetails.css'
class ProjectDetail extends Component{
    render(){
        const {projectName, info, imgSrc, webUrl} = this.props;
        return(
            <div className="ProjectDetails">
                <div className="ProjectDetails-left">
                    <h3 className="ProjectDetails-title">{projectName}</h3>
                    <p className="ProjectDetails-info">{info}</p>
                    <p className="ProjectDetails-info">Click on Image to visit site</p>
                </div>
                <div className="ProjectDetails-right">
                    <a target="blank" href={webUrl}>
                        <img alt={projectName} key= {projectName} width='250' height='250' src={imgSrc}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectDetail;