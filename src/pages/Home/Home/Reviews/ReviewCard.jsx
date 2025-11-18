import React from 'react';
import { BsChatQuote } from 'react-icons/bs';

const ReviewCard = ({ review }) => {
    const {userName,review:testimonial,user_photoURL}=review
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow p-6">
      
      {/* Quote Icon */}
      <div className="text-[#9AD1D4] text-4xl">
        <BsChatQuote />
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-relaxed">
       {testimonial}
      </p>

      {/* Dashed Line */}
      <div className="border-t-2 border-dashed border-[#03373D] my-4"></div>

      {/* User Section */}
      <div className="flex items-center gap-3">
        
        {/* Avatar / Circle */}
        <div className="w-10 h-10 bg-[#03373D] rounded-full">
            <img src={user_photoURL} className='rounded-full' alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-[#03373D]">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>

    </div>
    );
};

export default ReviewCard;