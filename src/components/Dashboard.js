import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';

import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='body'>
                <div className='left-section'>
                    <div className='top'>
                        <FormatListNumberedIcon /> Todo
                    </div>
                    <hr />
                    <div className='card'>
                        <img src="images/2.png" width='100px' height='80px' alt="" />
                        <div style={{display:'flex',width:'500px',justifyContent:'space-between'}}>Please set up your profile <Link to='/profile'><ArrowForwardIcon style={{float:'right'}} /></Link></div>
                    </div>
                    <div className='card'>
                        <img src="images/2.png" width='100px' height='80px' alt="" />
                        <div style={{display:'flex',width:'500px',justifyContent:'space-between'}}>Start saving time now. Input contract details once. Then share with your choice of others to avoid answering redundant followup.<Link to='/profile'><ArrowForwardIcon style={{float:'right'}} /></Link></div>
                    </div>
                    <div className='card'>
                        <img src="images/2.png" width='100px' height='80px' alt="" />
                        <div style={{display:'flex',width:'500px',justifyContent:'space-between'}}>Please set up your profile <Link to='/profile'><ArrowForwardIcon style={{float:'right'}} /></Link></div>
                    </div>
                    <div className='card'>
                        <img src="images/2.png" width='100px' height='80px' alt="" />
                        <div style={{display:'flex',width:'500px',justifyContent:'space-between'}}>Please set up your profile <Link to='/profile'><ArrowForwardIcon style={{float:'right'}} /></Link></div>
                    </div>
                </div>
                <div className='right-section'>
                    <div className='top'>
                        <AddCircleIcon /> Add Transaction
                    </div>
                    <div className='middle'>
                        <SmsIcon /> Message Box
                    </div>
                    <div className='bottom'>
                        <NotificationsIcon /> Notifications
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
