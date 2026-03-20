import React from 'react';
import Logo from '../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <NavLink to="/service" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Service</li></NavLink>
        <NavLink to="/coverage" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Coverage</li></NavLink>
        <NavLink to="/aboutUs" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>About Us</li></NavLink>
        <NavLink to="/pricing" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Pricing</li></NavLink>
        <NavLink to="/rider" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Be a rider</li></NavLink>

        {
            user &&<>

            <NavLink to="/add-parcel" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Add a parcel</li></NavLink> 
            <NavLink to="/dashboard/my-parcels" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>My parcel</li></NavLink> 
            <NavLink to="/dashboard" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Dashboard</li></NavLink> 
            
            </> 
        }
        {/* <NavLink to="/blog" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Blog</li></NavLink>
        <NavLink to="/content" className="text-base pl-"><li className='px-5 py-2 rounded-[50px]'>Content</li></NavLink> */}
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
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <>
                        <Link to="/login" onClick={handleSignOut} className='btn btn-sm md:btn-md mr-1'>Signout</Link>
                        <Link to="/rider" className="btn btn-sm md:btn-md btn-primary text-secondary rounded-[10px] hidden sm:flex">Be a rider</Link>
                    </>
                    :
                    <>
                     <Link to="/login" className="btn btn-sm md:btn-md mr-1 rounded-[10px]">SignIn</Link>
                     <Link to="/rider" className="btn btn-sm md:btn-md btn-primary text-secondary rounded-[10px] hidden sm:flex">Be a rider</Link>
                    </>
                }
                <BsArrowUpRightCircleFill size={28} className='text-primary hidden md:block' />
            </div>
        </div>
    );
};

export default Navbar;