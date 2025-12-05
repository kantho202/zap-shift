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
        <div className='grid grid-cols-2 h-full min-h-screen '>
            <div className='bg-white flex-1 flex justify-center h-full'>
                <div className='w-7xl mx-auto pt-8 pl-14'>
                    <Logo></Logo>
                    <div className='flex'>
                        <div className='  h-full flex-1 '>
                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-[#FAFDF0] flex-1 flex items-center h-full'>
                <div className='flex-1 '>
                    <img src={authImage} className='mx-auto ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;