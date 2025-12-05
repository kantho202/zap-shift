import React from 'react';
import loadingAnimation from '../../../animations/loading.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* <span className="loading loading-spinner loading-xl"></span> */}
            <Lottie option
            animationData={loadingAnimation}
            ></Lottie>

        </div>
    );
};

export default Loading;