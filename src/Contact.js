import React, {Component} from "react";
import { Paper, TextField, Grid } from "@mui/material";
import FacebookIcon from './images/facebook-icon.png';
import GithubIcon from './images/githubicon.png';
import Insta from './images/Insta.png';
import LinkedinIcon from './images/linkedin.png';
import TwitterIcon from './images/twitter.png';
import MediumIcon from './images/mediumIcon.png'
import './Contact.css';
class Contact extends Component {
    constructor(props){
        super(props);
        this.state= {
            userName:"",
            email:"",
            message:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        fetch('https://sheet.best/api/sheets/8e7710d2-54ff-4f18-833e-21cf242bd38b',
        {method: 'POST',
        headers: {
                    'Content-Type': 'application/json',
                  },
        body: JSON.stringify(this.state)
        });  
        this.setState({
            userName:"",
            email:"",
            message:""
        })
        alert('Thank You for your Feedback!');
    }

    render(){
        const socialIcon = [
            {siteLink: "https://www.linkedin.com/in/grishmakhanolkar/", imgLink: LinkedinIcon, name:'linkedin'},
            {siteLink: "https://www.facebook.com/grishma.khanolkar/", imgLink: FacebookIcon, name:'facebook'},
            {siteLink: "https://www.instagram.com/grishmakhanolkar/", imgLink: Insta, name:'insta'},
            {siteLink: "https://twitter.com/k_grishma/", imgLink: TwitterIcon, name:'twitter'},
            {siteLink: "https://github.com/grishmakhanolkar", imgLink: GithubIcon, name: 'github'},
            {siteLink: "https://medium.com/@grishmakhanolkar", imgLink: MediumIcon, name: 'medium'},
        ];

        return(
            <section id="contact" className="Contact">
                
                {/* <fieldset className="Contact-fieldset">
                    <legend>
                        CONTACT ME
                    </legend>
                </fieldset> */}
                <h2 className="Contact-title"> Contact Me</h2>
                <div className="Contact-cover"/>
                <Grid container spacing={0}>
                    <Grid item xs={7}>
                        <Paper style={{
                            display: 'flex',
                            position:'relative',
                            padding: '0', 
                            margin: 'auto', 
                            textAlign:'center',
                            width: "70%",
                            backgroundColor: "#fafafa",
                            border:'1rem inset',
                            borderRadius:"2rem",
                            }} 
                            elevation={3}>  
                            <form className="feedback" onSubmit={this.handleSubmit}>
                                <TextField
                                    name="userName" 
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    label="Your Name:"
                                    sx={{ 
                                        width: '100%',
                                        marginBottom: '1rem',
                                        '& label.Mui-focused': {
                                            color: 'black',
                                        },
                                        '& .MuiInput-underline:after': {borderBottomColor: 'black',},
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {borderColor: 'black',},
                                            '&:hover fieldset': {borderColor: 'black',},
                                            '&.Mui-focused fieldset': {borderColor: 'black', backgroundColor:'aqua', opacity:'0.2'},
                                        },
                                    }}>
                                </TextField>
                                <TextField
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    label="Your Email:"
                                    sx={{ 
                                        width: '100%',
                                        marginBottom: '1rem',
                                        marginTop: '1rem',
                                        '& label.Mui-focused': {color: 'black',},
                                        '& .MuiInput-underline:after': {borderBottomColor: 'black',},
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {borderColor: 'black',},
                                            '&:hover fieldset': {borderColor: 'black',},
                                            '&.Mui-focused fieldset': {borderColor: 'black', backgroundColor:'aqua', opacity:'0.2'},
                                        },
                                    }}>
                                </TextField>
                                <TextField
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    label="Message:"
                                    sx={{ 
                                        width: '100%',
                                        textAnchor: 'top',
                                        marginBottom: '1rem',
                                        marginTop: '1rem',
                                        '& label.Mui-focused': {color: 'black',},
                                        '& .MuiInput-underline:after': {borderBottomColor: 'black',},
                                        '& .MuiOutlinedInput-root': {
                                            height: '200px',
                                            '& fieldset': {borderColor: 'black',},
                                            '&:hover fieldset': {borderColor: 'black',},
                                            '&.Mui-focused fieldset': {borderColor: 'black', backgroundColor:'aqua', opacity:'0.2'},
                                        },
                                    }}
                                    multiline
                                    fullWidth>
                                </TextField>
                                <button>Send Message</button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="contact-or">OR</div>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{
                            display: 'block',
                            position:'relative',
                            paddingRight:'3rem',
                            paddingTop: '3rem', 
                            justifyContent:'center',
                            textAlign:'center',
                            backgroundColor: "#171717",
                        }}>
                            <fieldset className="contact-social">
                                <legend>
                                    Social Media:
                                </legend>
                                <ul >
                                    {socialIcon.map((socIcon)=> 
                                    <li className="contact-social-list">
                                        <a  target = "blank" href ={socIcon.siteLink}>
                                            <img alt={socIcon.name} src={socIcon.imgLink} style={{width:'50px', height:'50px'}}/>
                                        </a>
                                    </li>
                                    )}
                                </ul>
                            </fieldset>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default Contact;