import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../../assets/banner/banner1.png';
import bannerImg2 from '../../../../assets/banner/banner2.png';
import bannerImg3 from '../../../../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <Carousel className='pt-9'
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className='relative'>
                <img src={bannerImg1} />
                <div className=' absolute top-114 ml-22'>
                    <p className='text-left'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
                        From personal <br /> packages to business shipments — we deliver on time, every time.</p> <br />
                   <div className='flex absolute top-15'>
                     <button className='bg-primary rounded-[100px] btn'>Track your parcel</button>
                    <div className=''> 
                        <BsArrowUpRightCircleFill size={35} color='text-primary ' /></div>
                    <button className='btn rounded-[10px] ml-4'>Be a rider</button>
                   </div>
                </div>
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
        </Carousel>
    );
};

export default Banner;