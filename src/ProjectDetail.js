import React, {Component} from "react";
import './ProjectDetails.css'
class ProjectDetail extends Component{
    render(){
        const {projectName, info, imgSrc, webUrl} = this.props;
        return(
            <div className="ProjectDetails">
                <div className="ProjectDetails-left">
                    <span className="ProjectDetails-title">{projectName}</span>
                    <span className="ProjectDetails-info">{info}</span>
                    <span className="ProjectDetails-info">Click on Image to visit site</span>
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