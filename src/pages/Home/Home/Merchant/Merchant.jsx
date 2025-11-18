import React from 'react';
import location from '../../../../assets/location-merchant.png'
import merchant from '../../../../assets/be-a-merchant-bg.png'
const Merchant = () => {
    return (
        <div className='flex p-20 bg-secondary rounded-4xl mb-25  bg-no-repeat'
         style={{ backgroundImage: `url(${merchant})`  }}>
           <div>
            {/* <img src={merchant} alt="" /> */}
             <h1 className='font-extrabold text-[40px] text-white'>Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className='text-[#DADADA] font-normal text-base pb-8 pt-4'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
            <div className='flex'>
                <button className='btn bg-primary mr-4 rounded-[100px] border-0'> Become a Merchant</button>
                <button className='btn text-primary btn-outline rounded-[100px] border'> Earn with ZapShift Courier</button>
            </div>
           </div>
           <div>
            <img src={location} alt="" />
           </div>
        </div>
    );
};

export default Merchant;