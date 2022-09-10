import React, {Component} from "react";
import { Grid } from "@mui/material";
import Grishma from "./images/GrishmaAvatar.png"
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
                <Grid container spacing={0}>
                    <Grid className="About-info" item xs={6}>
                        
                I am a Web Developer. I build apps with a clean UI and a focus on the UX. <br/><br/>

                My current tech stack is React, Next JS, Bootstrap and Material UI.<br/><br/>
                I'm open to freelancing and collaborating with others on interesting projects.<br/><br/>
                <a  href="#contact"><button>Contact Me</button></a>
                    </Grid>
                    <Grid className="About-img" item xs={6}>
                        <img className="About-avatar"  alt="Grishma" src={Grishma}/>
                    </Grid>
                    </Grid>
            </div>
        );
    }
}

export default About;