import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
const AuthLayout = () => {
    const {loading}=useAuth()
    if(loading ){
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
            <div className='bg-white flex justify-center'>
                <div className='w-full max-w-lg pt-8 px-6 sm:px-10'>
                    <Logo></Logo>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='hidden md:flex bg-[#FAFDF0] items-center justify-center'>
                <img src={authImage} className='mx-auto max-w-sm lg:max-w-md' alt="" />
            </div>
        </div>
    );
};

export default AuthLayout;