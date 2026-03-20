import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleSignOut = () => {
        signOutUser().catch(error => console.log(error))
    }

    const navLinkClass = ({ isActive }) =>
        `block px-5 py-2.5 rounded-full text-base font-medium transition-colors ${isActive ? 'bg-primary text-secondary' : 'hover:bg-base-200'}`

    return (
        <nav className="bg-white rounded-2xl mt-7 shadow-sm px-6 sm:px-10 py-5 relative z-50">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Desktop links */}
                <ul className="hidden lg:flex items-center gap-1">
                    <li><NavLink to="/service" className={navLinkClass}>Service</NavLink></li>
                    <li><NavLink to="/coverage" className={navLinkClass}>Coverage</NavLink></li>
                    <li><NavLink to="/aboutUs" className={navLinkClass}>About Us</NavLink></li>
                    <li><NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink></li>
                    <li><NavLink to="/rider" className={navLinkClass}>Be a Rider</NavLink></li>
                    {user && <>
                        <li><NavLink to="/add-parcel" className={navLinkClass}>Add Parcel</NavLink></li>
                        <li><NavLink to="/dashboard/my-parcels" className={navLinkClass}>My Parcels</NavLink></li>
                        <li><NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink></li>
                    </>}
                </ul>

                {/* Desktop auth buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    {user ? (
                        <button onClick={handleSignOut} className="btn btn-md rounded-full px-6">Sign Out</button>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-md rounded-full px-6">Sign In</Link>
                            <Link to="/rider" className="btn btn-md btn-primary text-secondary rounded-full px-6">Be a Rider</Link>
                        </>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden btn btn-ghost btn-sm"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="lg:hidden mt-3 pb-3 border-t border-base-200">
                    <ul className="flex flex-col gap-1 pt-3">
                        <li><NavLink to="/service" className={navLinkClass} onClick={() => setMenuOpen(false)}>Service</NavLink></li>
                        <li><NavLink to="/coverage" className={navLinkClass} onClick={() => setMenuOpen(false)}>Coverage</NavLink></li>
                        <li><NavLink to="/aboutUs" className={navLinkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
                        <li><NavLink to="/pricing" className={navLinkClass} onClick={() => setMenuOpen(false)}>Pricing</NavLink></li>
                        <li><NavLink to="/rider" className={navLinkClass} onClick={() => setMenuOpen(false)}>Be a Rider</NavLink></li>
                        {user && <>
                            <li><NavLink to="/add-parcel" className={navLinkClass} onClick={() => setMenuOpen(false)}>Add Parcel</NavLink></li>
                            <li><NavLink to="/dashboard/my-parcels" className={navLinkClass} onClick={() => setMenuOpen(false)}>My Parcels</NavLink></li>
                            <li><NavLink to="/dashboard" className={navLinkClass} onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
                        </>}
                        <li className="pt-2 flex flex-col gap-2 px-4">
                            {user ? (
                                <button onClick={() => { handleSignOut(); setMenuOpen(false) }} className="btn btn-sm w-full rounded-full">Sign Out</button>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setMenuOpen(false)} className="btn btn-sm w-full rounded-full">Sign In</Link>
                                    <Link to="/rider" onClick={() => setMenuOpen(false)} className="btn btn-sm btn-primary text-secondary w-full rounded-full">Be a Rider</Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
