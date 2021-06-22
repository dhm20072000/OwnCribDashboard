import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import './Layout.css';

const Layout = (props) => {
    return(
        <div className='layout'>
            <Header />
            <div className='body'>
                <div>
                    <Sidebar />
                </div>
                <div className='content'>
                    {props.children}
                    <Footer />
                </div>
            </div>
            
        </div>
    );
};

export default Layout;