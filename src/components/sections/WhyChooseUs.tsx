import React from 'react';
import { FaStar, FaDumbbell, FaWifi, FaCoffee, FaRupeeSign, FaCouch, FaClock, FaTableTennis } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: <FaStar className="text-yellow-400 text-4xl" />, title: "Community Events" },
    { icon: <FaDumbbell className="text-yellow-400 text-4xl" />, title: "Gym Facilities" },
    { icon: <FaWifi className="text-yellow-400 text-4xl" />, title: "Highspeed Wifi" },
    { icon: <FaCoffee className="text-yellow-400 text-4xl" />, title: "Cafe & Tea Bar" },
    { icon: <FaRupeeSign className="text-yellow-400 text-4xl" />, title: "Affordable" },
    { icon: <FaCouch className="text-yellow-400 text-4xl" />, title: "Comfort Lounges" },
    { icon: <FaClock className="text-yellow-400 text-4xl" />, title: "Quick Booking" },
    { icon: <FaTableTennis className="text-yellow-400 text-4xl" />, title: "Sports Area" },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose us?</h2>
          <div className="text-yellow-400 text-2xl sm:hidden cursor-pointer">→</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`
                sm:bg-gray-50
                bg-white p-6 flex flex-col items-center text-center
                shadow-md hover:shadow-md transition-shadow duration-300 md:shadow-none
                md:border-gray-200
                ${index % 4 !== 3 ? 'md:border-r' : ''} 
                ${index < 4 ? 'md:border-b' : ''}
              `}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 