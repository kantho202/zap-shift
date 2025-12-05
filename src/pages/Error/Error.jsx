import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router';
const Error = () => {
  return (
    <div className='min-h-screen  rounded-4xl bg-white mt-8 mb-20'>
      <div className='  '>
        <img src={error} className='mx-auto pt-20' alt="" />
      </div>
      <div className='flex justify-center'>
        <Link to="/" className='bg-primary btn '>Go Home</Link>
      </div>
    </div>
  );
};

export default Error;