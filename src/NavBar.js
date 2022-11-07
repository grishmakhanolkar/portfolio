import React, {Component} from "react";
import Avatar from '@mui/material/Avatar';
import { Box } from "@mui/material";
import { SpeedDial } from "@mui/material";
import { SpeedDialAction } from "@mui/material";
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import './NavBar.css';
class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = ({
      anchor:'right',
      anchorState: false
    });
  }

  render(){
    const actions = [
      { icon: <EmailTwoToneIcon/>, name: 'contact', id:'contact', link:'#contact' },
      // {icon: <HistoryEduTwoToneIcon/>, name: 'Blog',link:'#blogs' },
      { icon: <AssignmentTwoToneIcon/>, name: 'projects', link:'#projects' },
      { icon: <AccountCircleTwoToneIcon/>, name: 'about', link:'#about' },
      { icon: <CottageTwoToneIcon/>, name: 'home', link:'#home' },
    ];
    return(
      <nav className="NavBar">
        <a href="/">
          <Avatar className="NavBar-avatar" alt="Grishma Prabhukhanolkar" src="/android-chrome-512x512.png"/>
        </a>
        <div className="NavBar-menu">
          <Box sx={{ width: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              direction="left"
              sx={{ position: 'absolute', top: -10, right: 10, 
                '& .css-118zhtq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab':{ backgroundColor: 'black',},
                '& .css-118zhtq-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover':{ backgroundColor: 'black', },
              }}
              icon={<MenuOpenIcon fontSize="large" className="NavBar-menu-icon"></MenuOpenIcon> }
            >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                href = {action.link}
              ></SpeedDialAction>
            ))}
            </SpeedDial>
          </Box>
        </div>
      </nav>
    );
  }
}

export default NavBar;