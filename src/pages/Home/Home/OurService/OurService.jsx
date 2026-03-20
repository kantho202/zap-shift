import React from 'react';
import service from '../../../../assets/service.png'
const OurService = () => {
    const services = [
        {
            title: "Express  & Standard Delivery",
            description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
            image: service
        },
        {
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
            image: service
        },
        {
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
            image: service
        },
        {
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
            image: service
        },
        {
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support.",
            image: service
        },

        {
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
            image: service
        },

    ]
    return (
        <div className='bg-secondary px-6 sm:px-12 md:px-20 py-16 rounded-4xl mb-[100px]'>
            <h1 className='text-white font-extrabold text-center text-2xl sm:text-3xl md:text-[40px]'>Our Service</h1>
            <p className='text-center text-[#DADADA] pt-4 pb-8 text-sm sm:text-base'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
             {
                services.map((items,index)=>(
                    <div key={index} className='p-8 shadow-lg rounded-3xl bg-white hover:bg-primary  '>
                        <img src={items.image} className='mx-auto' alt="" />
                        <h1 className='font-bold text-[20px] text-center text-secondary pt-6 pb-4'>{items.title}</h1>
                        <p className='text-description text-center'>{items.description}</p>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default OurService;
