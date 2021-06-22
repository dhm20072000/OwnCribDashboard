import React from 'react';
import SidebarDetail from './SidebarDetail';

import TvIcon from '@material-ui/icons/Tv';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DescriptionIcon from '@material-ui/icons/Description';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarDetail Icon={TvIcon} text='Dashboard' link='/dashboard' />
            <SidebarDetail Icon={InsertDriveFileIcon} text='Transactions' link='/transactions' />
            <SidebarDetail Icon={SmsIcon} text='Messages' link='/messages' />
            <SidebarDetail Icon={NotificationsIcon} text='Notifications' link='/notifications' />
            <SidebarDetail Icon={DescriptionIcon} text='Documments' link='/documents' />
            <SidebarDetail Icon={CalendarTodayIcon} text='Calendar' link='/calendar' />
            <SidebarDetail Icon={PersonIcon} text='Profile' link='/profile' />
            <SidebarDetail Icon={HelpIcon} text='Support' link='/support' />
            <hr/>
        </div>
    )
}

export default Sidebar;
