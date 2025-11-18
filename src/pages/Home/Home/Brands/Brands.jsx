import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from '../../../../assets/brands/casio.png'
import amazon from '../../../../assets/brands/amazon.png'
import moonStar from '../../../../assets/brands/moonstar.png'
import star from '../../../../assets/brands/star.png'
import starPeople from '../../../../assets/brands/start_people.png'
import randstad from '../../../../assets/brands/randstad.png'
import { Autoplay } from 'swiper/modules';
const Brands = () => {
    const brandLogo = [casio, amazon, moonStar, star, starPeople, randstad]
    return (
        <div className='pb-25'>
            <h1 className='font-extrabold text-[28px] text-secondary text-center pb-10'>We've helped thousands of sales teams</h1>
            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

            >
                {
                    brandLogo.map((logo, index) => <SwiperSlide key={index}>
                        <img src={logo} alt="" />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Brands;