import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  render() {
    const arrow = "-------->";
    return (
      <section id="home" className="Home">
        <h2 className="Home-welcome">Hello!</h2>
        <h1 className="Home-name">
          <span>I'm </span>
          <span className="Home-myName" style={{ color: "#A00" }}>
            G
          </span>
          {"rishma".toUpperCase().split("").map((ltr) => (
            <div className="Home-myName">{ltr}</div>
          ))}
        </h1>
        <p className="Home-msg">Web Developer from India</p>
        <div>
          <a href="#projects" className="Home-button">
            <button > View my Projects</button>
          </a>
          <a href="#about" className="Home-button">
            <button className="Home-button">About Me</button>
          </a>
        </div>
        <div className="Home-scroll">
          <div>Scroll</div>
          <div>{arrow}</div>
        </div>
      </section>
    );
  }
}

export default Home;
