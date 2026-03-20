import React from 'react';
import location from '../../../../assets/location-merchant.png'
import merchant from '../../../../assets/be-a-merchant-bg.png'
const Merchant = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 px-6 sm:px-12 md:px-16 py-14 bg-secondary rounded-4xl mb-25 bg-no-repeat'
         style={{ backgroundImage: `url(${merchant})` }}>
           <div className='flex-1'>
             <h1 className='font-extrabold text-2xl sm:text-3xl md:text-[40px] text-white'>Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className='text-[#DADADA] font-normal text-sm sm:text-base pb-8 pt-4'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
            <div className='flex flex-wrap gap-3'>
                <button className='btn bg-primary rounded-[100px] border-0'>Become a Merchant</button>
                <button className='btn text-primary btn-outline rounded-[100px] border'>Earn with ZapShift Courier</button>
            </div>
           </div>
           <div className='flex-shrink-0 flex justify-center'>
            <img src={location} alt="" className='w-48 md:w-auto' />
           </div>
        </div>
    );
};

export default Merchant;