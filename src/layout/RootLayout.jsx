import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shares/Footer';
import Navbar from '../pages/Shares/Navbar';

const  RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;