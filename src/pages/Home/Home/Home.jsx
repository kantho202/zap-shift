import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import OurService from './OurService/OurService';
import Brands from './Brands/Brands';
import Delivery from './Delivery/Delivery';
import Merchant from './Merchant/Merchant';
import Reviews from './Reviews/Reviews';
import FreQuently from './FreQuently/FreeeQuently';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Loading/Loading';


const reviewsPromise =fetch('/public/reviews.json').then(res=>res.json())
const Home = () => {
    const {loading}=useAuth()
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <OurService></OurService>
        <Brands></Brands>
        <Delivery></Delivery>
        <Merchant></Merchant>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
        <FreQuently></FreQuently>
        </div>
    );
};

export default Home;