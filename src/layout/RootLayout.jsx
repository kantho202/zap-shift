import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shares/Footer';
import Navbar from '../pages/Shares/Navbar';

const  RootLayout = () => {
    return (
        <div className='w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;