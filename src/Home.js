import React, {Component} from "react";
import './Home.css';
class Home extends Component{
    render(){
        const arrow = "-------->"
        return (
          <div id="home" className="Home">
            <div className="Home-welcome">Hello!</div>
            <div className="Home-name">
              <span>I'm </span>
              <span className="Home-myName" style={{ color: "#A00" }}>
                G
              </span>
              {"RISHMA".split("").map((ltr) => (
                <div className="Home-myName">{ltr}</div>
              ))}
            </div>
            <div className="Home-msg">Web Developer from India</div>
            <div>
              <a href="#projects">
                <button className="Home-button"> View my Projects</button>
              </a>
              <a href="#about">
                <button className="Home-button">About Me</button>
              </a>
            </div>
            <div className="Home-scroll">
              <div>SCROLL</div>
              <div>{arrow}</div>
            </div>
          </div>
        );
    }
}

export default Home;