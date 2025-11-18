import React from 'react';
import car from '../../../../assets/bookingIcon.png'
const HowItWorks = () => {
    const works =[
        {
            title:"booking Pick & Drop",
            description:["From personal packages to"," business shipments —   we deliver on time, every time."],
            image:car
        },
        {
            title:"Cash On Delivery",
            description:"From personal packages to business shipments — we deliver on time, every time.",
            image:car
        },
        {
            title:"Delivery Hub",
            description:"From personal packages to business shipments — we deliver on time, every time.",
            image:car
        },
        {
            title:" Booking SME & Corporate",
            description:"From personal packages to business shipments — we deliver on time, every time.",
            image:car
        },
         
    ]
    return (
        <div className='py-24   '>
            <h1 className='font-extrabold text-secondary pb-8 text-[32px]'>How it Works</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6'>
             {
                works.map((items,index)=>(
                    <div key={index} className='p-8 shadow-lg rounded-3xl bg-white  '>
                        <img src={items.image} alt="" />
                        <h1 className='font-bold text-[20px] text-secondary pt-6 pb-4'>{items.title}</h1>
                        <p className='text-description'>{items.description}</p>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default HowItWorks;