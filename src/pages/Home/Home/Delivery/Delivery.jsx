import React from 'react';
import { BsDash } from 'react-icons/bs';
import liveTrack from '../../../../assets/live-tracking.png'
import safeDelivery from '../../../../assets/safe-delivery.png'
const Delivery = () => {
    const delivery =[
        {
            title:"Live Parcel Tracking",
            description:"Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get  instant status updates for complete peace of mind.",
            image:liveTrack
        },
        {
            title:"100% Safe Delivery",
            description:"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image:safeDelivery
        },
        {
            title:"24/7 Call Center Support",
            description:"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image:safeDelivery
        },
    ]
    return (
        <div className=''>
            <div className='border-t-2 border-dashed pb-10 text-secondary'></div>
            {
                delivery.map((deliver, i) =>
                    <div key={i} className='flex flex-col md:flex-row items-center gap-8 bg-white mb-6 rounded-3xl p-6 md:p-8'>
                        <div className='flex-shrink-0'>
                            <img src={deliver.image} alt="" className='w-32 md:w-auto mx-auto' />
                        </div>
                        <div className='hidden md:block border-r-2 border-dashed self-stretch'></div>
                        <div className='text-center md:text-left'>
                            <h1 className='text-xl md:text-2xl font-extrabold text-secondary pb-4'>{deliver.title}</h1>
                            <p>{deliver.description}</p>
                        </div>
                    </div>
                )
            }
            <div className='border-b-2 border-dashed pb-20 mb-20 text-secondary'></div>
        </div>
    );
};

export default Delivery;