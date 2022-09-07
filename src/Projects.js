import React, {Component} from "react";
import ProjectDetail from "./ProjectDetail";
import Translator from './images/Translator.png';
import QRCode from './images/QRCode.png';
import Hangman from './images/HangMan.png';
import LightsOut from './images/LightsOut.png';
import ToDo from './images/Todo.png';
import ColourPalette from './images/colourpalette.png';
import YTVideoPlayer from './images/YTVideoPlayer.png';
import Login from './images/Login.png';
import './Projects.css';
class Projects extends Component{
    render(){
        const newProject = [
            {projectName: 'YT Video Player', Description:"Search and play any YouTube content. Created using Next JS and Bootstrap", imgSrc: YTVideoPlayer, webUrl: "https://ytvideoplayer.netlify.app"},
            {projectName: 'Login Page', Description:"A sample Login page using Google OAuth. Created using React and Material UI", imgSrc: Login, webUrl: "https://loginpage-sample.netlify.app/"},
            {projectName: 'Colour Palette', Description:"This project contains colour palettes. Select and copy any colour of your choice. Created using React", imgSrc: ColourPalette, webUrl: "https://projectcolourpalette.netlify.app"},
            {projectName: 'ToDo App', Description:"Create your To Do list using this app. Created using React, React Hooks and Material UI.", imgSrc: ToDo, webUrl: "https://project-todo-list-app.netlify.app"},
            {projectName: 'Hangman', Description:"Guess the correct word. You get 6 incorrect chances till game ends.", imgSrc: Hangman, webUrl:"https://projecthangman.netlify.app"},
            {projectName: 'Lights Out', Description:"Click on Cell to change colour of that cell and its adjacent neighbours (top, bottom, left & right). Make all cells white to win.", imgSrc: LightsOut, webUrl: "https://projectlightsout.netlify.app"},
            {projectName: 'Translator App', Description:"This project lets you convert text into Morse code, Pirate Talk or Shakesphere Dialect.", imgSrc: Translator, webUrl: "https://projecttranslator.netlify.app"},
            {projectName: 'QR Code', Description:"This project lets you convert any Text/URL into a Visual QR Code.", imgSrc: QRCode, webUrl: "https://projectqrcode.netlify.app"},
            
            ]
        return(
            <div id="projects" className="Projects">
                <div className="Projects-cover"></div>
                <fieldset className="Projects-fieldset"><legend>PROJECTS</legend></fieldset>
                {newProject.map((project)=> 
                    <ProjectDetail projectName={project.projectName} info ={project.Description} imgSrc={project.imgSrc} webUrl = {project.webUrl}/>
                )}
            </div>
        );
    }
}

export default Projects;