import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div className='flex items-center  justify-center min-h-screen'>
            <h1 className=' text-2xl mr-4 text-center'>Payment is Unsuccessful</h1> 
             <Link to="/dashboard/my-parcels"><button className="btn btn-primary  text-black">Try again</button></Link>
        </div>
    );
};

export default PaymentCancel;