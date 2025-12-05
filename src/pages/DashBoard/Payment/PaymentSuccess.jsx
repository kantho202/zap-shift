import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const PaymentSuccess = () => {
    const [searchParams]=useSearchParams()
    const sessionId =searchParams.get('session_id')
    const [paymentInfo,setPaymentInfo]=useState({})
    const axiosSecure =useAxiosSecure()
    console.log(sessionId)
    
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
                setPaymentInfo({
                    transactionId:res.data.transactionId,
                    trackingId:res.data.trackingId,
                })
            })
        }
    },[sessionId,axiosSecure])
    return (
        <div className='min-h-screen text-center'>
            <h1 className='text-2xl pb-3'>Payment Successfully</h1>
            <h2>Your transactionId :{paymentInfo.transactionId}</h2>
            <h2>Your Parcel trackingId :{paymentInfo.trackingId}</h2>
           
        </div>
    );
};

export default PaymentSuccess;