import React, {Component} from "react";
import './About.css';
class About extends Component{
    render(){
        return(
            <div id="about" className="About">
                <div className="About-cover"/>
                <fieldset className="About-fieldset">
                    <legend>
                        ABOUT
                    </legend>
                </fieldset>
                <h1>Hello!</h1>
            </div>
        );
    }
}

export default About;