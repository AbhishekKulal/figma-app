import React from 'react';
import eventIcon from "../../assets/icons/event.svg"

import gymIcon from "../../assets/icons/gym.svg"
import wifiIcon from "../../assets/icons/wifi.svg"
import cafeIcon from "../../assets/icons/cafe.svg"
import loungesIcon from "../../assets/icons/lounges.svg"
import priceIcon from "../../assets/icons/price.svg"
import timerIcon from "../../assets/icons/timer.svg"
import soprtsIcon from "../../assets/icons/sports.svg"


const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: <img src={eventIcon} alt="event" className="text-yellow-400 text-4xl" />, title: "Community Events" },
    { icon: <img src={gymIcon} alt="gym" className="text-yellow-400 text-4xl" />, title: "Gym Facilities" },
    { icon: <img src={wifiIcon} alt="wifi" className="text-yellow-400 text-4xl" />, title: "Highspeed Wifi" },
    { icon: <img src={cafeIcon} alt="cafe" className="text-yellow-400 text-4xl" />, title: "Cafe & Tea Bar" },
    { icon: <img src={priceIcon} alt="afforable" className="text-yellow-400 text-4xl" />, title: "Affordable" },
    { icon: <img src={loungesIcon} alt="comfort" className="text-yellow-400 text-4xl" />, title: "Comfort Lounges" },
    { icon: <img src={timerIcon} alt="quick booking" className="text-yellow-400 text-4xl" />, title: "Quick Booking" },
    { icon: <img src={soprtsIcon} alt="soprts" className="text-yellow-400 text-4xl" />, title: "Sports Area" },
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