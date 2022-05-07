import React, {Component} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    const urlHash = window.location.hash;
    if (urlHash.length) {
      const element = document.getElementById(urlHash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
