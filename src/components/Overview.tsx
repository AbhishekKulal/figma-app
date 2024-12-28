import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Overview: React.FC = () => {
    const [spaceOverview, setSpaceOverview] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const fetchData = () => {
        //         const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // const targetUrl = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json';

        setIsLoading(true)
        api.get('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json')
            .then((res) => {
                debugger
                setSpaceOverview(res?.data || [])
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(true)
                
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose us?</h2>
          <div className="text-yellow-400 text-2xl sm:hidden cursor-pointer">→</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {Array.isArray(spaceOverview) ? spaceOverview.map((feature, index) => (
            <div 
              key={index} 
              className={`
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
          )) : ''}
        </div>
      </div>
    </div>
  );
};

export default Overview; 