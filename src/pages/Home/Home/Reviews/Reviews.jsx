import React, { use } from 'react';
import customer from '../../../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div className='pb-32'>
            <img src={customer} className='mx-auto pb-5' alt="" />
            <h1 className='font-extrabold text-[40px] text-secondary lg:text-center'>What our customers are sayings</h1>
            <p className='text-[#606060] font-normal text-base pb-8 text-center pt-4'>
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment,
                reduce <br /> pain, and strengthen your body with ease!</p>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    modifier: 1,
                    scale:0.75,
                    slideShadows: true,
                }}
                 autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review =>
                        <SwiperSlide >
                            <ReviewCard key={review.id} review={review}>
                            </ReviewCard>
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </div>
    );
};

export default Reviews;