import React from 'react';

const features = [
  { icon: "🎉", title: "Community Events" },
  { icon: "💪", title: "Gym Facilities" },
  { icon: "📶", title: "High-Speed WiFi" },
  { icon: "☕", title: "Cafe & Tea Bar" },
  { icon: "💰", title: "Affordable" },
  { icon: "🛋️", title: "Comfort Lounges" },
  { icon: "⏱️", title: "Quick Booking" },
  { icon: "🏃", title: "Sports Area" },
];

const Features: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-gray-700">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 