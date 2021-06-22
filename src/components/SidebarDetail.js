import React from 'react';

import './SidebarDetail.css';

import {Link} from 'react-router-dom';

const SidebarDetail = ({Icon,text,link}) => {
    return (
        <div className='sidebardetail'>
            <div className='content'>
                <Link className='link' to={link}>
                    <div><Icon style={{fontSize:'20px'}} /> <span style={{marginLeft:'8px',fontSize:'18px',fontWeight:'500'}}>{text}</span></div>
                </Link>
            </div>
        </div>
    )
}

export default SidebarDetail;
