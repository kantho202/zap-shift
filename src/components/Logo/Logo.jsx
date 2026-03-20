import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to="/" className='flex items-end'>
            <img src={logo} alt="" className='w-12 h-12' />
            <h3 className="text-2xl font-bold -ms-2">ZapShift</h3>
        </Link>
    );
};

export default Logo;