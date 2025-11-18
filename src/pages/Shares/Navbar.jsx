import React from 'react';
import Logo from '../../components/Logo/Logo';
import { NavLink } from 'react-router';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Navbar = () => {
    const links =<>
        <NavLink to="" className="text-base pl-9"><li>Service</li></NavLink>
        <NavLink to="/coverage" className="text-base pl-9"><li>Coverage</li></NavLink>
        <NavLink to="" className="text-base pl-9"><li>About Us</li></NavLink>
        <NavLink to="" className="text-base pl-9"><li>Pricing</li></NavLink>
        <NavLink to="" className="text-base pl-9"><li>Blog</li></NavLink>
        <NavLink to="" className="text-base pl-9"><li>Content</li></NavLink>
    </>
    return (
        <div className="navbar rounded-2xl bg-white mt-7 shadow-sm px-8 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className=" text-xl"><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-3">SignIn</a>
                <a className="btn btn-primary text-secondary">Sign Up</a>
                <BsArrowUpRightCircleFill size={35} color='text-primary'/>
            </div>
        </div>
    );
};

export default Navbar;