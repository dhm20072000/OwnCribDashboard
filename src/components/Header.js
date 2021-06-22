import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src="images/2.png" alt="OwnCrib" />
            </div>
            <div>
                <input type="text" placeholder="Hi,what are you looking for today?" />
            </div>
            <div className='header__icon'>
                <div><AnnouncementIcon /> <span style={{marginLeft:'5px',fontWeight:'600'}}>Alerts</span></div>
                <div style={{borderLeft:'1px solid black'}}><span style={{marginRight:'5px',fontWeight:'600'}}>Hi OwnCrib!</span> <AccountCircleIcon style={{fontSize:40}} /></div>
            </div>
        </div>
    );
}

export default Header;
